import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/lib/dbConnect";
import Episode from "@/models/Episode";

// GET single episode
export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    await dbConnect();
    const { id } = await params;
    const episode = await Episode.findById(id);
    if (!episode) {
      return NextResponse.json(
        { success: false, error: "Episode not found" },
        { status: 404 }
      );
    }
    return NextResponse.json({ success: true, data: episode });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}

// PUT update an episode
export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    await dbConnect();
    const { id } = await params;
    const body = await request.json();
    const episode = await Episode.findByIdAndUpdate(id, body, {
      new: true,
      runValidators: true,
    });
    if (!episode) {
      return NextResponse.json(
        { success: false, error: "Episode not found" },
        { status: 404 }
      );
    }
    return NextResponse.json({ success: true, data: episode });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 400 }
    );
  }
}

// DELETE an episode
export async function DELETE(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    await dbConnect();
    const { id } = await params;
    const episode = await Episode.findByIdAndDelete(id);
    if (!episode) {
      return NextResponse.json(
        { success: false, error: "Episode not found" },
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
