import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Trophy, Star, Zap } from "lucide-react";

interface KarmaStatsProps {
  karma?: number;
  level?: number;
  nextLevelKarma?: number;
  badges?: Array<{
    id: string;
    name: string;
    icon: string;
    description: string;
  }>;
}

export const KarmaStats = ({ 
  karma = 0, 
  level = 1, 
  nextLevelKarma = 100, 
  badges = [] 
}: KarmaStatsProps) => {
  const progress = nextLevelKarma > 0 ? (karma / nextLevelKarma) * 100 : 0;

  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Trophy className="w-5 h-5 text-warning" />
          Karma & Achievements
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="text-center">
          <div className="text-3xl font-bold text-primary mb-2">{karma}</div>
          <div className="text-sm text-muted-foreground mb-3">
            Level {level} • {nextLevelKarma - karma} to next level
          </div>
          <Progress value={progress} className="h-2" />
        </div>

        <div>
          <h4 className="font-semibold mb-3 flex items-center gap-2">
            <Star className="w-4 h-4" />
            Badges
          </h4>
          {badges.length > 0 ? (
            <div className="grid grid-cols-2 gap-2">
              {badges.map((badge) => (
                <Badge key={badge.id} variant="secondary" className="p-2 flex items-center gap-2">
                  <span>{badge.icon}</span>
                  <span className="text-xs">{badge.name}</span>
                </Badge>
              ))}
            </div>
          ) : (
            <div className="text-center py-4 text-muted-foreground">
              <Zap className="w-8 h-8 mx-auto mb-2 opacity-50" />
              <p className="text-sm">No badges earned yet</p>
              <p className="text-xs">Help your circle to earn badges</p>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};