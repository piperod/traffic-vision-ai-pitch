import { Mail, Globe, Phone, MapPin } from "lucide-react";
import { Card } from "@/components/ui/card";

export const ThankYouSlide = () => {
  const contacts = [
    {
      icon: Mail,
      label: "Email",
      value: "info@13classifications.ai",
      secondary: "info@pmatraffic.com"
    },
    {
      icon: Globe,
      label: "Websites", 
      value: "www.13classifications.ai",
      secondary: "www.pmadata.com"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Jacksonville, FL",
      secondary: "Expanding regionally"
    },
    {
      icon: Phone,
      label: "Let's Connect",
      value: "Schedule a demo",
      secondary: "Investor meetings"
    }
  ];

  const nextSteps = [
    "Schedule product demonstration",
    "Review detailed financials",
    "Meet with technical team",
    "Discuss investment terms"
  ];

  const valueProp = [
    { title: "Proven Technology", description: "98% accuracy AI platform" },
    { title: "Established Market", description: "25 years of client relationships" },
    { title: "Strong Growth", description: "40% projected annual growth" },
    { title: "Experienced Team", description: "Deep industry expertise" }
  ];

  return (
    <div className="space-y-8">
      {/* Main Thank You */}
      <div className="text-center space-y-6">
        <h1 className="text-5xl font-bold bg-primary-gradient bg-clip-text text-transparent">
          Thank You
        </h1>
        <p className="text-2xl text-muted-foreground max-w-3xl mx-auto">
          Let's make data the foundation of safer, smarter infrastructure
        </p>
        
        {/* Company Logos */}
        <div className="flex items-center justify-center gap-6 py-6">
          <img 
            src="/lovable-uploads/601fc64a-1ec0-48e6-a0d1-8535dcc26fd1.png" 
            alt="PMA Logo" 
            className="h-20 w-auto"
          />
          <span className="text-3xl font-bold text-muted-foreground">+</span>
          <img 
            src="/lovable-uploads/9a133c49-a757-4494-ab37-9b28112b11a5.png" 
            alt="13Classifications.Ai Logo" 
            className="h-20 w-auto"
          />
        </div>
      </div>

      {/* Contact Information */}
      <div className="grid lg:grid-cols-2 gap-8">
        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-center">Contact Information</h3>
          <div className="space-y-4">
            {contacts.map((contact, index) => (
              <Card key={index} className="p-4 hover:shadow-md transition-all">
                <div className="flex items-center gap-4">
                  <contact.icon className="h-6 w-6 text-primary" />
                  <div>
                    <div className="font-semibold">{contact.label}</div>
                    <div className="text-primary">{contact.value}</div>
                    {contact.secondary && (
                      <div className="text-sm text-muted-foreground">{contact.secondary}</div>
                    )}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-center">Next Steps</h3>
          <Card className="p-6">
            <div className="space-y-4">
              {nextSteps.map((step, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </div>
                  <span>{step}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>

      {/* Value Proposition Summary */}
      <div className="space-y-4">
        <h3 className="text-2xl font-bold text-center">Investment Highlights</h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {valueProp.map((prop, index) => (
            <Card key={index} className="p-4 text-center hover:shadow-lg transition-all">
              <div className="space-y-2">
                <h4 className="font-semibold text-primary">{prop.title}</h4>
                <p className="text-sm text-muted-foreground">{prop.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center p-8 bg-primary-gradient rounded-lg">
        <h3 className="text-2xl font-bold text-white mb-4">Ready to Transform Transportation Data?</h3>
        <p className="text-white/90 text-lg mb-6">
          Join us in revolutionizing how cities collect, analyze, and act on traffic data
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <div className="text-white font-semibold">
            📧 info@13classifications.ai
          </div>
          <div className="text-white/80">|</div>
          <div className="text-white font-semibold">
            🌐 www.13classifications.ai
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="text-center text-muted-foreground text-sm pt-8">
        <p>Peggy Malone & Associates + 13Classifications.Ai • Series A Pitch Deck • Confidential</p>
      </div>
    </div>
  );
};