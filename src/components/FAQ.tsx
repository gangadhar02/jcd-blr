import React, { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    {
      question: "What interior design services do you offer in Bangalore?",
      answer: "We provide comprehensive interior design services including 2D/3D design visualization, modular kitchens, wardrobes, living room designs, bedroom interiors, false ceiling, and complete home interiors. We handle projects from 1 BHK to luxury villas with customized solutions for every budget."
    },
    {
      question: "How long does a typical interior design project take in Bangalore?",
      answer: "Our standard timeline is 45 working days for most projects. This includes design finalization (7-10 days), material procurement (7 days), and execution (25-30 days). We guarantee on-time delivery or ₹2000/day compensation for delays."
    },
    {
      question: "What is the cost of interior design per sq ft in Bangalore?",
      answer: "Interior design costs vary based on requirements, typically ranging from ₹800-₹2000 per sq ft. We offer transparent pricing with detailed quotations, no hidden charges, and 100% material transparency. Get an accurate estimate with our free consultation."
    },
    {
      question: "Do you provide 3D designs before starting the work?",
      answer: "Yes! We provide detailed 3D visualizations of your entire space before taking any payment. This helps you see exactly how your home will look after completion. We offer unlimited design revisions until you're 100% satisfied."
    },
    {
      question: "What warranty do you provide on interior work?",
      answer: "We provide a comprehensive 10-year warranty on all our interior work, covering manufacturing defects, hardware issues, and workmanship. We use only branded materials from partners like Hettich, Ebco, and Century Ply to ensure lasting quality."
    },
    {
      question: "How do I get started with JCD Interior Designers?",
      answer: "Getting started is easy! Fill out our consultation form or call us at 8884456466. We'll schedule a free site visit, understand your requirements, provide 3D designs, and give you a transparent quotation - all without any initial payment."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 px-6 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-12">
          Frequently Asked Questions
        </h2>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden"
            >
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors duration-200"
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="text-lg font-semibold text-gray-900 pr-4">
                  {faq.question}
                </h3>
                <svg
                  className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              
              <div
                className={`px-6 transition-all duration-300 ease-in-out ${
                  openIndex === index
                    ? 'max-h-96 py-4 opacity-100'
                    : 'max-h-0 py-0 opacity-0 overflow-hidden'
                }`}
              >
                <p className="text-gray-600 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;