"use server";

import { eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { db } from "@/db";
import {
  certifications,
  educations,
  experiences,
  heroImages,
  testimonials,
} from "@/db/schema";
import { getAdminUser } from "@/lib/admin/auth";
import { createSupabaseServerClient } from "@/lib/supabase/server";

async function requireAdmin() {
  const user = await getAdminUser();

  if (!user) {
    redirect("/admin/login");
  }
}

function getString(formData: FormData, key: string) {
  return String(formData.get(key) ?? "").trim();
}

function getId(formData: FormData) {
  const id = Number(formData.get("id"));

  if (!Number.isInteger(id) || id <= 0) {
    throw new Error("Invalid record id.");
  }

  return id;
}

export async function signInAction(formData: FormData) {
  const email = getString(formData, "email");
  const password = getString(formData, "password");

  let errorType: "config" | "invalid" | null = null;

  try {
    const supabase = await createSupabaseServerClient();
    const { error } = await supabase.auth.signInWithPassword({ email, password });

    if (error) {
      errorType = "invalid";
    }
  } catch {
    errorType = "config";
  }

  if (errorType) {
    redirect(`/admin/login?error=${errorType}`);
  }

  redirect("/admin/dashboard");
}

export async function signOutAction() {
  const supabase = await createSupabaseServerClient();
  await supabase.auth.signOut();
  redirect("/admin/login");
}

export async function updateHeroImageAction(formData: FormData) {
  await requireAdmin();

  await db()
    .update(heroImages)
    .set({
      imageUrl: getString(formData, "imageUrl"),
      alt: getString(formData, "alt"),
      captionName: getString(formData, "captionName"),
      captionTitle: getString(formData, "captionTitle"),
      updatedAt: new Date(),
    })
    .where(eq(heroImages.id, getId(formData)));

  revalidatePath("/");
  revalidatePath("/admin/dashboard");
}

export async function updateExperienceAction(formData: FormData) {
  await requireAdmin();

  await db()
    .update(experiences)
    .set({
      period: getString(formData, "period"),
      role: getString(formData, "role"),
      firm: getString(formData, "firm"),
      description: getString(formData, "description"),
      updatedAt: new Date(),
    })
    .where(eq(experiences.id, getId(formData)));

  revalidatePath("/");
  revalidatePath("/admin/dashboard");
}

export async function updateEducationAction(formData: FormData) {
  await requireAdmin();

  await db()
    .update(educations)
    .set({
      title: getString(formData, "title"),
      issuer: getString(formData, "issuer"),
      year: getString(formData, "year"),
      detail: getString(formData, "detail"),
      updatedAt: new Date(),
    })
    .where(eq(educations.id, getId(formData)));

  revalidatePath("/");
  revalidatePath("/admin/dashboard");
}

export async function updateCertificationAction(formData: FormData) {
  await requireAdmin();

  await db()
    .update(certifications)
    .set({
      title: getString(formData, "title"),
      issuer: getString(formData, "issuer"),
      year: getString(formData, "year"),
      detail: getString(formData, "detail"),
      updatedAt: new Date(),
    })
    .where(eq(certifications.id, getId(formData)));

  revalidatePath("/");
  revalidatePath("/admin/dashboard");
}

export async function updateTestimonialAction(formData: FormData) {
  await requireAdmin();

  await db()
    .update(testimonials)
    .set({
      quote: getString(formData, "quote"),
      author: getString(formData, "author"),
      title: getString(formData, "title"),
      rating: Math.min(5, Math.max(1, Number(formData.get("rating")) || 5)),
      updatedAt: new Date(),
    })
    .where(eq(testimonials.id, getId(formData)));

  revalidatePath("/");
  revalidatePath("/admin/dashboard");
}
