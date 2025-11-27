import { Header } from './Header';
import { Hero } from './Hero';
import { WhySection } from './WhySection';
import { FlowSection } from './FlowSection';
import { Features } from './Features';
import { PrivacySection } from './PrivacySection';
import { IndiaSection } from './IndiaSection';
import { ComingSoon } from './ComingSoon';
import { Testimonials } from './Testimonials';
import { CTASection } from './CTASection';
import { Footer } from './Footer';

export function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
      <Header />
      <Hero />
      <WhySection />
      <FlowSection />
      <Features />
      <PrivacySection />
      <IndiaSection />
      <ComingSoon />
      <Testimonials />
      <CTASection />
      <Footer />
    </div>
  );
}
