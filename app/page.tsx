import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/landing/Hero";
import { Features } from "@/components/landing/Features";
import { Architecture } from "@/components/landing/Architecture";
import { Carriers } from "@/components/landing/Carriers";
import { Pricing } from "@/components/landing/Pricing";

export default function Home() {
  return (
    <div className="min-h-screen bg-background flex flex-col font-sans">
      <Navbar />

      <main className="flex-grow">
        <Hero />
        <Carriers />
        <Features />
        <Architecture />
        <Pricing />
      </main>

      <Footer />
    </div>
  );
}
