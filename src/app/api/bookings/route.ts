import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { isAdminRole } from "@/lib/roles";
import dbConnect from "@/lib/dbConnect";
import Booking from "@/models/Booking";

async function requireAdmin() {
  const session = await auth();
  if (!session || !isAdminRole((session.user as any).role)) {
    return NextResponse.json({ success: false, error: "Unauthorized" }, { status: 401 });
  }
  return null;
}

// GET all bookings
export async function GET(request: NextRequest) {
  const unauthorized = await requireAdmin();
  if (unauthorized) return unauthorized;

  try {
    await dbConnect();
    const { searchParams } = new URL(request.url);
    const status = searchParams.get("status");

    const filter: Record<string, any> = {};
    if (status) {
      filter.status = status;
    }

    const bookings = await Booking.find(filter).sort({ createdAt: -1 });
    return NextResponse.json({ success: true, data: bookings });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}

// POST create a new booking
export async function POST(request: NextRequest) {
  try {
    await dbConnect();
    const body = await request.json();
    const { serviceType, service, date, time, format, name, phone } = body;

    if (!serviceType || !service || !date || !time || !format || !name || !phone) {
      return NextResponse.json(
        { success: false, error: "Missing required fields: serviceType, service, date, time, format, name, phone" },
        { status: 400 }
      );
    }

    const allowedFields = ["serviceType", "service", "date", "time", "format", "name", "phone", "email", "communication", "notes"];
    const sanitized: Record<string, any> = {};
    for (const key of allowedFields) {
      if (key in body) {
        const value = body[key];
        if (typeof value === "string") {
          const trimmed = value.trim();
          if (trimmed.length > 0) {
            sanitized[key] = trimmed;
          }
        } else if (value !== null && value !== undefined) {
          sanitized[key] = value;
        }
      }
    }

    const booking = await Booking.create(sanitized);
    return NextResponse.json({ success: true, data: booking }, { status: 201 });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 400 }
    );
  }
}
