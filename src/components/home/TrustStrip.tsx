export default function TrustStrip() {
  return (
    <section className="w-full bg-surface-container py-8 shadow-inner">
      <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-space-md">
          <div className="flex items-center gap-space-sm bg-surface-container-lowest border border-outline-variant/30 px-3 py-2.5 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <div className="w-10 h-10 shrink-0 rounded-full bg-primary-fixed flex items-center justify-center">
              <span className="material-symbols-outlined text-on-primary-fixed text-[22px]">thumb_up</span>
            </div>
            <div>
              <h4 className="font-label-md text-label-md text-on-surface font-semibold leading-tight">Experienced Managers</h4>
              <p className="font-label-sm text-[11px] text-on-surface-variant leading-none mt-1">अनुभवी टूर मॅनेजर</p>
            </div>
          </div>
          
          <div className="flex items-center gap-space-sm bg-surface-container-lowest border border-outline-variant/30 px-3 py-2.5 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <div className="w-10 h-10 shrink-0 rounded-full bg-primary-fixed flex items-center justify-center">
              <span className="material-symbols-outlined text-on-primary-fixed text-[22px]">soup_kitchen</span>
            </div>
            <div>
              <h4 className="font-label-md text-label-md text-on-surface font-semibold leading-tight">Pure Veg Homely Food</h4>
              <p className="font-label-sm text-[11px] text-on-surface-variant leading-none mt-1">शुद्ध शाकाहारी सात्विक जेवण</p>
            </div>
          </div>
          
          <div className="flex items-center gap-space-sm bg-surface-container-lowest border border-outline-variant/30 px-3 py-2.5 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <div className="w-10 h-10 shrink-0 rounded-full bg-primary-fixed flex items-center justify-center">
              <span className="material-symbols-outlined text-on-primary-fixed text-[22px]">directions_bus</span>
            </div>
            <div>
              <h4 className="font-label-md text-label-md text-on-surface font-semibold leading-tight">Comfortable AC Travel</h4>
              <p className="font-label-sm text-[11px] text-on-surface-variant leading-none mt-1">सुखकर २×२ लक्झरी प्रवास</p>
            </div>
          </div>
          
          <div className="flex items-center gap-space-sm bg-surface-container-lowest border border-outline-variant/30 px-3 py-2.5 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <div className="w-10 h-10 shrink-0 rounded-full bg-primary-fixed flex items-center justify-center">
              <span className="material-symbols-outlined text-on-primary-fixed text-[22px]">family_restroom</span>
            </div>
            <div>
              <h4 className="font-label-md text-label-md text-on-surface font-semibold leading-tight">Family-Safe Environment</h4>
              <p className="font-label-sm text-[11px] text-on-surface-variant leading-none mt-1">सुरक्षित कौटुंबिक वातावरण</p>
            </div>
          </div>
          
          <div className="col-span-2 md:col-span-1 flex items-center gap-space-sm bg-surface-container-lowest border border-outline-variant/30 px-3 py-2.5 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <div className="w-10 h-10 shrink-0 rounded-full bg-primary-fixed flex items-center justify-center">
              <span className="material-symbols-outlined text-on-primary-fixed text-[22px]">calendar_month</span>
            </div>
            <div>
              <h4 className="font-label-md text-label-md text-on-surface font-semibold leading-tight">Planned Itineraries</h4>
              <p className="font-label-sm text-[11px] text-on-surface-variant leading-none mt-1">काटेकोर व आरामशीर वेळापत्रक</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
