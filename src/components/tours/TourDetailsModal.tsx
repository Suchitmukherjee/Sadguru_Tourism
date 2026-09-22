'use client';
import { useState } from 'react';
import { Tour } from '@/types/tour';
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogTrigger,
  DialogClose,
  DialogOverlay,
  DialogPortal
} from '@/components/ui/dialog';
import { Dialog as DialogPrimitive } from '@base-ui/react/dialog';
import { Button } from '@/components/ui/button';
import { 
  Share2, 
  Download, 
  MapPin, 
  CalendarDays, 
  Hotel, 
  Utensils, 
  Bus, 
  UserCheck, 
  CheckCircle2, 
  XCircle,
  MessageCircle,
  XIcon
} from 'lucide-react';
import { generateTourItineraryPdf } from '@/lib/pdf/generateTourItineraryPdf';

export default function TourDetailsModal({ tour, children }: { tour: Tour, children: React.ReactNode }) {
  const [activeTab, setActiveTab] = useState<'overview' | 'highlights' | 'itinerary' | 'inclusions'>('itinerary');
  const [expandedDays, setExpandedDays] = useState<number[]>([1]);
  const [isGeneratingPdf, setIsGeneratingPdf] = useState(false);
  const [pdfStatus, setPdfStatus] = useState<string | null>(null);

  const toggleDay = (day: number) => {
    setExpandedDays(prev => 
      prev.includes(day) ? prev.filter(d => d !== day) : [...prev, day]
    );
  };

  const handleDownloadPdf = async () => {
    try {
      setIsGeneratingPdf(true);
      setPdfStatus('Generating itinerary...');
      await generateTourItineraryPdf(tour);
      setPdfStatus('✓ Download started');
      setTimeout(() => setPdfStatus(null), 3000);
    } catch (error) {
      console.error('PDF Generation failed', error);
      setPdfStatus('Unable to generate the itinerary right now. Please try again.');
      setTimeout(() => setPdfStatus(null), 5000);
    } finally {
      setIsGeneratingPdf(false);
    }
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: `Sadguru Tourism - ${tour.titleEn}`,
          text: `${tour.titleEn}\n${tour.departureDates}\n₹${tour.price.toLocaleString('en-IN')} / person`,
          url: window.location.href,
        });
      } catch (error) {
        console.log('Error sharing', error);
      }
    } else {
      navigator.clipboard.writeText(`${window.location.origin}/tours/${tour.slug}`);
      alert('Link copied to clipboard!');
    }
  };

  const whatsappMessage = `Hello Sadguru Tourism,
  
I am interested in the following tour:

Tour: ${tour.titleEn}
Departure: ${tour.departureDates}
Package: ₹${tour.price.toLocaleString('en-IN')} per person

Please share booking details.`;

  const whatsappUrl = `https://wa.me/918446999330?text=${encodeURIComponent(whatsappMessage)}`;

  const renderTabs = () => (
    <div className="flex overflow-x-auto scrollbar-none border-b border-border mb-6">
      {(['overview', 'highlights', 'itinerary', 'inclusions'] as const).map(tab => (
        <button
          key={tab}
          onClick={() => setActiveTab(tab)}
          className={`px-4 py-3 font-label-md text-label-md font-semibold capitalize whitespace-nowrap border-b-2 transition-colors ${
            activeTab === tab 
              ? 'border-primary text-primary' 
              : 'border-transparent text-on-surface-variant hover:text-on-surface'
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  );

  return (
    <Dialog>
      {/* 
        Base UI's Trigger uses the `render` prop to change the underlying element 
        instead of `asChild`. This prevents rendering a button inside a button.
      */}
      <DialogTrigger render={children as React.ReactElement} />
      
      <DialogPortal>
        <DialogOverlay className="z-[100]" />
        {/* We use a custom overlay/content div layout to support the highly custom responsive design required by the prompt */}
        <div className="fixed inset-0 z-[100] flex items-center justify-center pointer-events-none p-0 md:p-6 lg:p-8">
          <DialogPrimitive.Popup className="pointer-events-auto w-full h-full md:h-auto md:max-h-[92vh] md:max-w-[1400px] bg-background md:rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-200 outline-none">
            
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3 md:px-6 md:py-4 border-b border-border bg-surface">
              <div className="font-headline-sm text-title-md md:text-headline-sm font-bold text-on-surface line-clamp-1 pr-4">
                {tour.titleEn}
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <button onClick={handleShare} className="hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-lg hover:bg-surface-container-high transition-colors font-label-sm text-label-sm">
                  <Share2 className="w-4 h-4" /> Share
                </button>
                <button onClick={handleDownloadPdf} disabled={isGeneratingPdf} className="hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-lg hover:bg-surface-container-high transition-colors font-label-sm text-label-sm">
                  <Download className="w-4 h-4" /> PDF
                </button>
                <DialogClose className="p-2 rounded-full hover:bg-surface-container-high transition-colors">
                  <XIcon className="w-5 h-5 text-on-surface-variant" />
                </DialogClose>
              </div>
            </div>

            {/* Scrollable Content */}
            <div className="flex-1 overflow-y-auto overflow-x-hidden flex flex-col md:flex-row relative">
              
              {/* Left Column (Main Content) */}
              <div className="w-full md:w-[68%] p-4 md:p-8 flex flex-col">
                
                {/* Hero Section */}
                <div className="relative w-full h-[250px] md:h-[350px] rounded-xl overflow-hidden mb-8 shadow-sm">
                  <img src={tour.images[0]} alt={tour.titleEn} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6 right-4">
                    <span className="inline-block px-2.5 py-1 rounded bg-primary text-on-primary font-label-sm text-[11px] font-bold uppercase tracking-wider mb-2">
                      {tour.category.toUpperCase()} TOUR
                    </span>
                    <h1 className="text-2xl md:text-4xl font-headline-lg font-bold text-white leading-tight">
                      {tour.titleEn}
                    </h1>
                    <p className="text-white/90 font-label-md mt-1">{tour.titleMr}</p>
                    <div className="flex flex-wrap items-center gap-3 mt-3 text-white/80 font-label-sm text-sm">
                      <span className="flex items-center gap-1"><CalendarDays className="w-4 h-4" /> {tour.duration}</span>
                      <span>•</span>
                      <span>{tour.departureDates}</span>
                    </div>
                  </div>
                </div>

                {/* Mobile-only Summary */}
                <div className="md:hidden mb-6 p-4 rounded-xl bg-surface-container-low border border-border">
                  <div className="flex justify-between items-baseline mb-3">
                    <div className="font-label-sm text-on-surface-variant">Price</div>
                    <div className="text-right">
                      <div className="font-headline-md text-primary font-bold">₹{tour.price.toLocaleString('en-IN')}</div>
                      <div className="font-label-sm text-[11px] text-on-surface-variant leading-none">per person</div>
                    </div>
                  </div>
                  {pdfStatus && <div className="text-xs text-primary font-medium text-right mb-2">{pdfStatus}</div>}
                </div>

                {/* Quick Tour Summary */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
                  <div className="p-3 rounded-lg bg-surface-container-lowest border border-outline-variant/30 flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary-fixed/50 flex items-center justify-center shrink-0">
                      <Bus className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <div className="font-label-sm text-[11px] text-on-surface-variant">Travel</div>
                      <div className="font-label-sm font-semibold text-on-surface line-clamp-1">AC Coach</div>
                    </div>
                  </div>
                  <div className="p-3 rounded-lg bg-surface-container-lowest border border-outline-variant/30 flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary-fixed/50 flex items-center justify-center shrink-0">
                      <Hotel className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <div className="font-label-sm text-[11px] text-on-surface-variant">Stay</div>
                      <div className="font-label-sm font-semibold text-on-surface line-clamp-1">AC Hotel</div>
                    </div>
                  </div>
                  <div className="p-3 rounded-lg bg-surface-container-lowest border border-outline-variant/30 flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary-fixed/50 flex items-center justify-center shrink-0">
                      <Utensils className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <div className="font-label-sm text-[11px] text-on-surface-variant">Food</div>
                      <div className="font-label-sm font-semibold text-on-surface line-clamp-1">Pure Veg Meals</div>
                    </div>
                  </div>
                  <div className="p-3 rounded-lg bg-surface-container-lowest border border-outline-variant/30 flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary-fixed/50 flex items-center justify-center shrink-0">
                      <UserCheck className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <div className="font-label-sm text-[11px] text-on-surface-variant">Manager</div>
                      <div className="font-label-sm font-semibold text-on-surface line-clamp-1">Dedicated</div>
                    </div>
                  </div>
                </div>

                {renderTabs()}

                <div className="pb-24 md:pb-8">
                  {/* Overview Tab */}
                  {activeTab === 'overview' && (
                    <div className="space-y-4 animate-in fade-in">
                      <h3 className="font-title-lg font-bold text-on-surface">About this tour</h3>
                      <p className="text-on-surface-variant leading-relaxed">{tour.descriptionEn}</p>
                      <p className="text-on-surface-variant leading-relaxed font-medium">{tour.descriptionMr}</p>
                    </div>
                  )}

                  {/* Highlights Tab */}
                  {activeTab === 'highlights' && (
                    <div className="space-y-4 animate-in fade-in">
                      <h3 className="font-title-lg font-bold text-on-surface">Tour Highlights</h3>
                      {tour.highlights && tour.highlights.length > 0 ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {tour.highlights.map((highlight, idx) => (
                            <div key={idx} className="flex items-start gap-2 p-3 rounded-lg bg-surface-container-lowest border border-outline-variant/30">
                              <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                              <span className="font-label-md text-on-surface">{highlight}</span>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <p className="text-on-surface-variant">No highlights configured for this tour yet.</p>
                      )}
                    </div>
                  )}

                  {/* Itinerary Tab */}
                  {activeTab === 'itinerary' && (
                    <div className="animate-in fade-in">
                      <div className="mb-6">
                        <h3 className="font-title-lg font-bold text-on-surface">Day-wise Itinerary</h3>
                        <p className="text-on-surface-variant text-sm mt-1">Detailed journey plan for your selected departure.</p>
                      </div>

                      {tour.itinerary && tour.itinerary.length > 0 ? (
                        <div className="relative border-l-2 border-primary/20 ml-3 pl-6 space-y-6">
                          {tour.itinerary.map((day) => {
                            const isExpanded = expandedDays.includes(day.day);
                            return (
                              <div key={day.day} className="relative">
                                {/* Timeline Dot */}
                                <div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-primary border-4 border-background" />
                                
                                <div 
                                  className={`rounded-xl border transition-all overflow-hidden ${
                                    isExpanded 
                                      ? 'bg-surface-container-lowest border-outline-variant shadow-sm' 
                                      : 'bg-surface-container-lowest border-border md:border-outline-variant md:shadow-sm hover:border-outline-variant/50 hover:bg-surface-container-lowest/50 md:hover:border-outline-variant md:hover:bg-surface-container-lowest'
                                  }`}
                                >
                                  {/* Accordion Header */}
                                  <div 
                                    className="p-4 flex items-center justify-between md:cursor-default cursor-pointer"
                                    onClick={() => {
                                      // Only toggle on mobile
                                      if (window.innerWidth < 768) {
                                        toggleDay(day.day);
                                      }
                                    }}
                                  >
                                    <div>
                                      <div className="flex items-center gap-2 mb-1">
                                        <span className="font-label-md font-bold text-primary">Day {day.day}</span>
                                        {day.date && <span className="font-label-sm text-xs text-on-surface-variant bg-surface-container px-2 py-0.5 rounded">{day.date}</span>}
                                      </div>
                                      <h4 className="font-title-md font-bold text-on-surface">{day.title}</h4>
                                    </div>
                                    <div className="md:hidden w-8 h-8 rounded-full bg-surface-container flex items-center justify-center shrink-0 text-on-surface-variant">
                                      <span className="text-lg font-bold leading-none">{isExpanded ? '−' : '+'}</span>
                                    </div>
                                  </div>

                                  {/* Accordion Body */}
                                  <div className={`px-4 pb-5 pt-1 border-t border-border/50 ${!isExpanded ? 'hidden md:block' : 'animate-in slide-in-from-top-2'}`}>
                                    <p className="text-on-surface-variant mb-4">{day.description}</p>
                                    
                                    <div className="space-y-4">
                                      {day.morning && (
                                        <div>
                                          <h5 className="font-label-sm text-xs font-bold text-on-surface uppercase tracking-wider mb-1">Morning</h5>
                                          <p className="text-sm text-on-surface-variant">{day.morning}</p>
                                        </div>
                                      )}
                                      {day.afternoon && (
                                        <div>
                                          <h5 className="font-label-sm text-xs font-bold text-on-surface uppercase tracking-wider mb-1">Afternoon</h5>
                                          <p className="text-sm text-on-surface-variant">{day.afternoon}</p>
                                        </div>
                                      )}
                                      {day.evening && (
                                        <div>
                                          <h5 className="font-label-sm text-xs font-bold text-on-surface uppercase tracking-wider mb-1">Evening</h5>
                                          <p className="text-sm text-on-surface-variant">{day.evening}</p>
                                        </div>
                                      )}
                                      
                                      {/* Sightseeing Block */}
                                      {day.sightseeing && day.sightseeing.length > 0 && (
                                        <div className="bg-surface-container-low p-3 rounded-lg border border-border mt-4">
                                          <h5 className="font-label-sm text-xs font-bold text-on-surface mb-2">Today's Sightseeing</h5>
                                          <ul className="space-y-1">
                                            {day.sightseeing.map((site, i) => (
                                              <li key={i} className="flex items-start gap-2 text-sm text-on-surface-variant">
                                                <MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                                                <span>{site}</span>
                                              </li>
                                            ))}
                                          </ul>
                                        </div>
                                      )}

                                      {/* Notes */}
                                      {day.notes && day.notes.length > 0 && (
                                        <div className="mt-4">
                                          <h5 className="font-label-sm text-xs font-bold text-error uppercase tracking-wider mb-1">Important Notes</h5>
                                          <ul className="list-disc pl-4 space-y-1">
                                            {day.notes.map((note, i) => (
                                              <li key={i} className="text-sm text-on-surface-variant">{note}</li>
                                            ))}
                                          </ul>
                                        </div>
                                      )}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      ) : (
                        <p className="text-on-surface-variant">Itinerary coming soon.</p>
                      )}
                    </div>
                  )}

                  {/* Inclusions Tab */}
                  {activeTab === 'inclusions' && (
                    <div className="space-y-8 animate-in fade-in">
                      <div>
                        <h3 className="font-title-lg font-bold text-on-surface mb-4 flex items-center gap-2">
                          <CheckCircle2 className="w-5 h-5 text-tertiary" /> Tour Includes
                        </h3>
                        {tour.inclusions && tour.inclusions.length > 0 ? (
                          <ul className="space-y-3">
                            {tour.inclusions.map((inc, i) => (
                              <li key={i} className="flex items-start gap-3 bg-tertiary/10 p-3 rounded-lg border border-tertiary/20">
                                <CheckCircle2 className="w-5 h-5 text-tertiary shrink-0 mt-0.5" />
                                <span className="text-on-surface-variant text-sm font-medium">{inc}</span>
                              </li>
                            ))}
                          </ul>
                        ) : (
                          <p className="text-on-surface-variant">No inclusions specified.</p>
                        )}
                      </div>

                      {tour.exclusions && tour.exclusions.length > 0 && (
                        <div>
                          <h3 className="font-title-lg font-bold text-on-surface mb-4 flex items-center gap-2">
                            <XCircle className="w-5 h-5 text-error" /> Tour Excludes
                          </h3>
                          <ul className="space-y-2">
                            {tour.exclusions.map((exc, i) => (
                              <li key={i} className="flex items-start gap-3 pl-1">
                                <span className="text-error mt-1">•</span>
                                <span className="text-on-surface-variant text-sm">{exc}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>

              {/* Right Column (Sticky Summary - Desktop only) */}
              <div className="hidden md:block w-[32%] bg-surface-container-lowest border-l border-border p-6 overflow-y-auto">
                <div className="sticky top-0 space-y-6">
                  
                  <div>
                    <h3 className="font-title-lg font-bold text-on-surface mb-2">Tour Summary</h3>
                    <div className="p-4 bg-surface-container-low rounded-xl border border-border">
                      <div className="text-on-surface-variant text-sm mb-1">Package Rate</div>
                      <div className="font-headline-lg font-bold text-primary">
                        ₹{tour.price.toLocaleString('en-IN')}
                      </div>
                      <div className="text-on-surface-variant text-sm">per person</div>
                    </div>
                  </div>

                  <div className="space-y-3 py-4 border-y border-border">
                    <div className="flex items-center gap-3 text-on-surface-variant">
                      <CheckCircle2 className="w-5 h-5 text-tertiary" /> <span className="font-medium text-sm">Hotel Accommodation</span>
                    </div>
                    <div className="flex items-center gap-3 text-on-surface-variant">
                      <CheckCircle2 className="w-5 h-5 text-tertiary" /> <span className="font-medium text-sm">Pure Veg Meals</span>
                    </div>
                    <div className="flex items-center gap-3 text-on-surface-variant">
                      <CheckCircle2 className="w-5 h-5 text-tertiary" /> <span className="font-medium text-sm">AC Coach</span>
                    </div>
                    <div className="flex items-center gap-3 text-on-surface-variant">
                      <CheckCircle2 className="w-5 h-5 text-tertiary" /> <span className="font-medium text-sm">Tour Manager</span>
                    </div>
                  </div>

                  {pdfStatus && (
                    <div className="p-3 bg-surface-container text-primary font-medium text-sm rounded-lg text-center animate-in fade-in">
                      {pdfStatus}
                    </div>
                  )}

                  <div className="flex flex-col gap-3">
                    <button 
                      onClick={handleDownloadPdf}
                      disabled={isGeneratingPdf}
                      className="w-full flex items-center justify-center gap-2 h-12 rounded-lg bg-surface-container-highest hover:bg-surface-dim text-on-surface font-label-md font-semibold transition-colors disabled:opacity-70"
                    >
                      <Download className="w-5 h-5" />
                      {isGeneratingPdf ? 'Generating...' : 'Download Full Itinerary'}
                    </button>
                    <a 
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-center gap-2 h-12 rounded-lg bg-tertiary hover:bg-tertiary/90 text-on-tertiary font-label-md font-semibold shadow-md transition-colors"
                    >
                      <MessageCircle className="w-5 h-5" />
                      WhatsApp Booking
                    </a>
                  </div>

                </div>
              </div>
            </div>

            {/* Sticky Bottom CTA for Mobile */}
            <div className="md:hidden fixed bottom-0 left-0 right-0 bg-surface-container-lowest border-t border-border p-3 px-4 shadow-[0_-4px_20px_rgba(0,0,0,0.1)] z-50 flex items-center gap-3">
              <button 
                onClick={handleDownloadPdf}
                disabled={isGeneratingPdf}
                className="flex-1 flex items-center justify-center gap-1.5 h-11 rounded-lg bg-surface-container-high text-on-surface font-label-sm text-sm font-semibold transition-colors"
              >
                <Download className="w-4 h-4" />
                PDF
              </button>
              <a 
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-[2] flex items-center justify-center gap-1.5 h-11 rounded-lg bg-tertiary text-on-tertiary font-label-sm text-sm font-semibold transition-colors shadow-sm"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp Booking
              </a>
            </div>

          </DialogPrimitive.Popup>
        </div>
      </DialogPortal>
    </Dialog>
  );
}
