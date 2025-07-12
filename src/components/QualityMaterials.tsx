
import React from 'react';

const QualityMaterials = () => {
  const brandLogos = [
    {
      name: 'Merino',
      url: 'https://cdn.truww.com/merino_icon_transparent.png',
      alt: 'Merino Logo'
    },
    {
      name: 'Greenply',
      url: 'https://cdn.truww.com/greenply_icon_transparent.png',
      alt: 'Greenply Logo'
    },
    {
      name: 'Saint Gobain',
      url: 'https://cdn.truww.com/saint_gobain_icon_transparent.png',
      alt: 'Saint Gobain Logo'
    },
    {
      name: 'Hettich',
      url: 'https://cdn.truww.com/hettich_icon_transparent.png',
      alt: 'Hettich Logo'
    },
    {
      name: 'Franke',
      url: 'https://cdn.truww.com/franke_icon_transparent.png',
      alt: 'Franke Logo'
    },
    {
      name: 'Century Plyboards',
      url: 'https://upload.wikimedia.org/wikipedia/en/0/06/Century_Plyboards.svg',
      alt: 'Century Plyboards Logo'
    }
  ];

  return (
    <section className="py-16 bg-white border-b border-gray-200 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Quality Materials from Trusted Brands
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We partner with industry-leading brands to ensure every project uses premium materials 
            that combine durability, style, and value for your dream space.
          </p>
        </div>

        {/* Single Marquee Container */}
        <div className="relative">
          <div className="flex overflow-hidden">
            <div className="flex animate-marquee">
              {brandLogos.map((brand, index) => (
                <div
                  key={`brand-${index}`}
                  className="flex-shrink-0 mx-2 md:mx-4 p-4 md:p-6 w-32 h-20 md:w-48 md:h-24 flex items-center justify-center hover:scale-105 transition-transform duration-300"
                >
                  <img
                    src={brand.url}
                    alt={brand.alt}
                    className="max-w-full max-h-full object-contain transition-all duration-300 scale-125 md:scale-100"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
            {/* Duplicate for seamless loop */}
            <div className="flex animate-marquee">
              {brandLogos.map((brand, index) => (
                <div
                  key={`brand-duplicate-${index}`}
                  className="flex-shrink-0 mx-2 md:mx-4 p-4 md:p-6 w-32 h-20 md:w-48 md:h-24 flex items-center justify-center hover:scale-105 transition-transform duration-300"
                >
                  <img
                    src={brand.url}
                    alt={brand.alt}
                    className="max-w-full max-h-full object-contain transition-all duration-300 scale-125 md:scale-100"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Quality Assurance Text */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium mb-4">
            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            Quality Guaranteed
          </div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Every material is carefully selected and quality-tested to meet our high standards, 
            ensuring your investment lasts for years to come.
          </p>
        </div>
      </div>
    </section>
  );
};

export default QualityMaterials;
