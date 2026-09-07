import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { isAdminRole } from "@/lib/roles";
import dbConnect from "@/lib/dbConnect";
import TeamMember from "@/models/TeamMember";

async function requireAdmin() {
  const session = await auth();
  if (!session || !isAdminRole((session.user as any).role)) {
    return NextResponse.json({ success: false, error: "Unauthorized" }, { status: 401 });
  }
  return null;
}

// GET all team members
export async function GET() {
  try {
    await dbConnect();
    const members = await TeamMember.find({}).sort({ order: 1, createdAt: 1 });
    return NextResponse.json({ success: true, data: members });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}

// POST create a new team member
export async function POST(request: NextRequest) {
  const unauthorized = await requireAdmin();
  if (unauthorized) return unauthorized;

  try {
    await dbConnect();
    const body = await request.json();
    const member = await TeamMember.create(body);
    return NextResponse.json({ success: true, data: member }, { status: 201 });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 400 }
    );
  }
}
