
import React from 'react';
import CTAButton from './CTAButton';
import './styles/scrollbar-hide.css';

const WhyChooseUs = () => {
  const features = [{
    icon: '🧊',
    title: '3D Design Before Payment'
  }, {
    icon: '💰',
    title: 'Accurate Price, No Surprise'
  }, {
    icon: '🧾',
    title: '100% Material Transparency'
  }, {
    icon: '🎨',
    title: '500+ Finish Choices'
  }, {
    icon: '🛡️',
    title: '10 Yrs Warranty'
  }, {
    icon: '⏱️',
    title: '45-Day Delivery, or ₹2k/day'
  }];

  return (
    <section className="px-6 bg-white overflow-hidden py-[31px]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-12">
          Why Choose Us
        </h2>
        
        {/* Mobile: Auto-scrolling marquee */}
        <div className="md:hidden overflow-hidden">
          <div className="flex animate-marquee-mobile whitespace-nowrap">
            {[...features, ...features].map((feature, index) => (
              <div key={index} className="flex-none mx-4 text-center min-w-[140px]">
                <div className="bg-gray-50 rounded-2xl p-4 hover:shadow-lg transition-shadow duration-300">
                  <div className="text-3xl mb-3">{feature.icon}</div>
                  <h3 className="font-semibold text-gray-900 text-xs leading-tight">
                    {feature.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Desktop: Marquee animation */}
        <div className="hidden md:block relative overflow-hidden">
          <div className="flex animate-marquee whitespace-nowrap">
            {[...features, ...features].map((feature, index) => (
              <div key={index} className="flex-none mx-8 text-center min-w-[200px]">
                <div className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300">
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="font-semibold text-gray-900 text-sm leading-tight">
                    {feature.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <CTAButton />
      </div>
    </section>
  );
};

export default WhyChooseUs;
