import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { isAdminRole } from "@/lib/roles";
import dbConnect from "@/lib/dbConnect";
import Episode from "@/models/Episode";

async function requireAdmin() {
  const session = await auth();
  if (!session || !isAdminRole((session.user as any).role)) {
    return NextResponse.json({ success: false, error: "Unauthorized" }, { status: 401 });
  }
  return null;
}

// GET all episodes (with optional category filter)
export async function GET(request: NextRequest) {
  try {
    await dbConnect();
    const { searchParams } = new URL(request.url);
    const category = searchParams.get("category");

    const filter: Record<string, any> = { published: true };
    if (category) {
      filter.category = category;
    }

    const episodes = await Episode.find(filter).sort({ number: -1 });
    return NextResponse.json({ success: true, data: episodes });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}

// POST create a new episode
export async function POST(request: NextRequest) {
  const unauthorized = await requireAdmin();
  if (unauthorized) return unauthorized;

  try {
    await dbConnect();
    const body = await request.json();
    const episode = await Episode.create(body);
    return NextResponse.json({ success: true, data: episode }, { status: 201 });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 400 }
    );
  }
}
