import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Activity, Bot, MessageCircle } from "lucide-react";

interface ActivityItem {
  id: string;
  type: 'help' | 'ai_insight' | 'badge' | 'circle_update';
  title: string;
  description: string;
  timestamp: string;
  user?: {
    name: string;
    avatar?: string;
  };
}

interface RecentActivityProps {
  activities?: ActivityItem[];
}

export const RecentActivity = ({ activities = [] }: RecentActivityProps) => {
  const getActivityIcon = (type: string) => {
    switch (type) {
      case 'help':
        return <MessageCircle className="w-4 h-4 text-accent" />;
      case 'ai_insight':
        return <Bot className="w-4 h-4 text-info" />;
      case 'badge':
        return <Badge className="w-4 h-4 text-warning" />;
      default:
        return <Activity className="w-4 h-4 text-primary" />;
    }
  };

  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Activity className="w-5 h-5 text-info" />
          Recent Activity
        </CardTitle>
      </CardHeader>
      <CardContent>
        {activities.length > 0 ? (
          <div className="space-y-4">
            {activities.map((activity) => (
              <div key={activity.id} className="flex items-start gap-3 p-2 rounded-lg hover:bg-muted/50 transition-colors">
                <div className="flex-shrink-0 mt-1">
                  {getActivityIcon(activity.type)}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <p className="font-medium text-sm">{activity.title}</p>
                      <p className="text-xs text-muted-foreground mt-1">{activity.description}</p>
                    </div>
                    {activity.user && (
                      <Avatar className="w-6 h-6">
                        <AvatarFallback className="text-xs">
                          {activity.user.name.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                    )}
                  </div>
                  <p className="text-xs text-muted-foreground mt-2">{activity.timestamp}</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-8">
            <div className="w-16 h-16 rounded-full bg-muted mx-auto mb-4 flex items-center justify-center">
              <Activity className="w-8 h-8 text-muted-foreground" />
            </div>
            <p className="text-muted-foreground mb-2">No recent activity</p>
            <p className="text-sm text-muted-foreground">Your learning journey will appear here</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};