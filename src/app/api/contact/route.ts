import { NextResponse } from "next/server";
import { Resend } from "resend";

type ContactRequest = {
name: string;
email: string;
organization: string;
phone: string;
service: string;
details: string;
};

function escapeHtml(value: string) {
const entities: Record<string, string> = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;",
};

return value.replace(/[&<>"']/g, (character) => entities[character]);
}

function buildEmailHtml({
name,
email,
organization,
phone,
service,
details,
}: ContactRequest) {
const row = (label: string, value: string) => `
    <tr>
    <td style="padding: 14px 0; border-bottom: 1px solid #E6D5EC;">
        <div style="font-family: Arial, sans-serif; font-size: 11px; font-weight: 700; letter-spacing: 1px; text-transform: uppercase; color: #990099; margin-bottom: 4px;">
        ${escapeHtml(label)}
        </div>
        <div style="font-family: Arial, sans-serif; font-size: 15px; color: #1A111C;">
        ${escapeHtml(value)}
        </div>
    </td>
    </tr>
`;

return `
    <div style="background-color: #faf8fc; padding: 40px 20px; font-family: Arial, sans-serif;">
    <table role="presentation" width="100%" style="max-width: 560px; margin: 0 auto; background: #ffffff; border-radius: 16px; overflow: hidden; border: 1px solid #E6D5EC;">
        <tr>
        <td style="background: linear-gradient(135deg, #45005C, #990099); background-color: #45005C; padding: 32px 36px;">
            <div style="font-weight: 800; font-size: 18px; color: #ffffff; letter-spacing: -0.5px;">Nexora <span style="color: #E6D5EC;">Agency</span></div>
            <div style="font-size: 13px; color: rgba(255,255,255,0.7); margin-top: 6px;">New Consultation Request</div>
        </td>
        </tr>
        <tr>
        <td style="padding: 32px 36px;">
            <table role="presentation" width="100%" style="border-collapse: collapse;">
            ${row("Full Name", name)}
            ${row("Email", email)}
            ${row("Organization", organization)}
            ${row("Phone", phone)}
            ${row("Service Needed", service)}
            </table>
            <div style="margin-top: 20px;">
            <div style="font-size: 11px; font-weight: 700; letter-spacing: 1px; text-transform: uppercase; color: #990099; margin-bottom: 8px;">Project Scope &amp; Details</div>
            <div style="font-size: 14px; color: #5A4F5E; line-height: 1.6; background: #faf8fc; padding: 16px; border-radius: 8px; border: 1px solid #E6D5EC; white-space: pre-wrap;">${escapeHtml(details || "No additional details provided.")}</div>
            </div>
            <a href="mailto:${encodeURIComponent(email)}" style="display: inline-block; margin-top: 28px; background: #990099; color: #ffffff; text-decoration: none; font-weight: 700; font-size: 14px; padding: 12px 24px; border-radius: 8px;">
            Reply to ${escapeHtml(name.split(" ")[0])} &rarr;
            </a>
        </td>
        </tr>
        <tr>
        <td style="padding: 20px 36px; background: #faf8fc; border-top: 1px solid #E6D5EC;">
            <div style="font-size: 11px; color: #5A4F5E;">This inquiry was submitted via the Nexora Agency website contact form.</div>
        </td>
        </tr>
    </table>
    </div>
`;
}

export async function POST(request: Request) {
const apiKey = process.env.RESEND_API_KEY;
if (!apiKey) {
    return NextResponse.json(
    {
        success: false,
        error:
        "The email service is not configured. Add RESEND_API_KEY to .env.local and restart the dev server.",
    },
    { status: 500 },
    );
}

const payload: unknown = await request.json().catch(() => null);
if (!payload || typeof payload !== "object") {
    return NextResponse.json(
    { success: false, error: "The form data could not be read. Please try again." },
    { status: 400 },
    );
}

const values = payload as Record<string, unknown>;
const name = typeof values.name === "string" ? values.name.trim() : "";
const email = typeof values.email === "string" ? values.email.trim() : "";
const organization =
    typeof values.organization === "string" ? values.organization.trim() : "";
const phone = typeof values.phone === "string" ? values.phone.trim() : "";
const service = typeof values.service === "string" ? values.service.trim() : "";
const details = typeof values.details === "string" ? values.details.trim() : "";

if (!name || !email || !organization || !phone || !service) {
    return NextResponse.json(
    {
        success: false,
        error: "Please complete all required fields and select a service.",
    },
    { status: 400 },
    );
}

if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json(
    { success: false, error: "Please enter a valid email address." },
    { status: 400 },
    );
}

try {
    const resend = new Resend(apiKey);
    const { data, error } = await resend.emails.send({
    from:
        process.env.RESEND_FROM_EMAIL ??
        "Nexora Agency <onboarding@resend.dev>",
    to: "ayobamitade@gmail.com",
    replyTo: email,
    subject: `New Consultation Request — ${organization.replace(/[\r\n]+/g, " ").slice(0, 120)}`,
    html: buildEmailHtml({
        name,
        email,
        organization,
        phone,
        service,
        details,
    }),
    });

    if (error) {
    console.error("Resend rejected the contact email:", error);
    return NextResponse.json(
        {
        success: false,
        error:
            process.env.NODE_ENV === "development"
            ? error.message
            : "The email could not be sent. Please try again or email us directly.",
        },
        { status: 502 },
    );
    }

    return NextResponse.json({ success: true, emailId: data?.id });
} catch (error) {
    console.error("Unexpected contact email error:", error);
    return NextResponse.json(
    {
        success: false,
        error:
        process.env.NODE_ENV === "development"
            ? "The email request could not reach Resend. Check the server terminal for details."
            : "The email could not be sent. Please try again or email us directly.",
    },
    { status: 502 },
    );
}
}
