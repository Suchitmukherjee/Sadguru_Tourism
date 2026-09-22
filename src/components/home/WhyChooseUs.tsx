export default function WhyChooseUs() {
  return (
    <section className="w-full py-16 md:py-24 bg-background" id="why-us">
      <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin flex flex-col gap-space-xl">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-primary font-label-sm text-label-sm uppercase tracking-wider font-semibold block mb-1">
            Nagpur's Trusted Travel Partner
          </span>
          <h2 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">
            Why Travel With Us?
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant mt-2">
            सदगुरु टूरिझम नागपूर — प्रामाणिक सेवा, घरगुती आपुलकी आणि पारदर्शक दर.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-space-md">
          <div className="p-space-lg rounded-2xl bg-surface-container flex flex-col items-start gap-space-sm hover:-translate-y-1 transition-transform">
            <div className="w-12 h-12 rounded-xl bg-primary text-on-primary flex items-center justify-center shadow-md">
              <span className="material-symbols-outlined text-[26px]">dinner_dining</span>
            </div>
            <h3 className="font-title-md text-title-md text-on-surface font-bold mt-2">100% Pure Veg Meals</h3>
            <p className="font-body-sm text-body-sm text-on-surface-variant">
              हॉटेल व प्रवासात घरगुती चवदार शाकाहारी जेवण. जैन भोजनाची स्वतंत्र सोय उपलब्ध.
            </p>
          </div>
          <div className="p-space-lg rounded-2xl bg-surface-container flex flex-col items-start gap-space-sm hover:-translate-y-1 transition-transform">
            <div className="w-12 h-12 rounded-xl bg-tertiary text-on-tertiary flex items-center justify-center shadow-md">
              <span className="material-symbols-outlined text-[26px]">manage_accounts</span>
            </div>
            <h3 className="font-title-md text-title-md text-on-surface font-bold mt-2">Accompanying Managers</h3>
            <p className="font-body-sm text-body-sm text-on-surface-variant">
              नागपूरपासून परतीपर्यंत संपूर्ण प्रवासात स्वतः उपस्थित राहून मदत करणारे अनुभवी टूर मॅनेजर्स.
            </p>
          </div>
          <div className="p-space-lg rounded-2xl bg-surface-container flex flex-col items-start gap-space-sm hover:-translate-y-1 transition-transform">
            <div className="w-12 h-12 rounded-xl bg-secondary text-on-secondary flex items-center justify-center shadow-md">
              <span className="material-symbols-outlined text-[26px]">elderly</span>
            </div>
            <h3 className="font-title-md text-title-md text-on-surface font-bold mt-2">Senior-Citizen Safe</h3>
            <p className="font-body-sm text-body-sm text-on-surface-variant">
              हळुवार वेळापत्रक, शक्यतो तळमजल्यावर खोल्या, सामानाची मदत आणि देवदर्शन सुलभ व्यवस्था.
            </p>
          </div>
          <div className="p-space-lg rounded-2xl bg-surface-container flex flex-col items-start gap-space-sm hover:-translate-y-1 transition-transform">
            <div className="w-12 h-12 rounded-xl bg-primary-container text-on-primary-container flex items-center justify-center shadow-md">
              <span className="material-symbols-outlined text-[26px]">airline_seat_recline_extra</span>
            </div>
            <h3 className="font-title-md text-title-md text-on-surface font-bold mt-2">Luxury AC Fleet</h3>
            <p className="font-body-sm text-body-sm text-on-surface-variant">
              २×२ आरामदायी पुशबॅक सीट्स, आधुनिक वातानुकूलन आणि सुरक्षित अनुभवी चालकांची टीम.
            </p>
          </div>
          <div className="p-space-lg rounded-2xl bg-surface-container flex flex-col items-start gap-space-sm hover:-translate-y-1 transition-transform">
            <div className="w-12 h-12 rounded-xl bg-on-surface text-background flex items-center justify-center shadow-md">
              <span className="material-symbols-outlined text-[26px]">receipt_long</span>
            </div>
            <h3 className="font-title-md text-title-md text-on-surface font-bold mt-2">Zero Hidden Charges</h3>
            <p className="font-body-sm text-body-sm text-on-surface-variant">
              पारदर्शक दर, स्पष्ट अटी. हॉटेल, जेवण, प्रवास आणि दर्शन सर्वकाही आधीच स्पष्ट.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
