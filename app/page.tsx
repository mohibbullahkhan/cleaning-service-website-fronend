import HeroSection from "@/components/home/HeroSection";
import TrustBar from "@/components/home/TrustBar";
import AboutUs from "@/components/home/Aboutus";
import Process from "@/components/home/Process";
import OurCommitment from "@/components/home/Ourcommitment";
import OurService from "@/components/home/Ourservices";
import ServiceCards from "@/components/home/ServiceCards";
import TestimonialSection from "@/components/home/TestimonialSection";
import Button from "@/components/ui/Button";

export default function Home() {
  return (
    <main className="flex flex-col">
      {/* 01. HERO SECTION */}
      <HeroSection />

      {/* 02. TRUST BAR - Immediate Social Proof */}
      {/* <TrustBar /> */}

      {/* 03. ABOUT US - Vision & Mission */}
      <AboutUs />

      {/* 04. PROCESS - How it Works */}
      {/* <Process /> */}

      {/* 05. COMMITMENT - Our Promises */}
      <OurCommitment />

      {/* 06. SERVICES - Interactive Dashboard */}
      <OurService />

      {/* 07. SERVICE CARDS - Visual Portfolio */}
      <ServiceCards />

      {/* 08. TESTIMONIALS - Verified Reviews */}
      <TestimonialSection />

      {/* 09. FINAL CTA SECTION - Premium Conversion */}
      <section className="py-32 px-6 bg-[#EFEFED] relative overflow-hidden text-center">
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#E8521A] rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
        </div>

        <div className="max-w-4xl mx-auto relative z-10">
          <h2
            className="text-5xl md:text-8xl font-bold text-[#111] leading-tight mb-10 tracking-tighter"
            style={{ fontFamily: 'var(--font-roboto), Roboto, sans-serif' }}
          >
            Ready for a <span className="text-[#E8521A]">fresher</span> perspective?
          </h2>
          <p className="text-xl text-gray-500 font-medium mb-12 max-w-2xl mx-auto leading-relaxed">
            Join 2,000+ satisfied clients who trust OmahResik for clinical-grade precision and unmatched reliability.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Button href="/contact" variant="primary" size="lg" className="px-12 py-6 rounded-full text-lg shadow-2xl">
              Start Your Journey
            </Button>
            <Button href="/service" variant="outline" size="lg" className="px-12 py-6 rounded-full text-lg">
              View Our Plans
            </Button>
          </div>

          <div className="mt-16 flex items-center justify-center gap-4">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map(i => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-gray-200" />
              ))}
            </div>
            <p className="text-sm font-bold text-gray-400 uppercase tracking-widest">Highly Rated on Google & Yelp</p>
          </div>
        </div>
      </section>
    </main>
  );
}
