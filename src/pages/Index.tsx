import Header from '@/components/sections/Header';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import DoctorHighlight from '@/components/sections/DoctorHighlight';
import Services from '@/components/sections/Services';
import WhatWeDo from '@/components/sections/WhatWeDo';
import Specialties from '@/components/sections/Specialties';
import Appointment from '@/components/sections/Appointment';
import FAQ from '@/components/sections/FAQ';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/sections/Footer';
import FloatingButtons from '@/components/sections/FloatingButtons';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <DoctorHighlight />
        <WhatWeDo />
        <Specialties />
        <Appointment />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <FloatingButtons />
    </div>
  );
};

export default Index;
