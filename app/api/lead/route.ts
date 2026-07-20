import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        const data = await req.json();

        // Log the lead (replace with your email/CRM/DB integration)
        console.log("📦 New lead received:", {
            timestamp: new Date().toISOString(),
            name: data.name,
            phone: data.phone,
            email: data.email ?? "(not provided)",
            from: data.from,
            to: data.to,
            date: data.date ?? "(not specified)",
            service: data.service ?? "(not specified)",
            message: data.message ?? "(none)",
        });

        // TODO: Integrate with your preferred channel:
        // - Email: use Resend (https://resend.com) or Nodemailer
        // - CRM: forward to Zoho, HubSpot, or Freshsales
        // - WhatsApp notification: Twilio / Meta Business API
        // - Database: insert into Supabase / PlanetScale / MongoDB

        return NextResponse.json({ ok: true });
    } catch (err) {
        console.error("Lead API error:", err);
        return NextResponse.json({ ok: false }, { status: 500 });
    }
}
