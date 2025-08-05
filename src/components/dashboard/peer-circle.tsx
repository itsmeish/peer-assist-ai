import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  Users, 
  MessageCirclePlus, 
  Clock, 
  Star,
  Bot,
  UserPlus
} from "lucide-react";

interface CircleMember {
  id: string;
  name: string;
  avatar?: string;
  karma: number;
  isOnline: boolean;
  isAI?: boolean;
  badge?: string;
}

const circleMembers: CircleMember[] = [
  {
    id: "1",
    name: "Alex Chen",
    karma: 1250,
    isOnline: true,
    badge: "Debug Doctor"
  },
  {
    id: "2", 
    name: "Sarah Kim",
    karma: 980,
    isOnline: true,
    badge: "Clarity Coach"
  },
  {
    id: "3",
    name: "Marcus Johnson", 
    karma: 750,
    isOnline: false
  },
  {
    id: "ai",
    name: "Circle AI",
    karma: 0,
    isOnline: true,
    isAI: true
  }
];

export function PeerCircle() {
  return (
    <Card className="shadow-soft">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-2">
            <Users className="h-5 w-5 text-primary" />
            Your Learning Circle
          </CardTitle>
          <Badge variant="outline" className="text-xs">
            <Clock className="h-3 w-3 mr-1" />
            Refreshes in 8 days
          </Badge>
        </div>
        <p className="text-sm text-muted-foreground">
          4 active members ready to help
        </p>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Ask Circle Button */}
        <Button 
          className="w-full bg-gradient-primary shadow-glow hover:shadow-lg transition-all duration-300 animate-pulse-glow"
          size="lg"
        >
          <MessageCirclePlus className="h-5 w-5 mr-2" />
          Ask Your Circle
        </Button>

        {/* Circle Members */}
        <div className="space-y-3">
          <h4 className="text-sm font-medium text-muted-foreground">Circle Members</h4>
          {circleMembers.map((member) => (
            <div key={member.id} className="flex items-center justify-between p-2 rounded-lg hover:bg-muted/50 transition-colors">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={member.avatar} alt={member.name} />
                    <AvatarFallback className={member.isAI ? "bg-ai-assistant text-white" : "bg-gradient-primary text-primary-foreground"}>
                      {member.isAI ? <Bot className="h-4 w-4" /> : member.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  {member.isOnline && (
                    <div className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full bg-circle-online border-2 border-background" />
                  )}
                </div>
                <div>
                  <p className="text-sm font-medium flex items-center gap-2">
                    {member.name}
                    {member.isAI && <Badge variant="secondary" className="text-xs bg-ai-assistant/10 text-ai-assistant border-ai-assistant/20">AI</Badge>}
                  </p>
                  {member.badge && (
                    <p className="text-xs text-muted-foreground">{member.badge}</p>
                  )}
                </div>
              </div>
              {!member.isAI && (
                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                  <Star className="h-3 w-3 fill-learning-karma text-learning-karma" />
                  {member.karma}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Float Mentor */}
        <div className="pt-2 border-t">
          <Button variant="outline" size="sm" className="w-full">
            <UserPlus className="h-4 w-4 mr-2" />
            Request Float Mentor
          </Button>
          <p className="text-xs text-muted-foreground mt-1 text-center">
            Get paired with an advanced learner
          </p>
        </div>
      </CardContent>
    </Card>
  );
}