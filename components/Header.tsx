import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full bg-[#DE0B1C] border-b border-white/10 py-5 px-6 md:px-12 flex items-center justify-between">
      {/* Brand Logo */}
      <Link href="/" className="font-serif text-2xl md:text-3xl tracking-wide uppercase font-bold text-white">
        Street Feast
      </Link>

      {/* Navigation Links */}
      <nav className="hidden lg:flex items-center gap-8 font-medium text-sm tracking-widest uppercase text-white/90">
        <Link href="#experiences" className="hover:text-[#F2E2D5] transition-colors">Experiences</Link>
        <Link href="#explore" className="hover:text-[#F2E2D5] transition-colors">Explore</Link>
        <Link href="#featured" className="hover:text-[#F2E2D5] transition-colors">Featured</Link>
        <Link href="#press" className="hover:text-[#F2E2D5] transition-colors">Press</Link>
      </nav>

      {/* Action Buttons & Language Switcher */}
      <div className="flex items-center gap-4">
        <Link 
          href="#paris" 
          className="bg-white text-[#DE0B1C] rounded-pill px-6 py-3.5 font-medium text-sm uppercase tracking-wider hover:bg-[#F2E2D5] transition-all duration-350 shadow-none"
        >
          Book Nabeul
        </Link>
        <Link 
          href="#tokyo" 
          className="bg-transparent text-white rounded-pill px-6 py-3.5 font-medium text-sm uppercase tracking-wider hover:bg-white hover:text-[#DE0B1C] transition-all duration-350 border border-white/30 hidden sm:inline-block"
        >
          Book Tunis
        </Link>

        {/* Language Toggles */}
        <div className="flex items-center gap-2 text-sm font-semibold pl-4 border-l border-white/20 text-white">
          <span className="cursor-pointer text-[#F2E2D5]">EN</span>
          <span className="cursor-pointer text-white/60 hover:text-white">FR</span>
        </div>
      </div>
    </header>
  );
}