import { NextRequest, NextResponse } from "next/server";
import { getResend } from "@/lib/resend";

const RECIPIENTS = [
  "felix.mkini@hopebridgeconsulting.org",
  "anna.mbeyela@hopebridgeconsulting.org",
  "levina.athanas@hopebridgeconsulting.org",
];

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, reason, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: "Name, email, and message are required" },
        { status: 400 }
      );
    }

    const reasonLabels: Record<string, string> = {
      counseling: "Counseling Inquiry",
      consultancy: "Consultancy Inquiry",
      "hope-talks": "Hope Talks / Guest Inquiry",
      general: "General Inquiry",
    };

    const { error: emailError } = await getResend().emails.send({
      from: process.env.RESEND_FROM_EMAIL || "Hope Bridge Contact <noreply@hopebridgeconsulting.org>",
      to: RECIPIENTS,
      subject: `New Contact Form Submission: ${reasonLabels[reason] || reason || "General Inquiry"}`,
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
                <table width="100%" cellpadding="0" cellspacing="0" style="max-width: 600px; background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);">
                  <tr>
                    <td style="padding: 32px 32px 16px; text-align: center; background-color: #1e3a5f;">
                      <h1 style="margin: 0; font-size: 22px; font-weight: 700; color: #ffffff;">New Contact Message</h1>
                      <p style="margin: 8px 0 0; font-size: 14px; color: #7bc67e;">Hope Bridge Counseling & Consultancy</p>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding: 24px 32px;">
                      <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom: 16px;">
                        <tr>
                          <td style="padding: 12px; background-color: #f9fafb; border-radius: 8px;">
                            <p style="margin: 0; font-size: 12px; color: #71717a; text-transform: uppercase; letter-spacing: 0.05em;">Name</p>
                            <p style="margin: 4px 0 0; font-size: 15px; color: #3f3f46; font-weight: 500;">${name}</p>
                          </td>
                        </tr>
                        <tr><td style="height: 8px;"></td></tr>
                        <tr>
                          <td style="padding: 12px; background-color: #f9fafb; border-radius: 8px;">
                            <p style="margin: 0; font-size: 12px; color: #71717a; text-transform: uppercase; letter-spacing: 0.05em;">Email</p>
                            <p style="margin: 4px 0 0; font-size: 15px; color: #3f3f46; font-weight: 500;">${email}</p>
                          </td>
                        </tr>
                        ${phone ? `<tr><td style="height: 8px;"></td></tr><tr><td style="padding: 12px; background-color: #f9fafb; border-radius: 8px;"><p style="margin: 0; font-size: 12px; color: #71717a; text-transform: uppercase; letter-spacing: 0.05em;">Phone</p><p style="margin: 4px 0 0; font-size: 15px; color: #3f3f46; font-weight: 500;">${phone}</p></td></tr>` : ""}
                        ${reason ? `<tr><td style="height: 8px;"></td></tr><tr><td style="padding: 12px; background-color: #f9fafb; border-radius: 8px;"><p style="margin: 0; font-size: 12px; color: #71717a; text-transform: uppercase; letter-spacing: 0.05em;">Reason</p><p style="margin: 4px 0 0; font-size: 15px; color: #3f3f46; font-weight: 500;">${reasonLabels[reason] || reason}</p></td></tr>` : ""}
                      </table>
                      <table width="100%" cellpadding="0" cellspacing="0">
                        <tr>
                          <td style="padding: 12px; background-color: #f9fafb; border-radius: 8px;">
                            <p style="margin: 0; font-size: 12px; color: #71717a; text-transform: uppercase; letter-spacing: 0.05em;">Message</p>
                            <p style="margin: 8px 0 0; font-size: 15px; color: #3f3f46; line-height: 1.6; white-space: pre-wrap;">${message}</p>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding: 16px 32px; border-top: 1px solid #e4e4e7;">
                      <p style="margin: 0; font-size: 12px; color: #a1a1aa; text-align: center;">Hope Bridge Counselling &amp; Consultancy · Dar es Salaam</p>
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
      console.error("Failed to send contact email:", emailError);
      return NextResponse.json(
        { success: false, error: "Failed to send email. Please try again later." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, message: "Message sent successfully" });
  } catch (error: any) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { success: false, error: error.message || "Something went wrong" },
      { status: 500 }
    );
  }
}
