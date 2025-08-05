import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from "recharts";

interface SkillRadarProps {
  skills?: Array<{
    skill: string;
    current: number;
    target: number;
  }>;
}

export const SkillRadar = ({ skills = [] }: SkillRadarProps) => {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-primary"></div>
          Skill Progress
        </CardTitle>
      </CardHeader>
      <CardContent>
        {skills.length > 0 ? (
          <ResponsiveContainer width="100%" height={300}>
            <RadarChart data={skills}>
              <PolarGrid />
              <PolarAngleAxis dataKey="skill" />
              <PolarRadiusAxis angle={90} domain={[0, 100]} />
              <Radar
                name="Current"
                dataKey="current"
                stroke="hsl(var(--primary))"
                fill="hsl(var(--primary))"
                fillOpacity={0.2}
              />
              <Radar
                name="Target"
                dataKey="target"
                stroke="hsl(var(--accent))"
                fill="hsl(var(--accent))"
                fillOpacity={0.1}
              />
            </RadarChart>
          </ResponsiveContainer>
        ) : (
          <div className="h-[300px] flex items-center justify-center text-muted-foreground">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-muted mx-auto mb-4 flex items-center justify-center">
                <div className="w-8 h-8 rounded-full border-2 border-muted-foreground border-dashed"></div>
              </div>
              <p>No skill data available</p>
              <p className="text-sm">Complete assessments to see your progress</p>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};