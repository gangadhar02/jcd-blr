
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { useNavigate } from 'react-router-dom';

const ConsultationFormCard = () => {
  const [step, setStep] = useState(1);
  const [selectedPropertyType, setSelectedPropertyType] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isGlowing, setIsGlowing] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

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
        
        toast({
          title: "Consultation booked successfully!",
          description: "Our team will reach out to you soon."
        });
        
        // Redirect to thank you page
        navigate('/thank-you');
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
