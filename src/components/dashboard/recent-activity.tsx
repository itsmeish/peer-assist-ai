import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  Activity, 
  MessageCircle, 
  HelpCircle, 
  CheckCircle,
  Clock,
  Bot
} from "lucide-react";

interface ActivityItem {
  id: string;
  type: 'help_given' | 'question_asked' | 'question_answered' | 'ai_interaction';
  title: string;
  description: string;
  timestamp: string;
  karma?: number;
  participants?: string[];
  isAI?: boolean;
}

const activities: ActivityItem[] = [
  {
    id: "1",
    type: "help_given",
    title: "Helped Sarah with Binary Search",
    description: "Explained the algorithm step-by-step with visual examples",
    timestamp: "2 hours ago",
    karma: 25,
    participants: ["Sarah Kim"]
  },
  {
    id: "2", 
    type: "ai_interaction",
    title: "AI-Enhanced Discussion",
    description: "Circle AI helped moderate your explanation of recursion",
    timestamp: "5 hours ago",
    isAI: true
  },
  {
    id: "3",
    type: "question_answered",
    title: "Answered: Array vs LinkedList",
    description: "Provided detailed comparison with time complexity analysis",
    timestamp: "1 day ago",
    karma: 15,
    participants: ["Marcus Johnson"]
  },
  {
    id: "4",
    type: "question_asked",
    title: "Asked about Dynamic Programming",
    description: "Got help from Alex on understanding memoization patterns",
    timestamp: "2 days ago",
    participants: ["Alex Chen"]
  }
];

const getActivityIcon = (type: ActivityItem['type'], isAI?: boolean) => {
  if (isAI) return <Bot className="h-4 w-4" />;
  
  switch (type) {
    case 'help_given':
      return <CheckCircle className="h-4 w-4" />;
    case 'question_asked':
      return <HelpCircle className="h-4 w-4" />;
    case 'question_answered':
      return <MessageCircle className="h-4 w-4" />;
    default:
      return <Activity className="h-4 w-4" />;
  }
};

const getActivityColor = (type: ActivityItem['type'], isAI?: boolean) => {
  if (isAI) return "text-ai-assistant";
  
  switch (type) {
    case 'help_given':
      return "text-learning-progress";
    case 'question_asked':
      return "text-learning-karma";
    case 'question_answered':
      return "text-primary";
    default:
      return "text-muted-foreground";
  }
};

export function RecentActivity() {
  return (
    <Card className="shadow-soft">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center gap-2">
          <Activity className="h-5 w-5 text-primary" />
          Recent Activity
        </CardTitle>
        <p className="text-sm text-muted-foreground">
          Your learning interactions this week
        </p>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activities.map((activity) => (
            <div key={activity.id} className="flex gap-3 pb-3 last:pb-0 last:border-b-0 border-b border-border/50">
              <div className={`mt-1 ${getActivityColor(activity.type, activity.isAI)}`}>
                {getActivityIcon(activity.type, activity.isAI)}
              </div>
              
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <p className="text-sm font-medium">{activity.title}</p>
                    <p className="text-xs text-muted-foreground mt-1">
                      {activity.description}
                    </p>
                  </div>
                  {activity.karma && (
                    <Badge variant="secondary" className="bg-learning-karma/10 text-learning-karma border-learning-karma/20 text-xs">
                      +{activity.karma}
                    </Badge>
                  )}
                </div>
                
                <div className="flex items-center gap-2 mt-2">
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Clock className="h-3 w-3" />
                    {activity.timestamp}
                  </div>
                  
                  {activity.participants && (
                    <div className="flex items-center gap-1">
                      {activity.participants.slice(0, 2).map((participant, index) => (
                        <Avatar key={index} className="h-5 w-5">
                          <AvatarFallback className="bg-gradient-primary text-primary-foreground text-xs">
                            {participant.split(' ').map(n => n[0]).join('')}
                          </AvatarFallback>
                        </Avatar>
                      ))}
                      {activity.participants.length > 2 && (
                        <span className="text-xs text-muted-foreground">
                          +{activity.participants.length - 2} more
                        </span>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}