'use client';
import { useState } from 'react';

const destinations = [
  { name: 'Ayodhya', id: 'Ayodhya Ram Mandir', price: 28000, days: 5 },
  { name: 'Gujarat', id: 'Gujarat Somnath', price: 39500, days: 7 },
  { name: 'Rajasthan', id: 'Rajasthan Heritage', price: 42000, days: 8 },
  { name: 'Hemalkasa', id: 'Hemalkasa Prakalp', price: 3000, days: 2 },
  { name: 'Tadoba Tiger', id: 'Tadoba Wildlife', price: 18500, days: 3 },
  { name: 'Kerala', id: 'Kerala Backwaters', price: 34500, days: 6 },
  { name: 'Goa Beach', id: 'South Goa Retreat', price: 30000, days: 5 },
  { name: 'Andaman', id: 'Andaman Emerald', price: 48000, days: 6 },
];

export default function CustomPackage() {
  const [dest, setDest] = useState(destinations[0]);
  const [customDest, setCustomDest] = useState('');
  const [adults, setAdults] = useState(2);
  const [seniors, setSeniors] = useState(0);
  const [children, setChildren] = useState(0);
  const [mode, setMode] = useState<{id: string, multiplier: number, label: string}>({ id: 'bus', multiplier: 1.0, label: '2x2 AC Bus' });
  const [stay, setStay] = useState<{id: string, multiplier: number, label: string}>({ id: 'std', multiplier: 1.0, label: 'Standard AC' });

  const basePrice = customDest ? 15000 : dest.price;
  const currentDestLabel = customDest || dest.id;

  const totalCost = Math.round(
    ((adults + seniors) * basePrice * mode.multiplier * stay.multiplier) +
    (children * basePrice * 0.7 * mode.multiplier * stay.multiplier)
  );

  return (
    <section className="w-full py-16 md:py-24 bg-surface-container-low" id="custom-package">
      <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin">
        <div className="text-center max-w-3xl mx-auto mb-space-xl">
          <span className="inline-block px-3 py-1 rounded-full bg-primary-fixed text-primary font-label-sm text-label-sm font-bold tracking-wide uppercase mb-2">
            Tailored For Families & Groups
          </span>
          <h2 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">
            कस्टमाइझ पॅकेज • Build Your Custom Trip
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant mt-2">
            Tell us your travel plans. Get an immediate estimate and have our Nagpur team build a verified, personalized itinerary.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-start">
          {/* Left: Interactive Form (8 cols) */}
          <div className="lg:col-span-8 bg-surface-container-lowest p-space-md sm:p-space-lg rounded-2xl shadow-sm flex flex-col gap-space-lg">
            
            {/* Step 1: Destination Selection */}
            <div className="flex flex-col gap-space-xs">
              <label className="font-label-md text-label-md text-on-surface font-semibold flex items-center gap-1.5">
                <span className="w-6 h-6 rounded-full bg-primary-fixed text-primary flex items-center justify-center font-bold text-xs">1</span>
                <span>Select Destination / गंतव्यस्थान निवडा</span>
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-1">
                {destinations.map((d) => (
                  <button 
                    key={d.id}
                    className={`p-2.5 rounded-lg text-left font-label-sm text-label-sm transition-all flex flex-col gap-1 ${dest.id === d.id && !customDest ? 'bg-primary-fixed/30 text-on-surface ring-2 ring-primary' : 'bg-surface-container text-on-surface hover:bg-surface-container-high'}`}
                    onClick={() => { setDest(d); setCustomDest(''); }}
                    type="button"
                  >
                    <span className={`font-bold ${dest.id === d.id && !customDest ? 'text-primary' : 'text-on-surface'}`}>{d.name}</span>
                    <span className="text-[11px] text-on-surface-variant">{d.days} Days • ₹{d.price.toLocaleString('en-IN')}</span>
                  </button>
                ))}
              </div>
              <div className="mt-2">
                <input 
                  className="w-full h-11 px-3.5 rounded-lg bg-surface-container text-on-surface font-body-sm text-body-sm focus:outline-none focus:bg-surface-container-lowest focus:ring-2 focus:ring-primary" 
                  value={customDest}
                  onChange={(e) => setCustomDest(e.target.value)}
                  placeholder="Or enter another custom destination (उदा. काशी, वैष्णोदेवी, चारधाम)..." 
                  type="text"
                />
              </div>
            </div>

            {/* Step 2: Travellers Counter & Dates */}
            <div className="flex flex-col gap-space-xs">
              <label className="font-label-md text-label-md text-on-surface font-semibold flex items-center gap-1.5">
                <span className="w-6 h-6 rounded-full bg-primary-fixed text-primary flex items-center justify-center font-bold text-xs">2</span>
                <span>Traveller Breakdown & Date / प्रवासी संख्या आणि दिनांक</span>
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 pt-1">
                {/* Adults */}
                <div className="p-3 rounded-lg bg-surface-container flex flex-col items-center justify-between">
                  <span className="font-label-sm text-label-sm text-on-surface font-semibold">Adults (12+)</span>
                  <div className="flex items-center gap-3 my-2">
                    <button className="w-8 h-8 rounded-full bg-surface-container-lowest text-on-surface font-bold flex items-center justify-center shadow-sm active:scale-90" onClick={() => setAdults(Math.max(1, adults - 1))} type="button">-</button>
                    <span className="font-title-md text-title-md font-bold text-on-surface">{adults}</span>
                    <button className="w-8 h-8 rounded-full bg-surface-container-lowest text-on-surface font-bold flex items-center justify-center shadow-sm active:scale-90" onClick={() => setAdults(adults + 1)} type="button">+</button>
                  </div>
                  <span className="font-label-sm text-[11px] text-on-surface-variant">Full Fare</span>
                </div>
                {/* Seniors */}
                <div className="p-3 rounded-lg bg-surface-container flex flex-col items-center justify-between">
                  <span className="font-label-sm text-label-sm text-on-surface font-semibold">Seniors (60+)</span>
                  <div className="flex items-center gap-3 my-2">
                    <button className="w-8 h-8 rounded-full bg-surface-container-lowest text-on-surface font-bold flex items-center justify-center shadow-sm active:scale-90" onClick={() => setSeniors(Math.max(0, seniors - 1))} type="button">-</button>
                    <span className="font-title-md text-title-md font-bold text-on-surface">{seniors}</span>
                    <button className="w-8 h-8 rounded-full bg-surface-container-lowest text-on-surface font-bold flex items-center justify-center shadow-sm active:scale-90" onClick={() => setSeniors(seniors + 1)} type="button">+</button>
                  </div>
                  <span className="font-label-sm text-[11px] text-on-surface-variant">Ground Floor Assist</span>
                </div>
                {/* Children */}
                <div className="p-3 rounded-lg bg-surface-container flex flex-col items-center justify-between">
                  <span className="font-label-sm text-label-sm text-on-surface font-semibold">Children (2-11)</span>
                  <div className="flex items-center gap-3 my-2">
                    <button className="w-8 h-8 rounded-full bg-surface-container-lowest text-on-surface font-bold flex items-center justify-center shadow-sm active:scale-90" onClick={() => setChildren(Math.max(0, children - 1))} type="button">-</button>
                    <span className="font-title-md text-title-md font-bold text-on-surface">{children}</span>
                    <button className="w-8 h-8 rounded-full bg-surface-container-lowest text-on-surface font-bold flex items-center justify-center shadow-sm active:scale-90" onClick={() => setChildren(children + 1)} type="button">+</button>
                  </div>
                  <span className="font-label-sm text-[11px] text-on-surface-variant">70% Fare Rate</span>
                </div>
                {/* Date Picker */}
                <div className="p-3 rounded-lg bg-surface-container flex flex-col justify-between">
                  <label className="font-label-sm text-label-sm text-on-surface font-semibold" htmlFor="wiz-date">Tentative Month</label>
                  <input className="w-full h-10 px-2 rounded bg-surface-container-lowest text-on-surface font-label-sm text-label-sm focus:outline-none" id="wiz-date" type="month" defaultValue="2026-11" />
                  <span className="font-label-sm text-[11px] text-on-surface-variant">Departing Nagpur</span>
                </div>
              </div>
            </div>

            {/* Step 3: Travel Mode & Stay */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
              <div className="flex flex-col gap-space-xs">
                <label className="font-label-md text-label-md text-on-surface font-semibold flex items-center gap-1.5">
                  <span className="w-6 h-6 rounded-full bg-primary-fixed text-primary flex items-center justify-center font-bold text-xs">3</span>
                  <span>Travel Mode / प्रवासाचे साधन</span>
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: 'bus', multiplier: 1.0, label: '2x2 AC Bus' },
                    { id: 'train', multiplier: 1.15, label: '3AC Train' },
                    { id: 'flight', multiplier: 1.6, label: 'Air Flight' },
                  ].map(m => (
                    <button 
                      key={m.id}
                      className={`p-2.5 rounded-lg text-center font-label-sm text-label-sm font-semibold transition-all ${mode.id === m.id ? 'bg-primary-fixed/40 text-on-surface ring-2 ring-primary' : 'bg-surface-container text-on-surface hover:bg-surface-container-high'}`}
                      onClick={() => setMode(m)}
                      type="button"
                    >
                      {m.label}
                    </button>
                  ))}
                </div>
              </div>
              <div className="flex flex-col gap-space-xs">
                <label className="font-label-md text-label-md text-on-surface font-semibold flex items-center gap-1.5">
                  <span className="w-6 h-6 rounded-full bg-primary-fixed text-primary flex items-center justify-center font-bold text-xs">4</span>
                  <span>Stay Category / मुक्काम श्रेणी</span>
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: 'std', multiplier: 1.0, label: 'Standard AC' },
                    { id: 'deluxe', multiplier: 1.25, label: '3-Star Deluxe' },
                    { id: 'premium', multiplier: 1.5, label: 'Heritage / 4★' },
                  ].map(s => (
                    <button 
                      key={s.id}
                      className={`p-2.5 rounded-lg text-center font-label-sm text-label-sm font-semibold transition-all ${stay.id === s.id ? 'bg-primary-fixed/40 text-on-surface ring-2 ring-primary' : 'bg-surface-container text-on-surface hover:bg-surface-container-high'}`}
                      onClick={() => setStay(s)}
                      type="button"
                    >
                      {s.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Step 5: Organizer Details */}
            <div className="flex flex-col gap-space-xs">
              <label className="font-label-md text-label-md text-on-surface font-semibold flex items-center gap-1.5">
                <span className="w-6 h-6 rounded-full bg-primary-fixed text-primary flex items-center justify-center font-bold text-xs">5</span>
                <span>Organizer Details / संपर्क माहिती</span>
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <input className="h-11 px-3.5 rounded-lg bg-surface-container text-on-surface font-body-sm text-body-sm focus:outline-none focus:bg-surface-container-lowest focus:ring-2 focus:ring-primary" placeholder="Full Name (पूर्ण नाव)" type="text"/>
                <input className="h-11 px-3.5 rounded-lg bg-surface-container text-on-surface font-body-sm text-body-sm focus:outline-none focus:bg-surface-container-lowest focus:ring-2 focus:ring-primary" placeholder="Phone Number (१० अंकी फोन)" type="tel"/>
                <input className="h-11 px-3.5 rounded-lg bg-surface-container text-on-surface font-body-sm text-body-sm focus:outline-none focus:bg-surface-container-lowest focus:ring-2 focus:ring-primary" placeholder="City / Area (उदा. नागपूर, वर्धा)" type="text"/>
              </div>
            </div>
          </div>

          {/* Right: Live Quotation Summary Card (4 cols) */}
          <div className="lg:col-span-4 bg-surface-container-lowest p-space-md sm:p-space-lg rounded-2xl shadow-md flex flex-col gap-space-md sticky top-24">
            <div className="flex items-center justify-between">
              <h3 className="font-title-lg text-title-lg text-on-surface font-bold">Estimated Quote</h3>
              <span className="px-2 py-0.5 rounded bg-tertiary-fixed text-on-tertiary-fixed font-label-sm text-label-sm font-bold">Live Estimate</span>
            </div>
            <div className="p-space-md rounded-xl bg-surface-container flex flex-col gap-2 font-body-sm text-body-sm">
              <div className="flex justify-between">
                <span className="text-on-surface-variant">Destination:</span>
                <span className="font-bold text-on-surface">{currentDestLabel}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-on-surface-variant">Traveller Count:</span>
                <span className="font-bold text-on-surface">{adults + seniors} Adults, {children} Child</span>
              </div>
              <div className="flex justify-between">
                <span className="text-on-surface-variant">Transport:</span>
                <span className="font-bold text-on-surface">{mode.label}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-on-surface-variant">Stay Class:</span>
                <span className="font-bold text-on-surface">{stay.label}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-on-surface-variant">Meals:</span>
                <span className="font-bold text-tertiary">100% Satvik Pure Veg</span>
              </div>
            </div>

            <div className="p-space-md rounded-xl bg-primary-fixed/25 flex flex-col gap-1">
              <span className="font-label-sm text-label-sm text-on-surface-variant">Approximate Total Group Cost:</span>
              <div className="flex items-baseline gap-1">
                <span className="font-headline-xl text-headline-xl text-primary font-bold">₹{totalCost.toLocaleString('en-IN')}</span>
                <span className="font-label-sm text-label-sm text-on-surface-variant">for group</span>
              </div>
              <p className="font-label-sm text-[11px] text-on-surface-variant mt-1">
                * अंतिम कोटेशन तारीख, सिझन आणि प्रवाशांच्या सविस्तर मागणीनुसार अंतिम केले जाईल.
              </p>
            </div>

            <div className="flex flex-col gap-2.5">
              <button className="w-full h-12 rounded-lg bg-tertiary text-on-tertiary font-label-md text-label-md font-semibold flex items-center justify-center gap-2 hover:bg-tertiary-container shadow-sm active:scale-95 transition-all" type="button">
                <span className="material-symbols-outlined text-[20px]">chat</span>
                <span>Send Quotation to WhatsApp</span>
              </button>
              <button className="w-full h-12 rounded-lg bg-primary text-on-primary font-label-md text-label-md font-semibold flex items-center justify-center gap-2 hover:bg-primary-container shadow-sm active:scale-95 transition-all" type="button">
                <span className="material-symbols-outlined text-[20px]">send</span>
                <span>Request Detailed PDF Callback</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
