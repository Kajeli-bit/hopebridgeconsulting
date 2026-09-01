import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import dbConnect from "@/lib/dbConnect";
import User from "@/models/User";

// POST set password for invited user
export async function POST(request: NextRequest) {
  try {
    await dbConnect();
    const body = await request.json();
    const { token, password } = body;

    if (!token || !password) {
      return NextResponse.json(
        { success: false, error: "Token and password are required" },
        { status: 400 }
      );
    }

    if (password.length < 8) {
      return NextResponse.json(
        { success: false, error: "Password must be at least 8 characters" },
        { status: 400 }
      );
    }

    // Find user by invite token
    const user = await User.findOne({ inviteToken: token });
    if (!user) {
      return NextResponse.json(
        { success: false, error: "Invalid or expired invitation" },
        { status: 400 }
      );
    }

    // Check if token has expired
    if (user.inviteExpiry && new Date() > user.inviteExpiry) {
      return NextResponse.json(
        { success: false, error: "Invitation has expired" },
        { status: 400 }
      );
    }

    // Hash password and update user
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    user.password = hashedPassword;
    user.isInvited = false;
    user.inviteToken = null;
    user.inviteExpiry = null;
    await user.save();

    return NextResponse.json({
      success: true,
      message: "Password set successfully. You can now log in.",
    });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
