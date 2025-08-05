import { Navigation } from "@/components/ui/navigation";
import { SkillRadar } from "@/components/dashboard/skill-radar";
import { PeerCircle } from "@/components/dashboard/peer-circle";
import { KarmaStats } from "@/components/dashboard/karma-stats";
import { RecentActivity } from "@/components/dashboard/recent-activity";

const Index = () => {
  const handleAskCircle = () => {
    // This will be connected to your backend
    console.log("Ask Circle clicked");
  };

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Welcome back!</h1>
          <p className="text-muted-foreground">Continue your learning journey with your circle</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-6">
            <SkillRadar />
            <RecentActivity />
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            <PeerCircle onAskCircle={handleAskCircle} />
            <KarmaStats />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
