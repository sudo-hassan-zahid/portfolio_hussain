import { NextResponse } from "next/server";
import { z } from "zod";
import { db, hasDatabase } from "@/db";
import { contactSubmissions } from "@/db/schema";
import { sendContactNotifications } from "@/lib/contact/notifications";

const contactSchema = z.object({
  name: z.string().trim().min(2).max(180),
  email: z.email().max(220),
  phone: z.string().trim().min(10).max(80),
  caseType: z.string().trim().min(1).max(180),
  message: z.string().trim().min(10).max(5000),
});

export async function POST(request: Request) {
  const parsed = contactSchema.safeParse(await request.json().catch(() => null));

  if (!parsed.success) {
    return NextResponse.json(
      { error: "Please check the form details and try again." },
      { status: 400 },
    );
  }

  const notification = await sendContactNotifications(parsed.data);
  const notificationStatus =
    notification.status === "sent"
      ? "sent"
      : notification.status === "not_configured"
        ? "not_configured"
        : "failed";

  if (hasDatabase()) {
    await db().insert(contactSubmissions).values({
      ...parsed.data,
      notificationStatus,
      notificationError: notification.error,
    });
  }

  if (!hasDatabase() && notification.status !== "sent") {
    return NextResponse.json(
      { error: "Contact handling is not configured yet." },
      { status: 503 },
    );
  }

  return NextResponse.json({ ok: true });
}
