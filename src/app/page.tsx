import Hero from '@/components/home/Hero';
import TrustStrip from '@/components/home/TrustStrip';
import TourGrid from '@/components/tours/TourGrid';
import CustomPackage from '@/components/quotation/CustomPackage';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import Memories from '@/components/home/Memories';
import Faqs from '@/components/home/Faqs';
import ContactBar from '@/components/contact/ContactBar';
import { tours } from '@/data/tours';

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <main className="w-full pt-20 bg-background min-h-screen" id="main-content">
        <div className="flex flex-col w-full">
          <Hero />
          <TrustStrip />
          <TourGrid tours={tours} />
          <CustomPackage />
          <WhyChooseUs />
          <Memories />
          <Faqs />
          <ContactBar />
        </div>
      </main>
    </div>
  );
}
