import Navigation from "@/components/navigation";
import Hero from "@/components/hero";
import PracticeAreas from "@/components/practice-areas";
import Experience from "@/components/experience";
import Footer from "@/components/footer";
import ScrollProgress from "@/components/scroll-progress";
import Testimonials from "@/components/testimonials";
import ContactForm from "@/components/contact-form";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <ScrollProgress />
      <Navigation />
      <Hero />
      <PracticeAreas />
      <Experience />
      <Testimonials />
      <ContactForm />
      <Footer />
    </main>
  );
}
