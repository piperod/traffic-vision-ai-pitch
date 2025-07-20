import { User, Award, Lightbulb, Settings } from "lucide-react";
import { Card } from "@/components/ui/card";

export const TeamSlide = () => {
  const teamMembers = [
    {
      name: "Sophia Williams",
      role: "CEO",
      icon: Lightbulb,
      background: "Visionary leader, urban infrastructure & AI markets",
      expertise: ["Strategic Vision", "AI Market Development", "Investor Relations", "Urban Infrastructure"],
      color: "text-primary"
    },
    {
      name: "Steve Tarte", 
      role: "COO",
      icon: Settings,
      background: "Civil/traffic industry veteran, operations strategist",
      expertise: ["Operations Strategy", "Civil Engineering", "Process Optimization", "Team Leadership"],
      color: "text-accent"
    },
    {
      name: "Felipe Rodriguez, PhD",
      role: "CMO & CTO",
      icon: Award,
      background: "AI system architect, product/marketing visionary",
      expertise: ["AI/ML Architecture", "Product Strategy", "Marketing Vision", "Technical Leadership"],
      color: "text-success"
    },
    {
      name: "Brian Gentry",
      role: "VP of Field Operations",
      icon: User,
      background: "Expert in traffic data collection and government contract execution",
      expertise: ["Field Operations", "Government Contracts", "Data Collection", "Quality Assurance"],
      color: "text-warning"
    }
  ];

  const teamStats = [
    { metric: "Combined Experience", value: "75+ years", description: "Traffic & infrastructure" },
    { metric: "Government Contracts", value: "$50M+", description: "Successfully delivered" },
    { metric: "Team Size", value: "25+", description: "Growing rapidly" },
    { metric: "Industry Recognition", value: "Multiple", description: "Awards & certifications" }
  ];

  const advisors = [
    { name: "Former FDOT Executive", role: "Strategic Advisor", focus: "Government Relations" },
    { name: "AI Industry Veteran", role: "Technical Advisor", focus: "Machine Learning" },
    { name: "Transportation Consultant", role: "Industry Advisor", focus: "Market Strategy" },
    { name: "Series A Investor", role: "Board Member", focus: "Growth Strategy" }
  ];

  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-foreground">Leadership Team</h1>
        <p className="text-xl text-muted-foreground">
          Proven industry veterans with deep technical and operational expertise
        </p>
      </div>

      {/* Core Team */}
      <div className="grid lg:grid-cols-2 gap-6">
        {teamMembers.map((member, index) => (
          <Card key={index} className="p-6 hover:shadow-lg transition-all">
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <member.icon className={`h-12 w-12 ${member.color}`} />
                <div>
                  <h3 className="text-xl font-semibold">{member.name}</h3>
                  <p className={`font-medium ${member.color}`}>{member.role}</p>
                </div>
              </div>
              <p className="text-muted-foreground">{member.background}</p>
              <div className="space-y-2">
                <h4 className="font-semibold text-sm">Key Expertise:</h4>
                <div className="flex flex-wrap gap-2">
                  {member.expertise.map((skill, sIndex) => (
                    <span key={sIndex} className="text-xs bg-secondary px-2 py-1 rounded">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Team Statistics */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {teamStats.map((stat, index) => (
          <Card key={index} className="p-4 text-center">
            <div className="space-y-2">
              <div className="text-2xl font-bold text-primary">{stat.value}</div>
              <div className="font-semibold">{stat.metric}</div>
              <div className="text-sm text-muted-foreground">{stat.description}</div>
            </div>
          </Card>
        ))}
      </div>

      {/* Advisory Board */}
      <div className="space-y-4">
        <h3 className="text-2xl font-bold text-center">Advisory Board & Key Relationships</h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {advisors.map((advisor, index) => (
            <Card key={index} className="p-4">
              <div className="space-y-2">
                <h4 className="font-semibold text-primary">{advisor.name}</h4>
                <div className="text-sm text-muted-foreground">{advisor.role}</div>
                <div className="text-xs bg-accent/10 text-accent px-2 py-1 rounded">
                  {advisor.focus}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Team Philosophy */}
      <Card className="p-8 bg-primary/5 border-primary/20">
        <div className="text-center space-y-4">
          <h3 className="text-2xl font-bold text-primary">Our Team Philosophy</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <div className="text-lg font-semibold mb-2">Domain Expertise</div>
              <div className="text-sm text-muted-foreground">
                Deep understanding of traffic engineering, government processes, and AI technology
              </div>
            </div>
            <div>
              <div className="text-lg font-semibold mb-2">Execution Focus</div>
              <div className="text-sm text-muted-foreground">
                Proven track record of delivering complex projects on time and within budget
              </div>
            </div>
            <div>
              <div className="text-lg font-semibold mb-2">Innovation Drive</div>
              <div className="text-sm text-muted-foreground">
                Continuously pushing boundaries with cutting-edge technology and methodologies
              </div>
            </div>
          </div>
        </div>
      </Card>

      {/* Hiring Plan */}
      <div className="text-center p-6 bg-accent-gradient rounded-lg">
        <h3 className="text-xl font-bold text-white mb-2">Growing Our Team</h3>
        <p className="text-white/90 mb-4">
          We're actively recruiting top talent to support our rapid growth
        </p>
        <div className="text-white/90 text-sm">
          Open positions: Senior AI Engineers, Field Operations Managers, Sales Professionals
        </div>
      </div>
    </div>
  );
};