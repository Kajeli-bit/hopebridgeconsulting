import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { isAdminRole } from "@/lib/roles";
import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const REQUIRED_WIDTH = 562;
const REQUIRED_HEIGHT = 749;

export async function POST(request: NextRequest) {
  const session = await auth();
  if (!session || !isAdminRole((session.user as any).role)) {
    return NextResponse.json({ success: false, error: "Unauthorized" }, { status: 401 });
  }

  try {
    const { file, folder } = await request.json();

    if (!file) {
      return NextResponse.json(
        { success: false, error: "No file provided" },
        { status: 400 }
      );
    }

    // Upload to Cloudinary with forced dimensions
    const result = await cloudinary.uploader.upload(file, {
      folder: folder || "hopebridge/team",
      resource_type: "image",
      transformation: [
        { width: REQUIRED_WIDTH, height: REQUIRED_HEIGHT, crop: "fill" },
      ],
    });

    return NextResponse.json({
      success: true,
      data: { url: result.secure_url, publicId: result.public_id },
    });
  } catch (error: any) {
    console.error("Upload error:", error);
    return NextResponse.json(
      { success: false, error: error.message || "Upload failed" },
      { status: 500 }
    );
  }
}
