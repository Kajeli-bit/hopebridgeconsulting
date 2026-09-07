import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { auth } from "@/lib/auth";
import { isSuperAdmin, getUserRole, ADMIN_ROLES } from "@/lib/roles";
import dbConnect from "@/lib/dbConnect";
import User from "@/models/User";

async function requireSuperAdmin() {
  const session = await auth();
  if (!session || !isSuperAdmin(getUserRole(session.user))) {
    return NextResponse.json({ success: false, error: "Unauthorized" }, { status: 401 });
  }
  return null;
}

// GET all users (super admin only)
export async function GET() {
  const unauthorized = await requireSuperAdmin();
  if (unauthorized) return unauthorized;

  try {
    await dbConnect();
    const users = await User.find({}, { password: 0 }).sort({ createdAt: -1 });
    return NextResponse.json({ success: true, data: users });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}

// POST create a new admin user with a direct email + password (super admin only)
export async function POST(request: NextRequest) {
  const unauthorized = await requireSuperAdmin();
  if (unauthorized) return unauthorized;

  try {
    await dbConnect();
    const body = await request.json();
    const { email, name, password, role } = body;

    if (!email || !name || !password) {
      return NextResponse.json(
        { success: false, error: "Email, name, and password are required" },
        { status: 400 }
      );
    }

    if (typeof password !== "string" || password.length < 8) {
      return NextResponse.json(
        { success: false, error: "Password must be at least 8 characters" },
        { status: 400 }
      );
    }

    const normalizedEmail = String(email).toLowerCase().trim();
    const selectedRole = role || "admin";
    if (!ADMIN_ROLES.includes(selectedRole)) {
      return NextResponse.json(
        { success: false, error: "Role must be either admin or superadmin" },
        { status: 400 }
      );
    }

    // Check if user already exists
    const existingUser = await User.findOne({ email: normalizedEmail });
    if (existingUser) {
      return NextResponse.json(
        { success: false, error: "A user with this email already exists" },
        { status: 400 }
      );
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({
      email: normalizedEmail,
      name: String(name).trim(),
      password: hashedPassword,
      role: selectedRole,
    });

    return NextResponse.json(
      {
        success: true,
        data: { id: user._id, email: user.email, name: user.name, role: user.role },
      },
      { status: 201 }
    );
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 400 }
    );
  }
}
