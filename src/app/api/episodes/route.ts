import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/lib/dbConnect";
import Episode from "@/models/Episode";

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
