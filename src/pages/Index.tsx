import Header from '@/components/sections/Header';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Services from '@/components/sections/Services';
import WhatWeDo from '@/components/sections/WhatWeDo';
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
        <WhatWeDo />
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
