import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Trophy, 
  Star, 
  Target, 
  Zap,
  Award,
  TrendingUp
} from "lucide-react";

interface Achievement {
  id: string;
  name: string;
  icon: React.ReactNode;
  description: string;
  earned: boolean;
  progress?: number;
  color: string;
}

const achievements: Achievement[] = [];

export function KarmaStats() {
  const totalKarma = 0;
  const weeklyGain = 0;
  const nextLevelKarma = 100;
  const currentLevelProgress = (totalKarma / nextLevelKarma) * 100;

  return (
    <Card className="shadow-soft">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center gap-2">
          <Trophy className="h-5 w-5 text-learning-karma" />
          Karma & Achievements
        </CardTitle>
        <div className="flex items-center gap-2">
          <span className="text-2xl font-bold bg-gradient-karma bg-clip-text text-transparent">
            {totalKarma}
          </span>
          <Badge className="bg-learning-streak/10 text-learning-streak border-learning-streak/20">
            <TrendingUp className="h-3 w-3 mr-1" />
            +{weeklyGain} this week
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Level Progress */}
        <div className="space-y-2">
          <div className="flex items-center justify-between text-sm">
            <span className="font-medium">Level Progress</span>
            <span className="text-muted-foreground">{totalKarma}/{nextLevelKarma}</span>
          </div>
          <Progress value={currentLevelProgress} className="h-2" />
          <p className="text-xs text-muted-foreground">
            {nextLevelKarma - totalKarma} karma to next level
          </p>
        </div>

        {/* Achievements */}
        <div className="space-y-3">
          <h4 className="text-sm font-medium text-muted-foreground">Recent Achievements</h4>
          {achievements.length === 0 ? (
            <div className="text-center py-4 text-muted-foreground">
              <p className="text-sm">No achievements yet.</p>
              <p className="text-xs mt-1">Start helping peers to earn your first badge!</p>
            </div>
          ) : (
            achievements.map((achievement) => (
              <div key={achievement.id} className="flex items-start gap-3 p-2 rounded-lg hover:bg-muted/50 transition-colors">
                <div className={`p-1.5 rounded-md ${achievement.color} text-white ${achievement.earned ? '' : 'opacity-50'}`}>
                  {achievement.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <p className="text-sm font-medium">{achievement.name}</p>
                    {achievement.earned && (
                      <Award className="h-4 w-4 text-learning-karma" />
                    )}
                  </div>
                  <p className="text-xs text-muted-foreground">{achievement.description}</p>
                  {!achievement.earned && achievement.progress && (
                    <div className="mt-1">
                      <Progress value={achievement.progress} className="h-1" />
                      <p className="text-xs text-muted-foreground mt-1">{achievement.progress}% complete</p>
                    </div>
                  )}
                </div>
              </div>
            ))
          )}
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 gap-3 pt-2 border-t">
          <div className="text-center p-2 rounded-lg bg-learning-progress/10">
            <p className="text-lg font-bold text-learning-progress">0</p>
            <p className="text-xs text-muted-foreground">Peers Helped</p>
          </div>
          <div className="text-center p-2 rounded-lg bg-learning-karma/10">
            <p className="text-lg font-bold text-learning-karma">0.0</p>
            <p className="text-xs text-muted-foreground">Avg Rating</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}