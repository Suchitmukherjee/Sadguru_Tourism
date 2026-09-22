import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-surface to-surface-container-low py-12 md:py-20 lg:py-24" id="hero">
      <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center">
        {/* Left Column: Copy & CTAs */}
        <div className="lg:col-span-7 flex flex-col items-start gap-space-md z-10">
          {/* Sacred cultural accent tag */}
          <div className="inline-flex items-center gap-space-xs px-3.5 py-1.5 rounded-full bg-primary-fixed text-on-primary-fixed font-label-sm text-label-sm font-semibold tracking-wide shadow-sm">
            <span className="material-symbols-outlined text-primary text-[18px]">verified_user</span>
            <span>संस्कृती, श्रद्धा आणि अविस्मरणीय अनुभवाची सफर</span>
          </div>
          
          {/* Dynamic Main Headline */}
          <h1 className="font-headline-xl text-headline-xl text-on-surface tracking-tight leading-tight">
            <span>Travel Beyond Expectations</span>
            <span className="block text-primary">From Nagpur with Heart</span>
          </h1>
          
          {/* Bilingual Subtitle */}
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl">
            Curated spiritual, family and heritage journeys from Nagpur. Safe AC travel, pure vegetarian homely food, and dedicated tour managers who travel with you like family.
          </p>
          
          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-space-sm pt-space-xs w-full sm:w-auto">
            <Link className="w-full sm:w-auto inline-flex items-center justify-center gap-space-xs h-12 px-space-lg rounded-lg bg-primary text-on-primary font-label-md text-label-md shadow-md hover:bg-primary-container hover:text-on-primary-container transition-all active:scale-95" href="/tours">
              <span className="material-symbols-outlined text-[20px]">explore</span>
              <span>Explore Tours</span>
            </Link>
            <Link className="w-full sm:w-auto inline-flex items-center justify-center gap-space-xs h-12 px-space-lg rounded-lg bg-surface-container-highest text-on-surface font-label-md text-label-md hover:bg-surface-container-high transition-all active:scale-95" href="/custom-package">
              <span className="material-symbols-outlined text-primary text-[20px]">tune</span>
              <span>Build Custom Trip</span>
            </Link>
          </div>
          
          {/* Nagpur Trust Indicators Pill */}
          <div className="flex flex-wrap items-center gap-y-2 gap-x-4 pt-space-sm font-label-sm text-label-sm text-on-surface-variant">
            <div className="flex items-center gap-1.5">
              <span className="material-symbols-outlined text-tertiary text-[18px]">location_city</span>
              <span>Nagpur Headquartered</span>
            </div>
            <span className="text-surface-dim">•</span>
            <div className="flex items-center gap-1.5">
              <span className="material-symbols-outlined text-tertiary text-[18px]">restaurant</span>
              <span>100% Satvik / Veg Meals</span>
            </div>
            <span className="text-surface-dim">•</span>
            <div className="flex items-center gap-1.5">
              <span className="material-symbols-outlined text-tertiary text-[18px]">shield_with_heart</span>
              <span>Senior-Safe Pacing</span>
            </div>
          </div>
        </div>
        
        {/* Right Column: Visual Anchor */}
        <div className="lg:col-span-5 relative mt-4 lg:mt-0">
          <div className="relative mx-auto max-w-md lg:max-w-none rounded-2xl overflow-hidden shadow-xl bg-surface-container">
            <img alt="Indian Family on Sacred Darshan Tour" className="w-full h-[430px] md:h-[480px] object-cover hover:scale-105 transition-transform duration-700 ease-out" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAOpJIaz4NHrHPvnDlGiP8yiH3m7xa4pJS3hYQP9PaEB3qVznvcyXx_JP07P7K4UWL_uVUpXBqdNIOEkEkpaSu6pY4_UjNMZ6GlmLg0Ee85gGOx71ARu6q5J11g_rKbfhPbzTMWEpOpEJzwy7jca0Kz5nYDSf4ADdCYArqGZHfKXbKi2hGISxXEaTWE96JhSOmgpjK_noraIUA_6C5Vu4tERsKlqarbPH0TebJjZomszQ_G6QvSC3PQ"/>
            
            {/* Gradient Scrim overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none"></div>
            
            {/* Floating Badges with Depth */}
            <div className="absolute top-4 right-4 bg-surface-container-lowest/95 backdrop-blur-md rounded-xl p-3 shadow-md flex items-center gap-2.5 max-w-[240px]">
              <div className="w-8 h-8 rounded-full bg-tertiary-fixed text-on-tertiary-fixed flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-[18px]">soup_kitchen</span>
              </div>
              <div>
                <p className="font-label-sm text-label-sm font-bold text-on-surface leading-tight">100% Homely Pure Veg</p>
                <p className="font-label-sm text-[11px] text-on-surface-variant leading-none mt-0.5">सात्विक व रुचकर जेवण</p>
              </div>
            </div>
            <div className="absolute bottom-4 left-4 bg-surface-container-lowest/95 backdrop-blur-md rounded-xl p-3 shadow-md flex items-center gap-2.5 max-w-[270px]">
              <div className="w-8 h-8 rounded-full bg-primary-fixed text-on-primary-fixed flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-[18px]">support_agent</span>
              </div>
              <div>
                <p className="font-label-sm text-label-sm font-bold text-on-surface leading-tight">Dedicated Escorts</p>
                <p className="font-label-sm text-[11px] text-on-surface-variant leading-none mt-0.5">नागपुरातून सोबत जाणारे टूर मॅनेजर</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
