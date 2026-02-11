import Navbar from '@/components/navbar'
import HeroSection from '@/components/hero-section'
import FeaturesSection from '@/components/features-section'
import PropertiesShowcase from '@/components/properties-showcase'
import ProcessSection from '@/components/process-section'
import TestimonialsSection from '@/components/testimonials-section'
import CTASection from '@/components/cta-section'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <PropertiesShowcase />
      <ProcessSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </main>
  )
}
