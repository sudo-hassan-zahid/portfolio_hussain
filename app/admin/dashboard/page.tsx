import { asc, desc } from "drizzle-orm";
import { redirect } from "next/navigation";
import type { ReactNode } from "react";
import { LogOut, Save } from "lucide-react";
import {
  signOutAction,
  updateCertificationAction,
  updateEducationAction,
  updateExperienceAction,
  updateHeroImageAction,
  updateTestimonialAction,
} from "@/app/admin/actions";
import { Button } from "@/components/ui/button";
import { db, hasDatabase } from "@/db";
import {
  certifications,
  contactSubmissions,
  educations,
  experiences,
  heroImages,
  testimonials,
} from "@/db/schema";
import { getAdminUser } from "@/lib/admin/auth";
import { staticSiteContent } from "@/lib/data/static-content";

export default async function AdminDashboardPage() {
  const user = await getAdminUser();

  if (!user) {
    redirect("/admin/login");
  }

  const content = hasDatabase()
    ? await getDashboardContent()
    : {
        ...staticSiteContent,
        submissions: [],
      };

  return (
    <main className="min-h-screen bg-[var(--canvas)] text-[var(--ink)]">
      <header className="border-b border-[var(--hairline)] bg-[var(--surface-card)]">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <div>
            <p className="label-eyebrow">Portfolio Admin</p>
            <h1 className="font-serif text-3xl">Content dashboard</h1>
          </div>
          <form action={signOutAction}>
            <Button type="submit" variant="outline" className="outline-button h-10 gap-2">
              <LogOut size={16} aria-hidden="true" />
              Sign out
            </Button>
          </form>
        </div>
      </header>

      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-8 sm:px-6">
        {!hasDatabase() && (
          <div className="rounded-lg border border-[var(--semantic-error)]/30 bg-[var(--semantic-error)]/10 p-4 text-sm font-medium text-[var(--semantic-error)]">
            Database URL is not configured. Add SUPABASE_DATABASE_URL, POSTGRES_URL,
            or DATABASE_URL to enable saving edits.
          </div>
        )}

        <AdminSection title="Hero image">
          <div className="grid gap-4">
            {content.heroImages.map((image) => (
              <form key={image.id} action={updateHeroImageAction} className="admin-panel">
                <input type="hidden" name="id" value={image.id} />
                <TextInput label="Image URL" name="imageUrl" defaultValue={image.imageUrl} />
                <TextInput label="Alt text" name="alt" defaultValue={image.alt} />
                <div className="grid gap-4 md:grid-cols-2">
                  <TextInput
                    label="Caption name"
                    name="captionName"
                    defaultValue={image.captionName}
                  />
                  <TextInput
                    label="Caption title"
                    name="captionTitle"
                    defaultValue={image.captionTitle}
                  />
                </div>
                <SaveButton />
              </form>
            ))}
          </div>
        </AdminSection>

        <AdminSection title="Experiences">
          <div className="grid gap-4">
            {content.experiences.map((experience) => (
              <form key={experience.id} action={updateExperienceAction} className="admin-panel">
                <input type="hidden" name="id" value={experience.id} />
                <div className="grid gap-4 md:grid-cols-3">
                  <TextInput label="Period" name="period" defaultValue={experience.period} />
                  <TextInput label="Role" name="role" defaultValue={experience.role} />
                  <TextInput label="Firm" name="firm" defaultValue={experience.firm} />
                </div>
                <TextArea
                  label="Description"
                  name="description"
                  defaultValue={experience.description}
                />
                <SaveButton />
              </form>
            ))}
          </div>
        </AdminSection>

        <CredentialSection
          action={updateEducationAction}
          items={content.educations}
          title="Education"
        />

        <CredentialSection
          action={updateCertificationAction}
          items={content.certifications}
          title="Certifications"
        />

        <AdminSection title="Testimonials">
          <div className="grid gap-4">
            {content.testimonials.map((testimonial) => (
              <form key={testimonial.id} action={updateTestimonialAction} className="admin-panel">
                <input type="hidden" name="id" value={testimonial.id} />
                <TextArea label="Quote" name="quote" defaultValue={testimonial.quote} />
                <div className="grid gap-4 md:grid-cols-[1fr_1fr_120px]">
                  <TextInput label="Author" name="author" defaultValue={testimonial.author} />
                  <TextInput label="Title" name="title" defaultValue={testimonial.title} />
                  <TextInput
                    label="Rating"
                    name="rating"
                    type="number"
                    defaultValue={String(testimonial.rating)}
                  />
                </div>
                <SaveButton />
              </form>
            ))}
          </div>
        </AdminSection>

        <AdminSection title="Recent contact submissions">
          {content.submissions.length ? (
            <div className="grid gap-3">
              {content.submissions.map((submission) => (
                <article key={submission.id} className="admin-panel">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <p className="font-medium">{submission.name}</p>
                      <p className="text-sm text-[var(--body)]">
                        {submission.email} · {submission.phone}
                      </p>
                    </div>
                    <span className="rounded-full bg-[var(--surface-strong)] px-3 py-1 text-xs font-semibold text-[var(--body-strong)]">
                      {submission.caseType}
                    </span>
                  </div>
                  <p className="type-body mt-4 text-[var(--body)]">{submission.message}</p>
                </article>
              ))}
            </div>
          ) : (
            <p className="rounded-lg border border-[var(--hairline)] bg-[var(--surface-card)] p-5 text-sm text-[var(--body)]">
              No contact submissions yet.
            </p>
          )}
        </AdminSection>
      </div>
    </main>
  );
}

