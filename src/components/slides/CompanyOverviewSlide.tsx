export const CompanyOverviewSlide = () => {
  return (
    <div className="grid lg:grid-cols-2 gap-12 items-center">
      <div className="space-y-8">
        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <img 
              src="./lovable-uploads/601fc64a-1ec0-48e6-a0d1-8535dcc26fd1.png" 
              alt="PMA Logo" 
              className="h-16 w-auto"
            />
            <span className="text-2xl font-bold text-muted-foreground">+</span>
            <img 
              src="./lovable-uploads/9a133c49-a757-4494-ab37-9b28112b11a5.png" 
              alt="13Classifications.Ai Logo" 
              className="h-16 w-auto"
            />
          </div>
          <h1 className="text-4xl font-bold bg-primary-gradient bg-clip-text text-transparent">
            Company Overview
          </h1>
          <p className="text-xl text-muted-foreground">
            Revolutionizing traffic data collection and analytics
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          <div className="space-y-2">
            <h3 className="font-semibold text-primary">Location</h3>
            <p>Jacksonville, FL</p>
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold text-primary">Business Model</h3>
            <p>B2B SaaS + Service Hybrid</p>
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold text-primary">Industry</h3>
            <p>Traffic Data & Analytics</p>
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold text-primary">Founders</h3>
            <p>Sophia Williams & Steve Tarte</p>
          </div>
        </div>

        <div className="p-6 bg-accent/10 rounded-lg border border-accent/20">
          <h3 className="font-semibold text-accent mb-2">Mission</h3>
          <p className="text-foreground">
            Deliver precise, AI-powered traffic data collection and analytics to support 
            smarter, safer infrastructure development and urban mobility.
          </p>
        </div>
      </div>

      <div className="flex items-center justify-center">
        <div className="relative w-96 h-96">
          <div className="absolute inset-0 bg-primary-gradient opacity-20 rounded-full blur-3xl"></div>
          <div className="relative z-10 w-full h-full flex items-center justify-center">
            <div className="text-center space-y-4">
              <div className="text-6xl">🚦</div>
              <div className="text-lg font-medium text-primary">
                Smart Traffic Analytics
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};