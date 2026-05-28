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
  const to = getNotificationRecipients();
  const from =
    process.env.CONTACT_NOTIFY_FROM_EMAIL ??
    "Law Clients <contact@hussain-zahid.vercel.app>";

  if (!apiKey || !to.length) {
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

function getNotificationRecipients() {
  return (process.env.CONTACT_NOTIFY_EMAIL ?? "")
    .split(",")
    .map((email) => email.trim())
    .filter(Boolean);
}

function formatNotificationText(submission: ContactNotification) {
  return [
    "New portfolio contact submission",
    "",
    `<b>Name:</b> ${submission.name}`,
    `<b>Email:</b> ${submission.email}`,
    `<b>Phone:</b> ${submission.phone}`,
    `<b>Case type:</b> ${submission.caseType}`,
    "",
    `<b>Message:</b> ${submission.message}`,
  ].join("\n");
}
