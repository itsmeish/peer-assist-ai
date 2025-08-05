import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { MessageCircle, Users } from "lucide-react";

interface PeerCircleProps {
  peers?: Array<{
    id: string;
    name: string;
    avatar?: string;
    status: 'online' | 'offline';
  }>;
  onAskCircle?: () => void;
}

export const PeerCircle = ({ peers = [], onAskCircle }: PeerCircleProps) => {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Users className="w-5 h-5 text-accent" />
          My Circle
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {peers.length > 0 ? (
          <>
            <div className="flex -space-x-2">
              {peers.map((peer) => (
                <Avatar key={peer.id} className="border-2 border-background">
                  <AvatarFallback className="text-xs">
                    {peer.name.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                  <div className={`absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-background ${
                    peer.status === 'online' ? 'bg-success' : 'bg-muted-foreground'
                  }`}></div>
                </Avatar>
              ))}
            </div>
            
            <div className="space-y-2">
              {peers.map((peer) => (
                <div key={peer.id} className="flex items-center justify-between text-sm">
                  <span>{peer.name}</span>
                  <div className={`w-2 h-2 rounded-full ${
                    peer.status === 'online' ? 'bg-success' : 'bg-muted-foreground'
                  }`}></div>
                </div>
              ))}
            </div>
            
            <Button 
              className="w-full gradient-primary text-primary-foreground shadow-elegant" 
              onClick={onAskCircle}
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              Ask Circle
            </Button>
          </>
        ) : (
          <div className="text-center py-8">
            <div className="w-16 h-16 rounded-full bg-muted mx-auto mb-4 flex items-center justify-center">
              <Users className="w-8 h-8 text-muted-foreground" />
            </div>
            <p className="text-muted-foreground mb-2">No circle assigned yet</p>
            <p className="text-sm text-muted-foreground">Complete your skill assessment to join a circle</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};