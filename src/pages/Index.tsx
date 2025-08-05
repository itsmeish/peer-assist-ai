import { Navigation } from "@/components/ui/navigation";
import { SkillRadar } from "@/components/dashboard/skill-radar";
import { PeerCircle } from "@/components/dashboard/peer-circle";
import { KarmaStats } from "@/components/dashboard/karma-stats";
import { RecentActivity } from "@/components/dashboard/recent-activity";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  BookOpen, 
  Target, 
  Users, 
  Zap,
  Calendar,
  Clock
} from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 py-6">
        {/* Welcome Section */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-3xl font-bold">Welcome back, Jordan! 👋</h1>
              <p className="text-muted-foreground mt-1">
                Ready to learn and help your circle grow together?
              </p>
            </div>
            <Badge className="bg-gradient-learning text-white border-0 px-4 py-2">
              <Zap className="h-4 w-4 mr-1" />
              7-day streak!
            </Badge>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <Card className="shadow-soft hover:shadow-medium transition-shadow cursor-pointer">
            <CardContent className="p-4 text-center">
              <BookOpen className="h-8 w-8 mx-auto mb-2 text-primary" />
              <h3 className="font-semibold text-sm mb-1">Continue Learning</h3>
              <p className="text-xs text-muted-foreground">JavaScript Fundamentals</p>
            </CardContent>
          </Card>
          
          <Card className="shadow-soft hover:shadow-medium transition-shadow cursor-pointer">
            <CardContent className="p-4 text-center">
              <Target className="h-8 w-8 mx-auto mb-2 text-learning-progress" />
              <h3 className="font-semibold text-sm mb-1">Daily Challenge</h3>
              <p className="text-xs text-muted-foreground">Array Manipulation</p>
            </CardContent>
          </Card>
          
          <Card className="shadow-soft hover:shadow-medium transition-shadow cursor-pointer">
            <CardContent className="p-4 text-center">
              <Users className="h-8 w-8 mx-auto mb-2 text-learning-karma" />
              <h3 className="font-semibold text-sm mb-1">Circle Leaderboard</h3>
              <p className="text-xs text-muted-foreground">You're #2 this week</p>
            </CardContent>
          </Card>
          
          <Card className="shadow-soft hover:shadow-medium transition-shadow cursor-pointer">
            <CardContent className="p-4 text-center">
              <Calendar className="h-8 w-8 mx-auto mb-2 text-learning-streak" />
              <h3 className="font-semibold text-sm mb-1">Study Session</h3>
              <p className="text-xs text-muted-foreground">Schedule with circle</p>
            </CardContent>
          </Card>
        </div>

        {/* Main Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-6">
            <SkillRadar />
            <RecentActivity />
          </div>
          
          {/* Right Column */}
          <div className="space-y-6">
            <PeerCircle />
            <KarmaStats />
            
            {/* Weekly Goals Card */}
            <Card className="shadow-soft">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-2">
                  <Target className="h-5 w-5 text-learning-progress" />
                  Weekly Goals
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm">Help 3 circle members</span>
                  <Badge variant="secondary" className="bg-learning-progress/10 text-learning-progress">
                    2/3
                  </Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Complete 5 coding tasks</span>
                  <Badge variant="secondary" className="bg-learning-progress/10 text-learning-progress">
                    5/5 ✓
                  </Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Maintain daily streak</span>
                  <Badge variant="secondary" className="bg-learning-streak/10 text-learning-streak">
                    7/7 ✓
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Floating Help Button */}
        <div className="fixed bottom-6 right-6 z-50">
          <Button 
            size="lg" 
            className="rounded-full w-14 h-14 bg-gradient-primary shadow-glow hover:shadow-lg transition-all duration-300 animate-bounce-in"
          >
            <Clock className="h-6 w-6" />
          </Button>
        </div>
      </main>
    </div>
  );
};

export default Index;
