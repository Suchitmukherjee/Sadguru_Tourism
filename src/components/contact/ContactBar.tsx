'use client';
import { FormEvent, useState } from 'react';
import { socialLinks } from '@/config/social';

const FacebookIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
  </svg>
);

export default function ContactBar() {
  const [showSuccess, setShowSuccess] = useState(false);

  const handleContactSubmit = (e: FormEvent) => {
    e.preventDefault();
    setShowSuccess(true);
    (e.target as HTMLFormElement).reset();
    setTimeout(() => {
      setShowSuccess(false);
    }, 7000);
  };

  return (
    <section className="w-full py-16 md:py-24 bg-surface-container-low" id="contact">
      <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin">
        <div className="text-center max-w-2xl mx-auto mb-space-xl">
          <span className="text-primary font-label-sm text-label-sm uppercase tracking-wider font-semibold block mb-1">
            Direct Connect
          </span>
          <h2 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">
            Visit Our Nagpur Office
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant mt-1">
            आमच्या कार्यालयाला भेट द्या किंवा खालील अधिकृत क्रमांकावर थेट संपर्क साधा.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
          {/* Left: Nagpur Office Details & Staff Directory */}
          <div className="lg:col-span-5 flex flex-col gap-space-md">
            <div className="p-space-lg rounded-2xl bg-surface-container-lowest shadow-sm flex flex-col gap-space-md">
              <div className="flex items-start gap-space-sm">
                <span className="material-symbols-outlined text-primary text-[28px] mt-1 shrink-0">location_on</span>
                <div>
                  <h3 className="font-title-lg text-title-lg text-on-surface font-bold">Nagpur Head Office</h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mt-1 break-words">
                    Shop No. 1, 1st Floor, P P Tower, Manewada Square, Nagpur, Maharashtra - 440027
                  </p>
                  <div className="mt-2 inline-flex items-center gap-1.5 text-tertiary font-label-sm text-label-sm font-semibold">
                    <span className="material-symbols-outlined text-[16px]">check_circle</span>
                    <span>Centrally located near Manewada Square</span>
                  </div>
                </div>
              </div>
              
              <div className="p-space-sm rounded-lg bg-surface-container flex flex-col gap-1 font-label-sm text-label-sm">
                <div className="flex justify-between text-on-surface font-semibold">
                  <span>Monday – Saturday:</span>
                  <span>10:00 AM – 7:30 PM</span>
                </div>
                <div className="flex justify-between text-on-surface-variant">
                  <span>Sunday:</span>
                  <span>By Prior Appointment</span>
                </div>
              </div>
              
              <div className="flex flex-col gap-3 pt-2">
                <h4 className="font-label-md text-label-md text-on-surface font-bold uppercase tracking-wider text-xs">
                  Dedicated Department Contacts:
                </h4>
                <div className="p-3 rounded-lg bg-surface-container-low flex flex-col gap-1">
                  <span className="font-label-sm text-label-sm font-bold text-primary">Pilgrimages & Group Tours:</span>
                  <div className="flex flex-wrap items-center justify-between text-on-surface font-label-sm text-label-sm">
                    <span>Uday Phadke:</span>
                    <div className="flex gap-2">
                      <a className="hover:text-primary font-semibold" href="tel:8446999330">8446999330</a>
                      <span className="text-surface-dim">/</span>
                      <a className="hover:text-primary font-semibold" href="tel:9881037224">9881037224</a>
                    </div>
                  </div>
                  <div className="flex flex-wrap items-center justify-between text-on-surface font-label-sm text-label-sm mt-1">
                    <span>Akshata Dolas:</span>
                    <div className="flex gap-2">
                      <a className="hover:text-primary font-semibold" href="tel:8446999331">8446999331</a>
                      <span className="text-surface-dim">/</span>
                      <a className="hover:text-primary font-semibold" href="tel:8668895693">8668895693</a>
                    </div>
                  </div>
                </div>
                
                <div className="p-3 rounded-lg bg-surface-container-low flex items-center justify-between font-label-sm text-label-sm">
                  <div>
                    <span className="font-bold text-primary block">Custom Trips & Corporate:</span>
                    <span className="text-on-surface">Vrushali Bhagwat</span>
                  </div>
                  <a className="font-bold text-on-surface hover:text-primary" href="tel:8446999330">8446999330</a>
                </div>
              </div>

              {/* Social Media Section */}
              {(socialLinks.facebook.url || socialLinks.instagram.url) && (
                <div className="flex flex-col gap-3 pt-4 mt-2 border-t border-outline-variant/30">
                  <h4 className="font-label-md text-label-md text-on-surface font-bold uppercase tracking-wider text-xs flex items-center gap-2">
                    Connect With Us <span className="font-normal capitalize text-[10px] text-on-surface-variant tracking-normal">आमच्याशी जोडलेले रहा</span>
                  </h4>
                  <div className="flex items-center gap-3">
                    {socialLinks.facebook.url && (
                      <a 
                        href={socialLinks.facebook.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 h-11 rounded-lg border border-outline-variant hover:border-primary/50 hover:bg-primary/5 text-on-surface hover:text-primary transition-all duration-200 shadow-sm"
                        aria-label={`Visit Sadguru Tourism on ${socialLinks.facebook.label}`}
                      >
                        <FacebookIcon className="w-4 h-4" />
                        <span className="font-label-sm text-sm font-semibold">{socialLinks.facebook.label}</span>
                      </a>
                    )}
                    {socialLinks.instagram.url && (
                      <a 
                        href={socialLinks.instagram.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 h-11 rounded-lg border border-outline-variant hover:border-primary/50 hover:bg-primary/5 text-on-surface hover:text-primary transition-all duration-200 shadow-sm"
                        aria-label={`Visit Sadguru Tourism on ${socialLinks.instagram.label}`}
                      >
                        <InstagramIcon className="w-4 h-4" />
                        <span className="font-label-sm text-sm font-semibold">{socialLinks.instagram.label}</span>
                      </a>
                    )}
                  </div>
                </div>
              )}
            </div>
            
            <div className="rounded-2xl overflow-hidden shadow-sm bg-surface-container-lowest p-space-md flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <span className="font-label-md text-label-md font-bold text-on-surface">Office Location Map</span>
                <span className="text-primary font-label-sm text-label-sm font-semibold">Manewada Square</span>
              </div>
              <div 
                className="w-full h-64 lg:h-72 bg-surface-container bg-cover bg-center rounded-xl relative flex items-center justify-center shadow-inner" 
                style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCb7XYxxiPjHuyhDyjrSwaYTh-jF47jqaZ9NvfUE5_XsFo2VptpPlbv1zfgtbC_ViIhfz16h1fsSpZC2zpP7iVtrfoNy2-TLs47gqvf5L1z7UsIgJOhdFQdkbqmJlSFkZQ-MVTbJYyRdTwPl8nfYX6l3zOQGyCoEcBi0EcS8PsE25GPy7tOXt7kVyXcDmEDBOj-FzAi1FsoRxnuBqgwTzUCzHfvEkA7gT5kYvTJ0fJ8REV-fH2G2In-')"}}
              >
                <div className="bg-surface-container-lowest/90 backdrop-blur-md px-3 py-1.5 rounded-lg shadow-md flex items-center gap-1.5 text-primary font-label-sm text-label-sm font-bold">
                  <span className="material-symbols-outlined text-[18px]">pin_drop</span>
                  <span>Sadguru Tourism • Nagpur</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right: Inquiry Form */}
          <div className="lg:col-span-7 bg-surface-container-lowest p-space-md sm:p-space-xl rounded-2xl shadow-sm flex flex-col justify-between mt-4 lg:mt-0">
            <div>
              <h3 className="font-headline-md text-headline-md text-on-surface font-bold tracking-tight">
                Send an Inquiry / थेट चौकशी पाठवा
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant mt-1">
                Fill in your details below and our team will call you back with verified booking information.
              </p>
              
              <form className="mt-space-lg flex flex-col gap-space-md" onSubmit={handleContactSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
                  <div className="flex flex-col gap-1">
                    <label className="font-label-sm text-label-sm text-on-surface font-semibold" htmlFor="contact-name">Your Name *</label>
                    <input className="h-12 px-3.5 rounded-lg bg-surface-container text-on-surface font-body-sm text-body-sm focus:outline-none focus:bg-surface-container-lowest focus:ring-2 focus:ring-primary" id="contact-name" placeholder="उदा. सुरेश जोशी" required type="text"/>
                  </div>
                  <div className="flex flex-col gap-1">
                    <label className="font-label-sm text-label-sm text-on-surface font-semibold" htmlFor="contact-phone">Contact Phone *</label>
                    <input className="h-12 px-3.5 rounded-lg bg-surface-container text-on-surface font-body-sm text-body-sm focus:outline-none focus:bg-surface-container-lowest focus:ring-2 focus:ring-primary" id="contact-phone" placeholder="१० अंकी मोबाईल क्रमांक" required type="tel"/>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
                  <div className="flex flex-col gap-1">
                    <label className="font-label-sm text-label-sm text-on-surface font-semibold" htmlFor="contact-email">Email (Optional)</label>
                    <input className="h-12 px-3.5 rounded-lg bg-surface-container text-on-surface font-body-sm text-body-sm focus:outline-none focus:bg-surface-container-lowest focus:ring-2 focus:ring-primary" id="contact-email" placeholder="name@example.com" type="email"/>
                  </div>
                  <div className="flex flex-col gap-1">
                    <label className="font-label-sm text-label-sm text-on-surface font-semibold" htmlFor="contact-interest">Interested Tour / सेवा</label>
                    <select className="h-12 px-3 rounded-lg bg-surface-container text-on-surface font-body-sm text-body-sm focus:outline-none focus:bg-surface-container-lowest focus:ring-2 focus:ring-primary" id="contact-interest">
                      <option value="Ayodhya Ram Mandir">Ayodhya Ram Mandir (अयोध्या दर्शन)</option>
                      <option value="Gujarat Somnath & Dwarka">Gujarat Somnath & Dwarka (गुजरात यात्रा)</option>
                      <option value="Hemalkasa Lok Biradari">Hemalkasa Lok Biradari Prakalp (हेमलकसा)</option>
                      <option value="Khatu Shyam Rajasthan">Khatu Shyam & Rajasthan (राजस्थान)</option>
                      <option value="Tadoba Wildlife">Tadoba Wildlife Safari (ताडोबा सफारी)</option>
                      <option value="Custom Family Package">Custom Family Group Package (खाजगी कुटुंब सहल)</option>
                    </select>
                  </div>
                </div>
                
                <div className="flex flex-col gap-1">
                  <label className="font-label-sm text-label-sm text-on-surface font-semibold" htmlFor="contact-message">Your Message / विशेष विचारणा</label>
                  <textarea className="p-3.5 rounded-lg bg-surface-container text-on-surface font-body-sm text-body-sm focus:outline-none focus:bg-surface-container-lowest focus:ring-2 focus:ring-primary" id="contact-message" placeholder="प्रवाशांची संख्या, प्रवासाची संभाव्य तारीख आणि इतर आवश्यकता येथे नमूद करा..." rows={3}></textarea>
                </div>
                
                <div className="flex items-center gap-2">
                  <input defaultChecked className="w-4 h-4 rounded text-primary focus:ring-primary" id="contact-whatsapp-consent" type="checkbox"/>
                  <label className="font-label-sm text-label-sm text-on-surface-variant" htmlFor="contact-whatsapp-consent">
                    Send copy of package details and quotes to my WhatsApp.
                  </label>
                </div>
                
                <button className="h-12 rounded-lg bg-primary text-on-primary font-label-md text-label-md font-semibold hover:bg-primary-container shadow-md transition-all active:scale-95 flex items-center justify-center gap-2" type="submit">
                  <span className="material-symbols-outlined text-[20px]">send</span>
                  <span>Submit Inquiry / संपर्क विनंती पाठवा</span>
                </button>
              </form>
            </div>
            
            {showSuccess && (
              <div className="mt-4 p-4 rounded-xl bg-tertiary-fixed text-on-tertiary-fixed font-label-md text-label-md flex items-center gap-2" id="contact-success-msg">
                <span className="material-symbols-outlined text-tertiary text-[22px]">check_circle</span>
                <span>Thank you! Your inquiry has been received. Our Nagpur team will contact you shortly. (आपली चौकशी प्राप्त झाली आहे, आमचा प्रतिनिधी लवकरच संपर्क करेल.)</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
