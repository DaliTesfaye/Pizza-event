import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeroSplit from "@/components/HeroSplit";
import BurgerSection from "@/components/MetricItem";
import SponsorsSection from "@/components/Sponsors";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-surface">
      <Header />
      <HeroSplit />
      <AboutSection />
      <BurgerSection />
      <SponsorsSection />
      <Footer />
    </main>
  );
}