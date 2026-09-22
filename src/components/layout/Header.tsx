'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Dialog } from '@base-ui/react/dialog';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Close mobile menu on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsMobileMenuOpen(false);
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, []);

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

        {/* Desktop Navigation */}
        <nav className="hidden xl:flex items-center gap-space-lg">
          <Link href="/#hero" className="px-space-sm py-space-xs transition-colors bg-primary-container text-on-primary-container rounded-lg font-bold">Home</Link>
          <Link href="/#packages" className="font-label-md text-label-md text-on-surface-variant hover:text-on-surface px-space-sm py-space-xs transition-colors">Tour Packages</Link>
          <Link href="/#custom-package" className="font-label-md text-label-md text-on-surface-variant hover:text-on-surface px-space-sm py-space-xs transition-colors">Custom Package</Link>
          <Link href="/#why-us" className="font-label-md text-label-md text-on-surface-variant hover:text-on-surface px-space-sm py-space-xs transition-colors">Why Us</Link>
          <Link href="/#contact" className="font-label-md text-label-md text-on-surface-variant hover:text-on-surface px-space-sm py-space-xs transition-colors">Contact</Link>
        </nav>

        {/* Desktop Actions */}
        <div className="hidden xl:flex items-center gap-space-md">
          <div className="flex items-center bg-surface-container-high p-1 rounded-full text-on-surface">
            <button className="px-3 py-1 rounded-full font-label-sm text-label-sm bg-surface-container-lowest text-primary shadow-[0_1px_3px_rgba(0,0,0,0.08)] font-semibold transition-all" type="button">English</button>
            <button className="px-3 py-1 rounded-full font-label-sm text-label-sm text-on-surface-variant hover:text-on-surface transition-all" type="button">मराठी</button>
          </div>
          <a className="flex items-center gap-space-xs text-on-surface hover:text-primary transition-colors pr-space-xs" href="tel:8446999330">
            <span className="material-symbols-outlined text-primary text-[20px]">call</span>
            <span className="font-label-md text-label-md font-semibold">8446999330</span>
          </a>
          <Link href="/#custom-package" className="inline-flex items-center justify-center h-11 px-space-lg rounded-lg bg-primary text-on-primary font-label-md text-label-md shadow-[0_1px_3px_rgba(13,35,58,0.12)] hover:bg-primary-container hover:text-on-primary-container transition-all active:scale-95">Get a Quotation</Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button 
          className="xl:hidden flex items-center justify-center w-11 h-11 rounded-lg text-on-surface hover:bg-surface-container-high active:bg-surface-container-highest transition-colors"
          onClick={() => setIsMobileMenuOpen(true)}
          aria-label="Open Mobile Menu"
        >
          <span className="material-symbols-outlined text-[28px]">menu</span>
        </button>
      </div>

      {/* Mobile Off-Canvas Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[100] flex xl:hidden">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/40 backdrop-blur-sm animate-in fade-in duration-300"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          
          {/* Menu Drawer */}
          <div className="relative ml-auto w-[85vw] max-w-[400px] h-full bg-surface shadow-2xl flex flex-col overflow-y-auto overscroll-contain animate-in slide-in-from-right duration-300">
            <div className="flex items-center justify-between p-4 border-b border-border">
              <span className="font-title-lg text-title-lg text-on-surface font-bold">Menu</span>
              <button 
                className="flex items-center justify-center w-10 h-10 rounded-full bg-surface-container-high text-on-surface hover:bg-surface-container-highest transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>
            
            <div className="flex-1 p-4 flex flex-col gap-6">
              <nav className="flex flex-col gap-2">
                <Link href="/#hero" onClick={() => setIsMobileMenuOpen(false)} className="px-4 py-3 bg-primary-container text-on-primary-container rounded-lg font-bold">Home</Link>
                <Link href="/#packages" onClick={() => setIsMobileMenuOpen(false)} className="px-4 py-3 font-label-md text-label-md text-on-surface hover:bg-surface-container-low rounded-lg transition-colors">Tour Packages</Link>
                <Link href="/#custom-package" onClick={() => setIsMobileMenuOpen(false)} className="px-4 py-3 font-label-md text-label-md text-on-surface hover:bg-surface-container-low rounded-lg transition-colors">Custom Package</Link>
                <Link href="/#why-us" onClick={() => setIsMobileMenuOpen(false)} className="px-4 py-3 font-label-md text-label-md text-on-surface hover:bg-surface-container-low rounded-lg transition-colors">Why Us</Link>
                <Link href="/#contact" onClick={() => setIsMobileMenuOpen(false)} className="px-4 py-3 font-label-md text-label-md text-on-surface hover:bg-surface-container-low rounded-lg transition-colors">Contact</Link>
              </nav>

              <div className="w-full h-[1px] bg-border" />

              <div className="flex items-center bg-surface-container-high p-1 rounded-full text-on-surface w-fit">
                <button className="px-5 py-2 rounded-full font-label-md text-label-md bg-surface-container-lowest text-primary shadow-[0_1px_3px_rgba(0,0,0,0.08)] font-semibold transition-all" type="button">English</button>
                <button className="px-5 py-2 rounded-full font-label-md text-label-md text-on-surface-variant hover:text-on-surface transition-all" type="button">मराठी</button>
              </div>

              <div className="mt-auto flex flex-col gap-3 pb-safe">
                <a className="flex items-center justify-center gap-2 h-14 rounded-xl bg-surface-container-highest text-on-surface font-label-md text-label-md font-bold transition-colors" href="tel:8446999330">
                  <span className="material-symbols-outlined text-[20px]">call</span>
                  <span>Call 8446999330</span>
                </a>
                <Link onClick={() => setIsMobileMenuOpen(false)} href="/#custom-package" className="flex items-center justify-center h-14 rounded-xl bg-primary text-on-primary font-label-md text-label-md font-bold shadow-md hover:bg-primary-container transition-colors active:scale-95">Get a Quotation</Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
