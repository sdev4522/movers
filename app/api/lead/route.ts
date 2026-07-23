import { NextResponse } from "next/server";

const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const accessKey = process.env.WEB3FORMS_ACCESS_KEY;

    if (!accessKey) {
      console.error("Web3Forms access key is not configured.");
      return NextResponse.json(
        {
          ok: false,
          error:
            "Web3Forms access key is not configured. Add WEB3FORMS_ACCESS_KEY to your .env.local.",
        },
        { status: 500 },
      );
    }

    const payload = {
      access_key: accessKey,
      subject: `New lead from ${data.name ?? "website visitor"}`,
      name: data.name,
      email: data.email,
      phone: data.phone,
      service: data.service,
      from: data.from,
      to: data.to,
      date: data.date,
      message: data.message,
      // You can add more custom fields here if needed.
    };

    const response = await fetch(WEB3FORMS_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Web3Forms error:", response.status, errorText);
      return NextResponse.json({ ok: false }, { status: 500 });
    }

    const result = await response.json();
    console.log("📦 Web3Forms submission result:", result);

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Lead API error:", err);
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
