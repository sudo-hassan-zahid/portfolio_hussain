type ContactNotification = {
  name: string;
  email: string;
  phone: string;
  caseType: string;
  message: string;
};

type NotificationResult = {
  status: "sent" | "not_configured" | "failed";
  error?: string;
};

export async function sendContactNotifications(
  submission: ContactNotification,
): Promise<NotificationResult> {
  const results = await Promise.allSettled([
    sendEmailNotification(submission),
    sendSmsNotification(submission),
  ]);

  const fulfilled = results
    .filter((result): result is PromiseFulfilledResult<NotificationResult> => result.status === "fulfilled")
    .map((result) => result.value);
  const rejected = results.filter(
    (result): result is PromiseRejectedResult => result.status === "rejected",
  );

  if (fulfilled.some((result) => result.status === "sent")) {
    return { status: "sent" };
  }

  if (rejected.length || fulfilled.some((result) => result.status === "failed")) {
    return {
      status: "failed",
      error:
        fulfilled.find((result) => result.status === "failed")?.error ??
        rejected[0]?.reason?.message ??
        "Notification failed.",
    };
  }

  return { status: "not_configured" };
}

async function sendEmailNotification(
  submission: ContactNotification,
): Promise<NotificationResult> {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_NOTIFY_EMAIL;
  const from = process.env.CONTACT_NOTIFY_FROM_EMAIL ?? "Portfolio Contact <onboarding@resend.dev>";

  if (!apiKey || !to) {
    return { status: "not_configured" };
  }

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to,
      reply_to: submission.email,
      subject: `New portfolio contact: ${submission.caseType}`,
      text: formatNotificationText(submission),
    }),
  });

  if (!response.ok) {
    return { status: "failed", error: await response.text() };
  }

  return { status: "sent" };
}

async function sendSmsNotification(
  submission: ContactNotification,
): Promise<NotificationResult> {
  const accountSid = process.env.TWILIO_ACCOUNT_SID;
  const authToken = process.env.TWILIO_AUTH_TOKEN;
  const from = process.env.TWILIO_FROM_PHONE;
  const to = process.env.CONTACT_NOTIFY_PHONE;

  if (!accountSid || !authToken || !from || !to) {
    return { status: "not_configured" };
  }

  const params = new URLSearchParams({
    From: from,
    To: to,
    Body: `New contact from ${submission.name} (${submission.phone}): ${submission.caseType}`,
  });

  const response = await fetch(
    `https://api.twilio.com/2010-04-01/Accounts/${accountSid}/Messages.json`,
    {
      method: "POST",
      headers: {
        Authorization: `Basic ${Buffer.from(`${accountSid}:${authToken}`).toString("base64")}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: params,
    },
  );

  if (!response.ok) {
    return { status: "failed", error: await response.text() };
  }

  return { status: "sent" };
}

function formatNotificationText(submission: ContactNotification) {
  return [
    "New portfolio contact submission",
    "",
    `Name: ${submission.name}`,
    `Email: ${submission.email}`,
    `Phone: ${submission.phone}`,
    `Case type: ${submission.caseType}`,
    "",
    submission.message,
  ].join("\n");
}
