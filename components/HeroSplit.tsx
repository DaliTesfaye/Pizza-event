import Link from "next/link";

interface HeroColumnProps {
  title: string;
  imageBg: string;
  days: string;
  hours: string;
  minutes: string;
  ctaText: string;
}

function HeroColumn({ title, imageBg, days, hours, minutes, ctaText }: HeroColumnProps) {
  return (
    <div 
      className="relative flex-1 min-h-[80vh] flex flex-col justify-between items-center text-center p-8 lg:p-16 bg-cover bg-center bg-no-repeat overflow-hidden group"
      style={{ backgroundImage: `url(${imageBg})` }}
    >
      {/* Dark overlay for text contrast */}
      <div className="absolute inset-0 bg-black/40 transition-opacity duration-350 group-hover:bg-black/50" />
      <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-black/30 pointer-events-none" />

      {/* Top Tag */}
      <span className="relative z-10 text-white/90 uppercase tracking-widest text-sm md:text-base font-semibold pt-6">
        Upcoming Event
      </span>

      {/* Massive Editorial Title */}
      <div className="relative z-10 my-auto">
        <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl text-white font-normal tracking-tight uppercase leading-none">
          {title}
        </h1>

        {/* Countdown Timers */}
        <div className="flex justify-center gap-6 md:gap-10 mt-8 text-white font-mono">
          <div className="flex flex-col items-center">
            <span className="text-4xl md:text-6xl font-bold">{days}</span>
            <span className="text-xs uppercase tracking-widest text-white/80 mt-1">Giorni</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-4xl md:text-6xl font-bold">{hours}</span>
            <span className="text-xs uppercase tracking-widest text-white/80 mt-1">Ore</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-4xl md:text-6xl font-bold">{minutes}</span>
            <span className="text-xs uppercase tracking-widest text-white/80 mt-1">Minuti</span>
          </div>
        </div>
      </div>

      {/* CTA Button with added border */}
      <div className="relative z-10 pb-6">
        <Link
          href="#discover"
          className="inline-block bg-primary text-white border border-white/30 rounded-pill px-8 py-4 uppercase text-sm font-semibold tracking-wider hover:bg-accent transition-all duration-350 shadow-none"
        >
          {ctaText}
        </Link>
      </div>
    </div>
  );
}

export default function HeroSplit() {
  return (
    <section className="flex flex-col lg:flex-row w-full min-h-[calc(100vh-80px)] border-b border-[#333333]/20">
      <HeroColumn 
        title="Tunis" 
        imageBg="https://www.worldtravelguide.net/wp-content/uploads/2017/03/shu-Tunisia-SidiBouSaid-760300645-1440x823.jpg"
        days="14"
        hours="09"
        minutes="42"
        ctaText="Discover More"
      />
      <HeroColumn 
        title="Nabeul" 
        imageBg="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPdMKpvBgvnqVqql7_wz-x7vRRysFkQ2j-AUX8n7UXdVZ11vjn_RXBPoo&s=10"
        days="21"
        hours="01"
        minutes="07"
        ctaText="Discover More"
      />
    </section>
  );
}