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
  return sendEmailNotification(submission);
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
