import { Tour } from '@/types/tour';
import TourDetailsModal from '../tours/TourDetailsModal';

export default function TourCard({ tour }: { tour: Tour }) {
  return (
    <article className="tour-card group flex flex-col bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
      <div className="relative h-52 overflow-hidden bg-surface-container">
        <img 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
          alt={tour.titleEn} 
          src={tour.images[0]}
        />
        <span className={`absolute top-3 left-3 font-label-sm text-label-sm font-semibold px-2.5 py-1 rounded-full shadow-sm ${
          tour.category === 'spiritual' ? 'bg-primary text-on-primary' :
          tour.category === 'eco' ? 'bg-tertiary text-on-tertiary' :
          'bg-secondary text-on-secondary'
        }`}>
          {tour.category === 'spiritual' ? 'Spiritual' : tour.category === 'eco' ? 'Wildlife Eco' : 'Holiday'}
        </span>
        <span className="absolute bottom-3 right-3 bg-surface/90 backdrop-blur-md text-on-surface font-label-sm text-label-sm font-bold px-2.5 py-1 rounded-lg">
          {tour.duration}
        </span>
      </div>
      <div className="p-space-md flex flex-col flex-1 justify-between gap-space-md">
        <div>
          <div className="flex items-center gap-1.5 text-on-surface-variant font-label-sm text-label-sm mb-1">
            <span className="material-symbols-outlined text-[16px]">calendar_today</span>
            <span>{tour.departureDates}</span>
          </div>
          <h3 className="font-title-md text-title-md text-on-surface font-bold line-clamp-1 group-hover:text-primary transition-colors">
            {tour.titleEn}
          </h3>
          <p className="font-label-sm text-label-sm text-primary font-medium">{tour.titleMr}</p>
          <div className="mt-3 flex flex-wrap gap-1.5">
            {tour.features.map((feature, idx) => (
              <span key={idx} className="px-2 py-0.5 rounded bg-surface-container font-label-sm text-[11px] text-on-surface-variant">
                {feature}
              </span>
            ))}
          </div>
        </div>
        <div className="pt-3 border-none flex flex-col gap-space-sm bg-surface-container-low p-space-sm rounded-lg">
          <div className="flex items-baseline justify-between">
            <span className="font-label-sm text-label-sm text-on-surface-variant">Package Rate</span>
            <div className="text-right">
              <span className="font-headline-md text-headline-md text-primary font-bold">₹{tour.price.toLocaleString('en-IN')}</span>
              <span className="font-label-sm text-[11px] text-on-surface-variant block leading-none">per person</span>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-2 mt-2 w-full">
            <TourDetailsModal tour={tour}>
              <button type="button" className="flex-1 w-full inline-flex items-center justify-center gap-1.5 h-11 rounded-lg border border-primary text-primary hover:bg-primary/5 font-label-sm text-label-sm font-semibold transition-colors shadow-sm">
                <span className="material-symbols-outlined text-[18px]">visibility</span> Details
              </button>
            </TourDetailsModal>
            <a 
              href={`https://wa.me/918446999330?text=${encodeURIComponent(`Hello Sadguru Tourism, I am interested in the ${tour.titleEn} package (₹${tour.price.toLocaleString('en-IN')}). Please share details.`)}`}
              target="_blank" 
              rel="noopener noreferrer"
              className="flex-1 w-full inline-flex items-center justify-center gap-1 h-11 rounded-lg bg-tertiary text-on-tertiary hover:bg-tertiary-container font-label-sm text-label-sm font-semibold transition-colors"
            >
              <span className="material-symbols-outlined text-[16px]">chat</span> WhatsApp
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}
