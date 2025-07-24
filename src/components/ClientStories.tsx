import React, { useState, useEffect, useRef } from 'react';
import { LazyImage } from './LazyImage';
import CTAButton from './CTAButton';

const ClientStories = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const stories = [
    {
      id: 1,
      name: "Gyan & Ritu",
      location: "Home Interior Project",
      testimonial: "What impressed us most was how accurate the final outcome was to the 3D design. But beyond that, every element in our home is practical for everyday living. The kitchen layout works beautifully, and the storage is spot-on. We didn't just get a good design—we got a home that works for us.",
      image: "/lovable-uploads/testimonialsimages/429A3428 (1).webp"
    },
    {
      id: 2,
      name: "Nishant & Family",
      location: "JCD Client",
      testimonial: "We've heard horror stories about handovers being delayed by months. But with JCD, the process was surprisingly smooth. We got weekly updates, the timeline was respected, and the final finish was exactly what we saw in the 3D. Even after living here for 6 months, not a single thing has come loose or broken. That says a lot about their quality.",
      image: "/lovable-uploads/testimonialsimages/429A3431.webp"
    },
    {
      id: 3,
      name: "Manish & Family",
      location: "Residential Client",
      testimonial: "Honestly, I didn't want drama, I just wanted good interiors done on time without me having to micro-manage. That's exactly what I got. The team was chill, responsive, and very clear with communication. I never felt pushed or confused. They made the whole process so easy, I'd happily do this again.",
      image: "/lovable-uploads/testimonialsimages/429A3436.webp"
    },
    {
      id: 4,
      name: "Savita Family",
      location: "Residential Project",
      testimonial: "Even after the handover, the team stayed connected and helped us with a couple of small fixes, no chasing, no excuses. That kind of follow-up is rare these days. The wooden detailing in our dining area is a showstopper. Guests always ask who did it!",
      image: "/lovable-uploads/testimonialsimages/reviewer1.eaf0bd71f2cf10471cb7253b0b125df9.webp"
    },
    {
      id: 5,
      name: "Amrita & Shanshank",
      location: "Homeowners in Bangalore",
      testimonial: "I loved that the price we agreed on was the price we paid, no surprises. The craftsmanship in our wardrobe and kitchen was visible everywhere. Plus, having one designer manage everything made life so much easier. We couldn't recommend them more.",
      image: "/lovable-uploads/testimonialsimages/reviewer2.46a5814f1ec1bded67d5d2b1ce5f58bb.webp"
    },
    {
      id: 6,
      name: "Anand's Family",
      location: "Bangalore Residence",
      testimonial: "We had one person to coordinate with from start to finish. No back-and-forth with vendors or explaining things twice. It was incredibly smooth. Plus, the timeline they gave us? They actually delivered on it—which is rare in this space.",
      image: "/lovable-uploads/testimonialsimages/reviewer3.9d801a979586ccd7db7ac745e8ffe596.webp"
    }
  ];

  // Auto-scroll functionality
  useEffect(() => {
    if (!isPaused) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % stories.length);
      }, 3000);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isPaused, stories.length]);

  const handleNextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % stories.length);
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 5000); // Resume auto-scroll after 5 seconds
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 5000); // Resume auto-scroll after 5 seconds
  };

  const currentStory = stories[currentIndex];

  return (
    <section className="py-16 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Bangalore Client Stories
          </h2>
          <p className="text-gray-600">
            Our clients share why they loved doing their home with Creative Designs
          </p>
        </div>
        
        <div 
          className="bg-white rounded-2xl shadow-xl overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Left side - Image */}
            <div className="relative h-[400px] lg:h-[500px]">
              <LazyImage
                src={currentStory.image}
                alt={`${currentStory.name} testimonial`}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Right side - Content */}
            <div className="p-8 lg:p-12 flex flex-col justify-between">
              <div>
                <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
                  {currentStory.name}
                </h3>
                <p className="text-gray-600 mb-6">{currentStory.location}</p>
                <p className="text-gray-700 text-lg leading-relaxed italic">
                  "{currentStory.testimonial}"
                </p>
              </div>

              {/* Navigation controls */}
              <div className="mt-8 flex items-center justify-between">
                {/* Dot indicators */}
                <div className="flex gap-2">
                  {stories.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToSlide(index)}
                      className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                        index === currentIndex 
                          ? 'bg-red-600 w-8' 
                          : 'bg-gray-300 hover:bg-gray-400'
                      }`}
                      aria-label={`Go to testimonial ${index + 1}`}
                    />
                  ))}
                </div>

                {/* Arrow navigation */}
                <button
                  onClick={handleNextSlide}
                  className="w-12 h-12 bg-red-600 hover:bg-red-700 text-white rounded-full flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-xl"
                  aria-label="Next testimonial"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex justify-center mt-12">
          <CTAButton />
        </div>
      </div>
    </section>
  );
};

export default ClientStories;