async function getDashboardContent() {
  const database = db();
  const heroRows = await database
    .select()
    .from(heroImages)
    .orderBy(asc(heroImages.sortOrder), asc(heroImages.id));
  const experienceRows = await database
    .select()
    .from(experiences)
    .orderBy(asc(experiences.sortOrder), asc(experiences.id));
  const educationRows = await database
    .select()
    .from(educations)
    .orderBy(asc(educations.sortOrder), asc(educations.id));
  const certificationRows = await database
    .select()
    .from(certifications)
    .orderBy(asc(certifications.sortOrder), asc(certifications.id));
  const testimonialRows = await database
    .select()
    .from(testimonials)
    .orderBy(asc(testimonials.sortOrder), asc(testimonials.id));
  const submissionRows = await database
    .select()
    .from(contactSubmissions)
    .orderBy(desc(contactSubmissions.createdAt))
    .limit(10);

  return {
    heroImages: heroRows.length ? heroRows : staticSiteContent.heroImages,
    experiences: experienceRows.length ? experienceRows : staticSiteContent.experiences,
    educations: educationRows.length ? educationRows : staticSiteContent.educations,
    certifications: certificationRows.length ? certificationRows : staticSiteContent.certifications,
    testimonials: testimonialRows.length ? testimonialRows : staticSiteContent.testimonials,
    submissions: submissionRows,
  };
}

function AdminSection({
  children,
  title,
}: {
  children: ReactNode;
  title: string;
}) {
  return (
    <section className="grid gap-4">
      <h2 className="font-serif text-2xl">{title}</h2>
      {children}
    </section>
  );
}

function CredentialSection({
  action,
  items,
  title,
}: {
  action: (formData: FormData) => Promise<void>;
  items: Array<{
    id: number;
    title: string;
    issuer: string;
    year: string;
    detail: string;
  }>;
  title: string;
}) {
  return (
    <AdminSection title={title}>
      <div className="grid gap-4">
        {items.map((item) => (
          <form key={item.id} action={action} className="admin-panel">
            <input type="hidden" name="id" value={item.id} />
            <div className="grid gap-4 md:grid-cols-2">
              <TextInput label="Title" name="title" defaultValue={item.title} />
              <TextInput label="Issuer" name="issuer" defaultValue={item.issuer} />
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <TextInput label="Year / status" name="year" defaultValue={item.year} />
              <TextInput label="Detail" name="detail" defaultValue={item.detail} />
            </div>
            <SaveButton />
          </form>
        ))}
      </div>
    </AdminSection>
  );
}

function TextInput({
  defaultValue,
  label,
  name,
  type = "text",
}: {
  defaultValue: string;
  label: string;
  name: string;
  type?: string;
}) {
  return (
    <label className="grid gap-1.5">
      <span className="label-eyebrow">{label}</span>
      <input
        name={name}
        type={type}
        defaultValue={defaultValue}
        required
        className="h-11 rounded-lg border border-[var(--hairline-strong)] bg-[var(--surface-card)] px-4 text-base text-[var(--ink)] outline-none focus:border-[var(--ink)]"
      />
    </label>
  );
}

function TextArea({
  defaultValue,
  label,
  name,
}: {
  defaultValue: string;
  label: string;
  name: string;
}) {
  return (
    <label className="grid gap-1.5">
      <span className="label-eyebrow">{label}</span>
      <textarea
        name={name}
        defaultValue={defaultValue}
        required
        rows={4}
        className="rounded-lg border border-[var(--hairline-strong)] bg-[var(--surface-card)] px-4 py-3 text-base text-[var(--ink)] outline-none focus:border-[var(--ink)]"
      />
    </label>
  );
}

function SaveButton() {
  return (
    <Button type="submit" className="ink-button h-10 w-fit gap-2 px-5 text-[15px] font-medium">
      <Save size={16} aria-hidden="true" />
      Save
    </Button>
  );
}
