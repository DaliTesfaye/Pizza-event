import ExperienceHero from "@/components/experiencesections/ExperienceHero";
import ExperienceHowItWorks from "@/components/experiencesections/ExperienceHowItWorks";
import ExperienceVibe from "@/components/experiencesections/ExperienceVibe";


export default function ExperiencePage() {
  return (
    <main className="w-full bg-[#f4ebd0] text-[#0d3b2e] min-h-screen">
      <ExperienceHero />
      <ExperienceVibe />
      <ExperienceHowItWorks />
    </main>
  );
}