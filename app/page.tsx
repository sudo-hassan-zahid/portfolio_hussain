import dynamic from "next/dynamic"
import Navigation from "@/components/navigation"
import Hero from "@/components/hero"
import ScrollProgress from "@/components/scroll-progress"
import SectionSkeleton from "@/components/section-skeleton"

const PracticeAreas = dynamic(() => import("@/components/practice-areas"), {
  loading: () => <SectionSkeleton type="cards" />,
})
const Experience = dynamic(() => import("@/components/experience"), {
  loading: () => <SectionSkeleton type="list" />,
})
const Testimonials = dynamic(() => import("@/components/testimonials"), {
  loading: () => <SectionSkeleton type="cards" />,
})
const CTA = dynamic(() => import("@/components/cta"), {
  loading: () => <SectionSkeleton type="cta" />,
})
const Footer = dynamic(() => import("@/components/footer"), {
  loading: () => <SectionSkeleton type="footer" />,
})

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <ScrollProgress />
      <Navigation />
      <Hero />
      <PracticeAreas />
      <Experience />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  )
}
