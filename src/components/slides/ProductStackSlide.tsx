import { Car, Users, ParkingCircle, BarChart3, Eye, FileText } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const ProductStackSlide = () => {
  const pmaServices = [
    { icon: Car, title: "Traffic Counts & Classifications", description: "Comprehensive vehicle counting and classification" },
    { icon: Users, title: "Pedestrian Studies", description: "Detailed pedestrian flow and behavior analysis" },
    { icon: ParkingCircle, title: "Parking & Work Zone Studies", description: "Parking utilization and work zone impact assessment" },
  ];

  const aiPlatform = [
    { icon: BarChart3, title: "AI Analytics Platform", description: "98% accuracy traffic analysis and insights" },
    { icon: Eye, title: "Real-Time Monitoring", description: "Live traffic monitoring and alert systems" },
    { icon: FileText, title: "Predictive Modeling", description: "Future traffic pattern predictions and optimization" },
  ];

  const additionalServices = [
    "Custom Dashboards & Reports",
    "FDOT/MPO Compliance",
    "RFP Response Services",
    "Traffic Engineering Consulting"
  ];

  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-foreground">Product & Service Stack</h1>
        <p className="text-xl text-muted-foreground">
          Comprehensive traffic solutions from field to analytics
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* PMA Services */}
        <div className="space-y-4">
          <div className="flex items-center gap-3 mb-6">
            <img 
              src="/lovable-uploads/601fc64a-1ec0-48e6-a0d1-8535dcc26fd1.png" 
              alt="PMA Logo" 
              className="h-8 w-auto"
            />
            <h2 className="text-2xl font-bold text-primary">Field Services</h2>
            <Badge variant="secondary">25 Years</Badge>
          </div>
          <div className="space-y-3">
            {pmaServices.map((service, index) => (
              <Card key={index} className="p-4 hover:shadow-md transition-all">
                <div className="flex items-start gap-3">
                  <service.icon className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold">{service.title}</h3>
                    <p className="text-sm text-muted-foreground">{service.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* AI Platform */}
        <div className="space-y-4">
          <div className="flex items-center gap-3 mb-6">
            <img 
              src="/lovable-uploads/9a133c49-a757-4494-ab37-9b28112b11a5.png" 
              alt="13Classifications.Ai Logo" 
              className="h-8 w-auto"
            />
            <h2 className="text-2xl font-bold text-accent">AI Platform</h2>
            <Badge className="bg-accent text-accent-foreground">98% Accuracy</Badge>
          </div>
          <div className="space-y-3">
            {aiPlatform.map((feature, index) => (
              <Card key={index} className="p-4 hover:shadow-md transition-all">
                <div className="flex items-start gap-3">
                  <feature.icon className="h-6 w-6 text-accent mt-1" />
                  <div>
                    <h3 className="font-semibold">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Additional Services */}
      <Card className="p-6 bg-muted/30">
        <h3 className="text-xl font-semibold mb-4">Additional Services & Capabilities</h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {additionalServices.map((service, index) => (
            <div key={index} className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <span className="text-sm">{service}</span>
            </div>
          ))}
        </div>
      </Card>

      {/* Integration Highlight */}
      <div className="text-center p-6 bg-primary-gradient rounded-lg">
        <h3 className="text-xl font-bold text-white mb-2">Unified Platform Advantage</h3>
        <p className="text-white/90">
          Seamless integration from data collection to AI-powered insights, 
          eliminating vendor fragmentation and ensuring data quality
        </p>
      </div>
    </div>
  );
};