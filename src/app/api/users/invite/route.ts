import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import crypto from "crypto";
import dbConnect from "@/lib/dbConnect";
import User from "@/models/User";
import { resend } from "@/lib/resend";

// POST invite a new user
export async function POST(request: NextRequest) {
  try {
    const session = await auth();
    if (!session || (session.user as any).role !== "admin") {
      return NextResponse.json({ success: false, error: "Unauthorized" }, { status: 401 });
    }

    await dbConnect();
    const body = await request.json();
    const { email, name, role } = body;

    if (!email || !name) {
      return NextResponse.json(
        { success: false, error: "Email and name are required" },
        { status: 400 }
      );
    }

    // Check if user already exists
    const existingUser = await User.findOne({ email: email.toLowerCase() });
    if (existingUser) {
      return NextResponse.json(
        { success: false, error: "A user with this email already exists" },
        { status: 400 }
      );
    }

    // Generate invite token (valid for 7 days)
    const inviteToken = crypto.randomBytes(32).toString("hex");
    const inviteExpiry = new Date();
    inviteExpiry.setDate(inviteExpiry.getDate() + 7);

    const user = await User.create({
      email: email.toLowerCase(),
      name,
      role: role || "user",
      isInvited: true,
      inviteToken,
      inviteExpiry,
    });

    // Build the password setup URL
    const baseUrl = process.env.NEXTAUTH_URL || process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : "http://localhost:3000";
    const setPasswordUrl = `${baseUrl}/set-password?token=${inviteToken}`;

    // Send invitation email
    const { error: emailError } = await resend.emails.send({
      from: "Hope Bridge <noreply@hopebridgeconsulting.org>",
      to: [email.toLowerCase()],
      subject: "You've been invited to join Hope Bridge Admin",
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
        </head>
        <body style="margin: 0; padding: 0; background-color: #f4f4f5; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">
          <table width="100%" cellpadding="0" cellspacing="0" style="padding: 40px 20px;">
            <tr>
              <td align="center">
                <table width="100%" cellpadding="0" cellspacing="0" style="max-width: 480px; background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);">
                  <!-- Header -->
                  <tr>
                    <td style="padding: 32px 32px 16px; text-align: center;">
                      <h1 style="margin: 0; font-size: 22px; font-weight: 700; color: #1e3a5f;">
                        Welcome to Hope Bridge
                      </h1>
                      <p style="margin: 8px 0 0; font-size: 14px; color: #71717a;">
                        Counselling &amp; Consultancy
                      </p>
                    </td>
                  </tr>
                  <!-- Body -->
                  <tr>
                    <td style="padding: 16px 32px;">
                      <p style="margin: 0 0 16px; font-size: 15px; color: #3f3f46; line-height: 1.6;">
                        Hi <strong>${name}</strong>,
                      </p>
                      <p style="margin: 0 0 16px; font-size: 15px; color: #3f3f46; line-height: 1.6;">
                        An administrator has invited you to join the Hope Bridge admin panel. Click the button below to set your password and get started.
                      </p>
                      <table width="100%" cellpadding="0" cellspacing="0" style="margin: 24px 0;">
                        <tr>
                          <td align="center">
                            <a href="${setPasswordUrl}" style="display: inline-block; background-color: #4a9e6e; color: #ffffff; font-size: 15px; font-weight: 600; text-decoration: none; padding: 12px 32px; border-radius: 9999px;">
                              Set Your Password
                            </a>
                          </td>
                        </tr>
                      </table>
                      <p style="margin: 0 0 8px; font-size: 13px; color: #a1a1aa; line-height: 1.6;">
                        This link will expire in <strong>7 days</strong>.
                      </p>
                      <p style="margin: 0; font-size: 13px; color: #a1a1aa; line-height: 1.6;">
                        If you didn't expect this invitation, you can safely ignore this email.
                      </p>
                    </td>
                  </tr>
                  <!-- Footer -->
                  <tr>
                    <td style="padding: 24px 32px; border-top: 1px solid #e4e4e7;">
                      <p style="margin: 0; font-size: 12px; color: #a1a1aa; text-align: center;">
                        Hope Bridge Counselling &amp; Consultancy · Dar es Salaam
                      </p>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </body>
        </html>
      `,
    });

    if (emailError) {
      // Still create the user but warn that email failed
      return NextResponse.json(
        { 
          success: true, 
          data: { id: user._id, email: user.email, name: user.name },
          warning: "User created but invitation email could not be sent. Please share the link manually."
        },
        { status: 201 }
      );
    }

    return NextResponse.json(
      { 
        success: true, 
        data: { id: user._id, email: user.email, name: user.name } 
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
