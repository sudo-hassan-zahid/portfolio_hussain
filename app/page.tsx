import dynamic from "next/dynamic"
import Navigation from "@/components/navigation"
import Hero from "@/components/hero"

// Lazy load components that are below the fold for better initial page load
const PracticeAreas = dynamic(() => import("@/components/practice-areas"), {
  loading: () => <div className="h-screen" />,
})
const Experience = dynamic(() => import("@/components/experience"), {
  loading: () => <div className="h-screen" />,
})
const Testimonials = dynamic(() => import("@/components/testimonials"), {
  loading: () => <div className="h-screen" />,
})
const CTA = dynamic(() => import("@/components/cta"), {
  loading: () => <div className="h-64" />,
})
const Footer = dynamic(() => import("@/components/footer"), {
  loading: () => <div className="h-32" />,
})

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
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
