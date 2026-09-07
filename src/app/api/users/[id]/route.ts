import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { auth } from "@/lib/auth";
import { isSuperAdmin, getUserRole, getUserId, ADMIN_ROLES } from "@/lib/roles";
import dbConnect from "@/lib/dbConnect";
import User from "@/models/User";

async function requireSuperAdmin() {
  const session = await auth();
  if (!session || !isSuperAdmin(getUserRole(session.user))) {
    return NextResponse.json({ success: false, error: "Unauthorized" }, { status: 401 });
  }
  return null;
}

// PUT update a user (name, role, or password reset) — super admin only
export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const unauthorized = await requireSuperAdmin();
  if (unauthorized) return unauthorized;

  try {
    await dbConnect();
    const { id } = await params;
    const session = await auth();
    const sessionUserId = getUserId(session?.user);

    const body = await request.json();
    const updates: { name?: string; role?: string; password?: string } = {};

    if (body.name !== undefined) {
      if (typeof body.name !== "string" || !body.name.trim()) {
        return NextResponse.json(
          { success: false, error: "Name cannot be empty" },
          { status: 400 }
        );
      }
      updates.name = body.name.trim();
    }

    if (body.role !== undefined) {
      if (!ADMIN_ROLES.includes(body.role)) {
        return NextResponse.json(
          { success: false, error: "Role must be either admin or superadmin" },
          { status: 400 }
        );
      }
      if (id === sessionUserId && body.role !== "superadmin") {
        return NextResponse.json(
          { success: false, error: "You cannot remove your own superadmin role" },
          { status: 400 }
        );
      }
      updates.role = body.role;
    }

    if (body.password !== undefined && body.password !== "") {
      if (typeof body.password !== "string" || body.password.length < 8) {
        return NextResponse.json(
          { success: false, error: "Password must be at least 8 characters" },
          { status: 400 }
        );
      }
      updates.password = await bcrypt.hash(body.password, 10);
    }

    if (Object.keys(updates).length === 0) {
      return NextResponse.json(
        { success: false, error: "Nothing to update" },
        { status: 400 }
      );
    }

    const user = await User.findByIdAndUpdate(id, updates, {
      new: true,
      runValidators: true,
    }).select("-password");

    if (!user) {
      return NextResponse.json(
        { success: false, error: "User not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      data: { id: user._id, email: user.email, name: user.name, role: user.role },
    });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 400 }
    );
  }
}

// DELETE a user — super admin only (cannot delete yourself)
export async function DELETE(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const unauthorized = await requireSuperAdmin();
  if (unauthorized) return unauthorized;

  try {
    await dbConnect();
    const { id } = await params;
    const session = await auth();
    const sessionUserId = getUserId(session?.user);

    if (id === sessionUserId) {
      return NextResponse.json(
        { success: false, error: "You cannot delete your own account" },
        { status: 400 }
      );
    }

    const user = await User.findByIdAndDelete(id);
    if (!user) {
      return NextResponse.json(
        { success: false, error: "User not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true, data: {} });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
