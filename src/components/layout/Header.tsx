import Link from 'next/link';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-surface/90 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
      <div className="h-20 w-full px-margin-mobile md:px-margin flex items-center justify-between">
        <div className="flex items-center gap-space-md">
          <img 
            alt="Sadguru Tourism Logo" 
            className="h-10 w-auto object-contain" 
            src="/logo.png"
          />
          <div className="flex flex-col">
            <div className="flex items-center gap-space-xs">
              <span className="font-title-lg text-title-lg text-on-surface tracking-tight leading-none">Sadguru Tourism</span>
              <span className="font-label-sm text-label-sm text-primary font-bold px-space-xs py-0.5 rounded-full bg-primary-fixed/50">नागपूर</span>
            </div>
            <span className="font-label-sm text-label-sm text-on-surface-variant hidden sm:inline-block leading-none mt-1">Cultural & Pilgrimage Journeys</span>
          </div>
        </div>

        <nav className="hidden xl:flex items-center gap-space-lg">
          <Link href="/#hero" className="px-space-sm py-space-xs transition-colors bg-primary-container text-on-primary-container rounded-lg font-bold">Home</Link>
          <Link href="/tours" className="font-label-md text-label-md text-on-surface-variant hover:text-on-surface px-space-sm py-space-xs transition-colors">Tour Packages</Link>
          <Link href="/custom-package" className="font-label-md text-label-md text-on-surface-variant hover:text-on-surface px-space-sm py-space-xs transition-colors">Custom Package</Link>
          <Link href="/#why-us" className="font-label-md text-label-md text-on-surface-variant hover:text-on-surface px-space-sm py-space-xs transition-colors">Why Us</Link>
          <Link href="/contact" className="font-label-md text-label-md text-on-surface-variant hover:text-on-surface px-space-sm py-space-xs transition-colors">Contact</Link>
        </nav>

        <div className="flex items-center gap-space-md">
          <div className="hidden lg:flex items-center bg-surface-container-high p-1 rounded-full text-on-surface">
            <button className="px-3 py-1 rounded-full font-label-sm text-label-sm bg-surface-container-lowest text-primary shadow-[0_1px_3px_rgba(0,0,0,0.08)] font-semibold transition-all" type="button">English</button>
            <button className="px-3 py-1 rounded-full font-label-sm text-label-sm text-on-surface-variant hover:text-on-surface transition-all" type="button">मराठी</button>
          </div>
          <a className="hidden md:flex items-center gap-space-xs text-on-surface hover:text-primary transition-colors pr-space-xs" href="tel:8446999330">
            <span className="material-symbols-outlined text-primary text-[20px]">call</span>
            <span className="font-label-md text-label-md font-semibold">8446999330</span>
          </a>
          <Link href="/custom-package" className="hidden sm:inline-flex items-center justify-center h-11 px-space-lg rounded-lg bg-primary text-on-primary font-label-md text-label-md shadow-[0_1px_3px_rgba(13,35,58,0.12)] hover:bg-primary-container hover:text-on-primary-container transition-all active:scale-95">Get a Quotation</Link>
        </div>
      </div>
    </header>
  );
}
