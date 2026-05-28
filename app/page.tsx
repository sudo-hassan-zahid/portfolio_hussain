import Navigation from "@/components/navigation";
import Hero from "@/components/hero";
import PracticeAreas from "@/components/practice-areas";
import Experience from "@/components/experience";
import Footer from "@/components/footer";
import ScrollProgress from "@/components/scroll-progress";
import Testimonials from "@/components/testimonials";
import ContactForm from "@/components/contact-form";
import TrustStrip from "@/components/trust-strip";
import { getSiteContent } from "@/lib/data/site-content";

export default async function Home() {
  const content = await getSiteContent();

  return (
    <main className="min-h-screen bg-background">
      <ScrollProgress />
      <Navigation />
      <Hero image={content.heroImages[0]} />
      <TrustStrip />
      <PracticeAreas />
      <Experience
        certifications={content.certifications}
        educations={content.educations}
        experiences={content.experiences}
      />
      <Testimonials testimonials={content.testimonials} />
      <ContactForm />
      <Footer />
    </main>
  );
}
