'use client';
import { useState } from 'react';

const faqs = [
  {
    question: 'Are senior citizens welcome and assisted on your tours?',
    answer: 'Yes, absolutely! Over 60% of our travellers on pilgrimage routes are seniors. We specifically arrange ground-floor or elevator-accessible rooms, provide luggage assistance, schedule comfortable washroom breaks, and maintain unhurried darshan timings.'
  },
  {
    question: 'What is included in the tour package price?',
    answer: 'Our standard fixed packages include Nagpur-to-Nagpur transportation (2x2 AC Luxury Coach or 3-Tier AC Train as specified), clean hotel stays on twin/triple sharing, 100% pure vegetarian morning breakfast, lunch, and dinner, toll taxes, and the dedicated services of our accompanying Tour Escort.'
  },
  {
    question: 'How can I book or block seats from Nagpur?',
    answer: 'You can visit our office at Manewada Square, Nagpur, or book digitally via WhatsApp / UPI / Bank Transfer. A nominal advance token is collected to block your seats with official GST booking receipts issued immediately.'
  },
  {
    question: 'Can private family or corporate groups request custom dates?',
    answer: 'Yes! For groups of 10 to 45 members, we customize itineraries, pick-up points across Vidarbha (Nagpur, Wardha, Amravati, Chandrapur), specific dining preferences (like Jain or Swaminarayan food), and flexible duration.'
  },
  {
    question: 'What are the meal arrangements during journeys?',
    answer: 'We take pride in our dining arrangements. Meals are strictly 100% pure vegetarian, freshly prepared, healthy, and tailored for comfort during long journeys. Tea, coffee, and mineral water bottles are provided regularly.'
  }
];

export default function Faqs() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full py-16 md:py-24 bg-background" id="faqs">
      <div className="max-w-4xl mx-auto px-margin-mobile md:px-margin flex flex-col gap-space-lg">
        <div className="text-center">
          <span className="text-primary font-label-sm text-label-sm uppercase tracking-wider font-semibold block mb-1">
            Got Questions?
          </span>
          <h2 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant mt-1">
            सहलीच्या नियोजनाबाबत वारंवार विचारले जाणारे प्रश्न व त्यांची उत्तरे.
          </p>
        </div>
        
        <div className="flex flex-col gap-space-sm mt-4">
          {faqs.map((faq, index) => (
            <div key={index} className="faq-item bg-surface-container rounded-xl overflow-hidden shadow-sm">
              <button 
                className="w-full p-space-md flex items-center justify-between text-left font-title-md text-title-md text-on-surface font-semibold hover:text-primary transition-colors" 
                onClick={() => toggleFaq(index)} 
                type="button"
              >
                <span>{faq.question}</span>
                <span className="material-symbols-outlined transition-transform duration-300" style={{ transform: openIndex === index ? 'rotate(180deg)' : 'rotate(0deg)' }}>
                  expand_more
                </span>
              </button>
              <div 
                className="overflow-hidden transition-all duration-300 px-space-md"
                style={{ maxHeight: openIndex === index ? '500px' : '0px' }}
              >
                <p className="font-body-md text-body-md text-on-surface-variant pb-space-md">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
