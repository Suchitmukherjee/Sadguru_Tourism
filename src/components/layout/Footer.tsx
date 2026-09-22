import Link from 'next/link';

export default function Footer() {
  return (
    <>
      <footer className="w-full bg-[#0D233A] text-on-secondary pt-space-xl pb-space-xl">
        <div className="w-full px-margin-mobile md:px-margin">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-gutter mb-space-xl">
            <div className="lg:col-span-4 flex flex-col items-start gap-space-md">
              <div className="flex items-center gap-space-sm">
                <img 
                  alt="Sadguru Tourism Logo" 
                  className="h-10 w-auto object-contain brightness-0 invert" 
                  src="/logo.png"
                />
                <div className="flex flex-col">
                  <span className="font-title-lg text-title-lg text-white font-bold">Sadguru Tourism</span>
                  <span className="font-label-sm text-label-sm text-primary-fixed">नागपूर</span>
                </div>
              </div>
              <p className="font-body-md text-body-md text-secondary-fixed-dim leading-relaxed max-w-sm">
                Travel Beyond Expectations<br/>
                <span className="text-surface-container-highest font-medium font-body-sm text-body-sm">संस्कृती, श्रद्धा आणि अविस्मरणीय अनुभवाची सफर</span>
              </p>
              <div className="flex items-center gap-space-sm pt-space-xs">
                <a className="inline-flex items-center gap-space-xs px-space-md py-space-xs rounded-lg bg-tertiary text-on-tertiary font-label-sm text-label-sm hover:bg-tertiary-container hover:text-on-tertiary-container transition-colors" href="https://wa.me/918446999330" rel="noopener noreferrer" target="_blank">
                  <span className="material-symbols-outlined text-[18px]">chat</span> WhatsApp Quick Connect
                </a>
              </div>
            </div>

            <div className="lg:col-span-2 flex flex-col gap-space-sm">
              <span className="font-title-md text-title-md text-white font-semibold mb-space-xs">Explore</span>
              <ul className="flex flex-col gap-space-xs">
                <li className="font-body-sm text-body-sm"><Link className="text-secondary-fixed-dim hover:text-white transition-colors" href="/#packages">Tours</Link></li>
                <li className="font-body-sm text-body-sm"><Link className="text-secondary-fixed-dim hover:text-white transition-colors" href="/#custom-package">Custom Package</Link></li>
                <li className="font-body-sm text-body-sm"><Link className="text-secondary-fixed-dim hover:text-white transition-colors" href="/#why-us">Why Choose Us</Link></li>
                <li className="font-body-sm text-body-sm"><Link className="text-secondary-fixed-dim hover:text-white transition-colors" href="/#faqs">FAQs</Link></li>
                <li className="font-body-sm text-body-sm"><Link className="text-secondary-fixed-dim hover:text-white transition-colors" href="/#contact">Contact</Link></li>
              </ul>
            </div>

            <div className="lg:col-span-3 flex flex-col gap-space-sm">
              <span className="font-title-md text-title-md text-white font-semibold mb-space-xs">Popular Tours</span>
              <ul className="flex flex-col gap-space-xs">
                <li className="font-body-sm text-body-sm"><Link className="text-secondary-fixed-dim hover:text-white transition-colors" href="/tours/ayodhya">Ayodhya Ram Janmabhoomi Darshan</Link></li>
                <li className="font-body-sm text-body-sm"><Link className="text-secondary-fixed-dim hover:text-white transition-colors" href="/tours/gujarat">Gujarat Pilgrimage & Dwarka</Link></li>
                <li className="font-body-sm text-body-sm"><Link className="text-secondary-fixed-dim hover:text-white transition-colors" href="/tours/rajasthan">Royal Rajasthan Heritage Circuit</Link></li>
                <li className="font-body-sm text-body-sm"><Link className="text-secondary-fixed-dim hover:text-white transition-colors" href="/tours/hemalkasa">Hemalkasa Lok Biradari Prakalp</Link></li>
                <li className="font-body-sm text-body-sm"><Link className="text-secondary-fixed-dim hover:text-white transition-colors" href="/tours/goa">South Goa Peaceful Retreat</Link></li>
              </ul>
            </div>

            <div className="lg:col-span-3 flex flex-col gap-space-sm">
              <span className="font-title-md text-title-md text-white font-semibold mb-space-xs">Nagpur Office</span>
              <div className="flex items-start gap-space-xs text-secondary-fixed-dim font-body-sm text-body-sm">
                <span className="material-symbols-outlined text-primary-fixed mt-1 text-[20px]">location_on</span>
                <span>Shop No. 1, 1st Floor, P P Tower, Manewada Square, Nagpur, Maharashtra - 440027</span>
              </div>
              <div className="flex items-center gap-space-xs text-secondary-fixed-dim font-body-sm text-body-sm mt-space-xs">
                <span className="material-symbols-outlined text-primary-fixed text-[20px]">call</span>
                <div className="flex flex-col">
                  <a className="hover:text-white transition-colors" href="tel:8446999330">+91 8446999330</a>
                  <a className="hover:text-white transition-colors" href="tel:8446999331">+91 8446999331</a>
                </div>
              </div>
              <div className="flex items-center gap-space-xs text-secondary-fixed-dim font-body-sm text-body-sm">
                <span className="material-symbols-outlined text-primary-fixed text-[20px]">mail</span>
                <a className="hover:text-white transition-colors" href="mailto:info@sadgurutourism.com">info@sadgurutourism.com</a>
              </div>
            </div>
          </div>

          <div className="pt-space-lg border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-space-md font-body-sm text-body-sm text-secondary-fixed-dim">
            <span>© 2026 Sadguru Tourism. All Rights Reserved.</span>
            <div className="flex items-center gap-space-md">
              <Link className="hover:text-white transition-colors" href="/privacy">Privacy Policy</Link>
              <Link className="hover:text-white transition-colors" href="/terms">Terms of Service</Link>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Action Buttons */}
      <aside aria-label="Quick Dial Bar" className="fixed bottom-0 left-0 w-full z-40 md:hidden bg-surface-container-lowest/95 backdrop-blur-md shadow-[0_-2px_10px_rgba(0,0,0,0.06)] px-space-md pt-space-sm pb-[max(env(safe-area-inset-bottom),0.5rem)] flex items-center justify-between gap-space-sm">
        <a className="flex-1 flex items-center justify-center gap-space-xs h-12 rounded-lg bg-surface-container-high text-on-surface font-label-md text-label-md font-semibold active:bg-surface-container-highest transition-colors" href="tel:8446999330">
          <span className="material-symbols-outlined text-primary text-[20px]">call</span>Call Nagpur Office
        </a>
        <a className="flex-1 flex items-center justify-center gap-space-xs h-12 rounded-lg bg-tertiary text-on-tertiary font-label-md text-label-md font-semibold active:bg-tertiary-container transition-colors" href="https://wa.me/918446999330" rel="noopener noreferrer" target="_blank">
          <span className="material-symbols-outlined text-[20px]">chat</span>WhatsApp
        </a>
      </aside>
      
      <div className="fixed bottom-[calc(env(safe-area-inset-bottom)+5rem)] md:bottom-8 right-4 md:right-8 z-40 flex flex-col gap-space-sm items-end pb-[env(safe-area-inset-bottom)]">
        <a aria-label="Chat on WhatsApp" className="flex items-center justify-center w-14 h-14 rounded-full bg-tertiary text-on-tertiary shadow-[0_8px_16px_-4px_rgba(13,35,58,0.18)] hover:scale-105 active:scale-95 transition-all" href="https://wa.me/918446999330" rel="noopener noreferrer" target="_blank">
          <span className="material-symbols-outlined text-[28px]">chat</span>
        </a>
        <a aria-label="Call Helpline" className="flex items-center justify-center w-12 h-12 rounded-full bg-primary text-on-primary shadow-[0_8px_16px_-4px_rgba(13,35,58,0.18)] hover:scale-105 active:scale-95 transition-all" href="tel:8446999330">
          <span className="material-symbols-outlined text-[24px]">support_agent</span>
        </a>
      </div>
    </>
  );
}
