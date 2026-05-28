import { createSupabaseServerClient } from "@/lib/supabase/server";

export async function getAdminUser() {
  try {
    const supabase = await createSupabaseServerClient();
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user?.email) {
      return null;
    }

    const allowedEmails = process.env.ADMIN_EMAILS?.split(",")
      .map((email) => email.trim().toLowerCase())
      .filter(Boolean);

    if (allowedEmails?.length && !allowedEmails.includes(user.email.toLowerCase())) {
      return null;
    }

    return user;
  } catch {
    return null;
  }
}
