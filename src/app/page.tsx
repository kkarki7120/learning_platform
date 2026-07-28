import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import StatsBar from "@/components/StatsBar";
import Subjects from "@/components/Subjects";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import AgeGroups from "@/components/AgeGroups";
import Gamification from "@/components/Gamification";
import ParentDashboard from "@/components/ParentDashboard";
import Teachers from "@/components/Teachers";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <StatsBar />
        <Subjects />
        <Features />
        <HowItWorks />
        <AgeGroups />
        <Gamification />
        <ParentDashboard />
        <Teachers />
        <Testimonials />
        <Pricing />
        <FAQ />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
