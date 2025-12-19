import { Header } from "../components/header"
import { Navigation } from "../components/navigation"
import { AboutSection } from "../components/about-section"
import { ServicesSection } from "../components/services-section"
import { CTASection } from "../components/cta-section"
import { PaymentSection } from "../components/payment-section"
import { ContactSection } from "../components/contact-section"
import { Footer } from "../components/footer"
import { FloatingButtons } from "../components/floating-buttons"
import { BackgroundParticles } from "../components/background-particles"

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <BackgroundParticles />
      <Header />
      <Navigation />
      <AboutSection />
      <ServicesSection />
      <CTASection />
      <PaymentSection />
      <ContactSection />
      <Footer />
      <FloatingButtons />
    </main>
  )
}
