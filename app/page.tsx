import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { AppScreensSection } from "@/components/sections/AppScreensSection";
import { CompanySection } from "@/components/sections/CompanySection";
import { DayStorySection } from "@/components/sections/DayStorySection";
import { HeroSection } from "@/components/sections/HeroSection";
import { NotificationSection } from "@/components/sections/NotificationSection";
import { PhilosophySection } from "@/components/sections/PhilosophySection";
import { ProductsSection } from "@/components/sections/ProductsSection";
import { PromiseSection } from "@/components/sections/PromiseSection";
import { SupportSection } from "@/components/sections/SupportSection";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <DayStorySection />
        <AppScreensSection />
        <NotificationSection />
        <ProductsSection />
        <PhilosophySection />
        <CompanySection />
        <PromiseSection />
        <SupportSection />
      </main>
      <Footer />
    </>
  );
}
