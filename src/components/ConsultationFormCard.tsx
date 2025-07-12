
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';

const ConsultationFormCard = () => {
  const [step, setStep] = useState(1);
  const [selectedPropertyType, setSelectedPropertyType] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });
  const [showThankYou, setShowThankYou] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isGlowing, setIsGlowing] = useState(false);
  const { toast } = useToast();

  const propertyTypes = ['1 BHK', '2 BHK', '3 BHK', '4 BHK', 'Villa', 'Duplex'];

  useEffect(() => {
    const handleHighlight = () => {
      setIsGlowing(true);
      // Remove the glow effect after 3 seconds
      setTimeout(() => {
        setIsGlowing(false);
      }, 3000);
    };

    window.addEventListener('highlight-consultation-form', handleHighlight);

    return () => {
      window.removeEventListener('highlight-consultation-form', handleHighlight);
    };
  }, []);

  const handlePropertyTypeSelect = (type: string) => {
    setSelectedPropertyType(type);
  };

  const handleNext = () => {
    if (!selectedPropertyType) {
      toast({
        title: "Please select a property type",
        variant: "destructive"
      });
      return;
    }
    setStep(2);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.phone) {
      toast({
        title: "Please fill in all fields",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('https://submit-form.com/znE5oNIKd', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          propertyType: selectedPropertyType,
          source: 'Website Consultation Form'
        })
      });

      if (response.ok) {
        console.log('Form submitted successfully:', { ...formData, propertyType: selectedPropertyType });
        setShowThankYou(true);
        
        toast({
          title: "Consultation booked successfully!",
          description: "Our team will reach out to you soon."
        });
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      toast({
        title: "Submission failed",
        description: "Please try again or contact us directly.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  if (showThankYou) {
    return (
      <>
        <style>
          {`
            @keyframes glow-pulse {
              0%, 100% {
                box-shadow: 0 0 20px rgba(239, 68, 68, 0.5), 0 0 40px rgba(239, 68, 68, 0.3), 0 0 60px rgba(239, 68, 68, 0.1);
              }
              50% {
                box-shadow: 0 0 30px rgba(239, 68, 68, 0.7), 0 0 50px rgba(239, 68, 68, 0.5), 0 0 70px rgba(239, 68, 68, 0.3);
              }
            }
            
            .glow-effect {
              animation: glow-pulse 1.5s ease-in-out infinite;
              transition: all 0.3s ease;
            }
          `}
        </style>
        <Card className={`border-green-200 shadow-lg animate-fade-in w-full max-w-sm md:max-w-md mx-auto ${isGlowing ? 'glow-effect' : ''}`} data-consultation-form>
        <CardContent className="text-center p-6 md:p-8">
          <div className="w-12 h-12 md:w-16 md:h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-6 h-6 md:w-8 md:h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
          </div>
          <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">Thank You!</h3>
          <p className="text-gray-600 mb-6 text-sm md:text-base">
            Thank you for your interest! Our team will reach out to you soon.
          </p>
          <Button 
            onClick={() => {
              window.open(
                'https://api.whatsapp.com/send?phone=918884456466&text=Hey%20JCD%2C%20I%20want%20to%20discuss%20about%20your%20interior%20services',
                '_blank'
              );
            }}
            className="w-full min-h-[40px] md:min-h-[48px] py-2 bg-green-500 hover:bg-green-600 text-white flex items-center justify-center gap-2 whitespace-normal text-xs sm:text-sm md:text-base"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Want a quicker response? Contact us on WhatsApp
          </Button>
        </CardContent>
      </Card>
      </>
    );
  }

  return (
    <>
      <style>
        {`
          @keyframes glow-pulse {
            0%, 100% {
              box-shadow: 0 0 20px rgba(239, 68, 68, 0.5), 0 0 40px rgba(239, 68, 68, 0.3), 0 0 60px rgba(239, 68, 68, 0.1);
            }
            50% {
              box-shadow: 0 0 30px rgba(239, 68, 68, 0.7), 0 0 50px rgba(239, 68, 68, 0.5), 0 0 70px rgba(239, 68, 68, 0.3);
            }
          }
          
          .glow-effect {
            animation: glow-pulse 1.5s ease-in-out infinite;
            transition: all 0.3s ease;
          }
        `}
      </style>
      <Card className={`shadow-xl border-0 animate-fade-in w-full max-w-sm md:max-w-md mx-auto ${isGlowing ? 'glow-effect' : ''}`} data-consultation-form>
      <CardHeader className="text-center bg-gradient-to-r from-red-600 to-red-700 text-white rounded-t-lg p-4 md:p-6">
        <CardTitle className="text-lg md:text-xl font-semibold">
          Get a Free Design Consultation
        </CardTitle>
        <p className="text-red-100 text-xs md:text-sm font-medium mt-2 animate-pulse">
          ⚡ Last 3 spots left this month!
        </p>
      </CardHeader>
      
      <CardContent className="p-4 md:p-6">
        {step === 1 && (
          <div className="animate-slide-in-right">
            <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-3 md:mb-4">Property type</h3>
            <div className="grid grid-cols-2 min-[430px]:grid-cols-3 gap-1.5 min-[430px]:gap-2 md:gap-3 mb-4 md:mb-6">
              {propertyTypes.map((type) => (
                <Button
                  key={type}
                  variant={selectedPropertyType === type ? "default" : "outline"}
                  className={`h-10 md:h-12 text-sm md:text-base font-medium transition-all duration-200 ${
                    selectedPropertyType === type 
                      ? 'bg-red-600 hover:bg-red-700 text-white' 
                      : 'hover:border-red-300 hover:text-red-600'
                  }`}
                  onClick={() => handlePropertyTypeSelect(type)}
                >
                  {type}
                </Button>
              ))}
            </div>
            <Button 
              onClick={handleNext}
              className="w-full h-10 md:h-12 bg-gray-900 hover:bg-gray-800 font-medium text-sm md:text-base"
            >
              Next
            </Button>
          </div>
        )}

        {step === 2 && (
          <form onSubmit={handleSubmit} className="space-y-3 md:space-y-4 animate-slide-in-right">
            <div className="text-xs md:text-sm text-gray-600 mb-3 md:mb-4">
              Property Type: <span className="font-semibold text-red-600">{selectedPropertyType}</span>
            </div>
            
            <div>
              <Input
                type="text"
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                className="h-10 md:h-12 text-sm md:text-base"
                disabled={isSubmitting}
                required
              />
            </div>
            
            <div>
              <Input
                type="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                className="h-10 md:h-12 text-sm md:text-base"
                disabled={isSubmitting}
                required
              />
            </div>
            
            <div>
              <Input
                type="tel"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={(e) => handleInputChange('phone', e.target.value)}
                className="h-10 md:h-12 text-sm md:text-base"
                disabled={isSubmitting}
                required
              />
            </div>
            
            <div className="flex gap-2 md:gap-3 pt-2">
              <Button 
                type="button"
                variant="outline"
                onClick={() => setStep(1)}
                disabled={isSubmitting}
                className="flex-1 h-10 md:h-12 text-sm md:text-base"
              >
                Back
              </Button>
              <Button 
                type="submit"
                disabled={isSubmitting}
                className="flex-1 h-10 md:h-12 bg-red-600 hover:bg-red-700 font-medium text-sm md:text-base"
              >
                {isSubmitting ? 'Submitting...' : 'Book Free Consultation'}
              </Button>
            </div>
          </form>
        )}
      </CardContent>
    </Card>
    </>
  );
};

export default ConsultationFormCard;
