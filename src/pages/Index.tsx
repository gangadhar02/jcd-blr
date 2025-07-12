
import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import InteriorSolutions from '../components/InteriorSolutions';
import WhyChooseUs from '../components/WhyChooseUs';
import ClientStories from '../components/ClientStories';
import ProcessSection from '../components/ProcessSection';
import GoogleReviews from '../components/GoogleReviews';
import QualityMaterials from '../components/QualityMaterials';
import CTASection from '../components/CTASection';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <InteriorSolutions />
      <WhyChooseUs />
      <ClientStories />
      <ProcessSection />
      <GoogleReviews />
      <QualityMaterials />
      <CTASection />
      <FAQ />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
