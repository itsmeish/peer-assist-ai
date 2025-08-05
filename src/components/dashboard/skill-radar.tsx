import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Brain, Code, MessageSquare, Target } from "lucide-react";

interface SkillData {
  name: string;
  current: number;
  previous: number;
  icon: React.ReactNode;
  color: string;
}

const skillsData: SkillData[] = [];

export function SkillRadar() {
  return (
    <Card className="shadow-soft">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center gap-2">
          <TrendingUp className="h-5 w-5 text-learning-progress" />
          Skill Progress
        </CardTitle>
        <p className="text-sm text-muted-foreground">
          Your growth this week
        </p>
      </CardHeader>
      <CardContent className="space-y-4">
        {skillsData.length === 0 ? (
          <div className="text-center py-8 text-muted-foreground">
            <p className="text-sm">No skill data available yet.</p>
            <p className="text-xs mt-1">Complete some tasks to see your progress!</p>
          </div>
        ) : (
          skillsData.map((skill) => {
            const improvement = skill.current - skill.previous;
            return (
              <div key={skill.name} className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className={`p-1.5 rounded-md ${skill.color} text-white`}>
                      {skill.icon}
                    </div>
                    <span className="font-medium text-sm">{skill.name}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-semibold">{skill.current}%</span>
                    {improvement > 0 && (
                      <Badge variant="secondary" className="text-xs bg-learning-progress/10 text-learning-progress border-learning-progress/20">
                        +{improvement}
                      </Badge>
                    )}
                  </div>
                </div>
                <Progress 
                  value={skill.current} 
                  className="h-2"
                />
              </div>
            );
          })
        )}
      </CardContent>
    </Card>
  );
}