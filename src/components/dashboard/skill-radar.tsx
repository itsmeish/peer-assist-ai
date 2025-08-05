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

const skillsData: SkillData[] = [
  {
    name: "Problem Solving",
    current: 78,
    previous: 65,
    icon: <Brain className="h-4 w-4" />,
    color: "bg-learning-progress"
  },
  {
    name: "Code Quality",
    current: 85,
    previous: 82,
    icon: <Code className="h-4 w-4" />,
    color: "bg-primary"
  },
  {
    name: "Communication",
    current: 62,
    previous: 45,
    icon: <MessageSquare className="h-4 w-4" />,
    color: "bg-learning-karma"
  },
  {
    name: "Logic Depth",
    current: 71,
    previous: 58,
    icon: <Target className="h-4 w-4" />,
    color: "bg-learning-streak"
  }
];

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
        {skillsData.map((skill) => {
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
        })}
        
        <div className="mt-4 p-3 rounded-lg bg-gradient-learning/10 border border-learning-progress/20">
          <p className="text-sm font-medium text-learning-progress mb-1">
            🎯 This Week's Focus
          </p>
          <p className="text-xs text-muted-foreground">
            Great improvement in communication! Try explaining concepts to your circle members to strengthen logic depth.
          </p>
        </div>
      </CardContent>
    </Card>
  );
}