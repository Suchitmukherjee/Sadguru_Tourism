export default function Memories() {
  return (
    <section className="w-full py-16 md:py-24 bg-surface-container-low">
      <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin flex flex-col gap-space-xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md">
          <div>
            <span className="text-primary font-label-sm text-label-sm uppercase tracking-wider font-semibold block mb-1">
              Real Travelers • Real Moments
            </span>
            <h2 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">
              Memories From Our Journeys
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant mt-1">
              Glimpses of happy families and devotional seekers who explored India with Sadguru Tourism Nagpur.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-primary text-[28px]">photo_library</span>
            <span className="font-title-md text-title-md font-bold text-on-surface">5,000+ Happy Pilgrims</span>
          </div>
        </div>
        
        {/* Bento Grid Photo Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-gutter">
          <div className="md:col-span-2 lg:col-span-2 h-72 rounded-2xl overflow-hidden shadow-sm relative group">
            <img 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
              alt="Multigenerational Indian pilgrims smiling together with folded hands in front of ornate golden Ayodhya temple arches in natural sunlight" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCLy1mlAJBd6QtoA92rYxscIWKrFQsrb0-Sraa2S3e64-dl2QoafJxk_IHAgLF87XpcGiZclxp1lTfXb8m7KpTjq3KX7Yp1T2QQ_T1ycTvCOJjlZN0tDeOqLw_Sxl3vLZcoNKz-M6eEuWmSIyRb8PAv6mXuD1D6q3VwoMYGZPv2Hj-anluJ1ueoxHA1yGboaP818p2TUfWN41PcRl_ADyeHlF8PLS6s5-usA9S5bDvvx_GFD576_S_E"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex flex-col justify-end p-4">
              <p className="font-label-md text-label-md text-white font-bold">Ayodhya Darshan Family Batch</p>
              <p className="font-label-sm text-label-sm text-surface-container-highest">आनंददायी राम मंदिर यात्रा - नागपूर गट</p>
            </div>
          </div>
          <div className="h-72 rounded-2xl overflow-hidden shadow-sm relative group">
            <img 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
              alt="Travelers listening with admiration during interaction at Lok Biradari Prakalp Hemalkasa surrounded by lush green foliage and wooden sanctuary" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAiW7b9argbBtS2UEvjBIILzrevWPabu5v-afQzqWiSAxuvb5DXpRI3johNfnqkITr4_Bjhd5pvproG-0728W9Xpz_Xnhytfp5693m3g0vRg0S6Szo39RXNaPHXFZ3DvKjn_Snjp9FoNPuvCRcVFtjw_QQ2vP0zJ1-z7R249Bz2heMxFxHon5JydFjO1fZV7Hbcxdjd5ULclkJ4fh0JHftERljSFE3f1OZ-xZFGqqxEV52ihhAnGmqj"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex flex-col justify-end p-4">
              <p className="font-label-md text-label-md text-white font-bold">Hemalkasa Social Tour</p>
              <p className="font-label-sm text-label-sm text-surface-container-highest">लोक बिरादरी प्रकल्प प्रेरणा सहल</p>
            </div>
          </div>
          <div className="h-72 rounded-2xl overflow-hidden shadow-sm relative group">
            <img 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
              alt="Delightful fresh authentic Indian vegetarian thali lunch served cleanly with puri, dal, paneer, and sweets in clean hotel dining room" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAZUDUhFCDcuDKyrjcwWTD_yyRki-IA-U7GlrvNslFHVm_Do1QfGbMVHS55e6vSsJ1MIZmiWPW8l2aHzQMpHwPM5biN5zNHzRbh0LN7jChCsdrGxqfuIe3d1ZFKUYwQ003MS2wZgwVF27el62z2oBCXKVmwsbE4cHoezy5Hu0618y_mZtz0Bp8yoYMCbgenHYhlV7loZDHVEVEQ2MnfLdLRbWqOGTYbJNBH9uSL_EBXO8tOndzmS7uG"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex flex-col justify-end p-4">
              <p className="font-label-md text-label-md text-white font-bold">Pure Satvik Hospitality</p>
              <p className="font-label-sm text-label-sm text-surface-container-highest">१००% सात्विक व घरगुती जेवण</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
