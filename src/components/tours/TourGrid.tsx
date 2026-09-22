'use client';
import { useState } from 'react';
import { Tour } from '@/types/tour';
import TourCard from '@/components/common/TourCard';

export default function TourGrid({ tours }: { tours: Tour[] }) {
  const [activeTab, setActiveTab] = useState<'all' | 'spiritual' | 'eco' | 'holiday'>('all');

  const filteredTours = activeTab === 'all' ? tours : tours.filter(t => t.category === activeTab);

  return (
    <section className="w-full py-16 md:py-24 bg-background" id="packages">
      <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin flex flex-col gap-space-xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md">
          <div>
            <div className="inline-flex items-center gap-1.5 text-primary font-label-sm text-label-sm uppercase tracking-wider mb-1 font-semibold">
              <span className="material-symbols-outlined text-[16px]">travel_explore</span>
              <span>Upcoming Fixed Departures</span>
            </div>
            <h2 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">
              Explore Our Journeys
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant mt-1 max-w-2xl">
              Carefully planned tours designed around comfort, culture and memorable experiences with Nagpur-to-Nagpur coordination.
            </p>
          </div>
          <div className="text-on-surface-variant text-body-sm font-body-sm bg-surface-container-high px-space-md py-space-xs rounded-lg inline-flex items-center gap-2">
            <span className="material-symbols-outlined text-primary text-[18px]">info</span>
            <span>All packages originate from Nagpur with dedicated guides.</span>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-space-xs pb-2">
          <button 
            onClick={() => setActiveTab('all')}
            className={`px-space-md py-2 rounded-full font-label-sm text-label-sm font-semibold whitespace-nowrap transition-all shadow-sm ${activeTab === 'all' ? 'bg-primary text-on-primary' : 'bg-surface-container text-on-surface hover:bg-surface-container-high'}`}
          >
            All Packages (सर्व सहली)
          </button>
          <button 
            onClick={() => setActiveTab('spiritual')}
            className={`px-space-md py-2 rounded-full font-label-sm text-label-sm font-semibold whitespace-nowrap transition-all ${activeTab === 'spiritual' ? 'bg-primary text-on-primary shadow-sm' : 'bg-surface-container text-on-surface hover:bg-surface-container-high'}`}
          >
            Spiritual & Darshan (तीर्थक्षेत्र व दर्शन यात्रा)
          </button>
          <button 
            onClick={() => setActiveTab('eco')}
            className={`px-space-md py-2 rounded-full font-label-sm text-label-sm font-semibold whitespace-nowrap transition-all ${activeTab === 'eco' ? 'bg-primary text-on-primary shadow-sm' : 'bg-surface-container text-on-surface hover:bg-surface-container-high'}`}
          >
            Eco & Social Heritage (पर्यावरण व सामाजिक वारसा)
          </button>
          <button 
            onClick={() => setActiveTab('holiday')}
            className={`px-space-md py-2 rounded-full font-label-sm text-label-sm font-semibold whitespace-nowrap transition-all ${activeTab === 'holiday' ? 'bg-primary text-on-primary shadow-sm' : 'bg-surface-container text-on-surface hover:bg-surface-container-high'}`}
          >
            Holiday Specials (सुट्टी विशेष सहली)
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-gutter">
          {filteredTours.map(tour => (
            <TourCard key={tour.id} tour={tour} />
          ))}
        </div>
      </div>
    </section>
  );
}
