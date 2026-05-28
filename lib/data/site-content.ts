import { asc, eq } from "drizzle-orm";
import { db, hasDatabase } from "@/db";
import {
  certifications,
  educations,
  experiences,
  heroImages,
  testimonials,
} from "@/db/schema";
import { staticSiteContent, type SiteContent } from "./static-content";

async function withTimeout<T>(promise: Promise<T>, timeoutMs = 8000): Promise<T> {
  let timeout: ReturnType<typeof setTimeout>;

  const timeoutPromise = new Promise<T>((_, reject) => {
    timeout = setTimeout(() => reject(new Error("Database fetch timed out")), timeoutMs);
  });

  try {
    return await Promise.race([promise, timeoutPromise]);
  } finally {
    clearTimeout(timeout!);
  }
}

export async function getSiteContent(): Promise<SiteContent> {
  if (!hasDatabase()) {
    return staticSiteContent;
  }

  try {
    const database = db();
    const [heroRows, experienceRows, educationRows, certificationRows, testimonialRows] =
      await withTimeout(
        Promise.all([
          database
            .select()
            .from(heroImages)
            .where(eq(heroImages.isActive, true))
            .orderBy(asc(heroImages.sortOrder), asc(heroImages.id)),
          database
            .select()
            .from(experiences)
            .where(eq(experiences.isActive, true))
            .orderBy(asc(experiences.sortOrder), asc(experiences.id)),
          database
            .select()
            .from(educations)
            .where(eq(educations.isActive, true))
            .orderBy(asc(educations.sortOrder), asc(educations.id)),
          database
            .select()
            .from(certifications)
            .where(eq(certifications.isActive, true))
            .orderBy(asc(certifications.sortOrder), asc(certifications.id)),
          database
            .select()
            .from(testimonials)
            .where(eq(testimonials.isActive, true))
            .orderBy(asc(testimonials.sortOrder), asc(testimonials.id)),
        ]),
      );

    return {
      heroImages: heroRows.length ? heroRows : staticSiteContent.heroImages,
      experiences: experienceRows.length ? experienceRows : staticSiteContent.experiences,
      educations: educationRows.length ? educationRows : staticSiteContent.educations,
      certifications: certificationRows.length
        ? certificationRows
        : staticSiteContent.certifications,
      testimonials: testimonialRows.length ? testimonialRows : staticSiteContent.testimonials,
    };
  } catch (error) {
    console.error("Falling back to static site content:", error);
    return staticSiteContent;
  }
}
