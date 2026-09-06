import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import dbConnect from "@/lib/dbConnect";
import Resource from "@/models/Resource";

async function requireAdmin() {
  const session = await auth();
  if (!session || (session.user as any).role !== "admin") {
    return NextResponse.json({ success: false, error: "Unauthorized" }, { status: 401 });
  }
  return null;
}

// GET all resources (with optional category filter)
export async function GET(request: NextRequest) {
  try {
    await dbConnect();
    const { searchParams } = new URL(request.url);
    const category = searchParams.get("category");

    const filter: Record<string, any> = { published: true };
    if (category) {
      filter.category = category;
    }

    const resources = await Resource.find(filter).sort({ createdAt: -1 });
    return NextResponse.json({ success: true, data: resources });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}

// POST create a new resource
export async function POST(request: NextRequest) {
  const unauthorized = await requireAdmin();
  if (unauthorized) return unauthorized;

  try {
    await dbConnect();
    const body = await request.json();
    const resource = await Resource.create(body);
    return NextResponse.json({ success: true, data: resource }, { status: 201 });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 400 }
    );
  }
}
