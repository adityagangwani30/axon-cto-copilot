import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/home/hero-section"
import { SocialProofSection } from "@/components/home/social-proof-section"
import { FeaturesOverviewSection } from "@/components/home/features-overview-section"
import { CTASection } from "@/components/home/cta-section"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <SocialProofSection />
        <FeaturesOverviewSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}
