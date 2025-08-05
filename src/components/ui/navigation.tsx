import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  Users, 
  MessageCircle, 
  Trophy, 
  Brain, 
  Bell,
  Search,
  Settings
} from "lucide-react";

interface NavigationProps {
  className?: string;
}

export function Navigation({ className }: NavigationProps) {
  return (
    <header className={cn(
      "sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60",
      className
    )}>
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-primary">
            <Brain className="h-5 w-5 text-primary-foreground" />
          </div>
          <span className="text-xl font-bold bg-gradient-hero bg-clip-text text-transparent">
            CircleUp.AI
          </span>
        </div>

        {/* Search */}
        <div className="flex-1 max-w-md mx-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search circles, topics, or members..."
              className="w-full rounded-lg border bg-background pl-10 pr-4 py-2 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
            />
          </div>
        </div>

        {/* Navigation Items */}
        <nav className="flex items-center space-x-2">
          <Button variant="ghost" size="sm" className="relative">
            <Users className="h-4 w-4" />
            <span className="ml-2 hidden md:inline">My Circle</span>
            <Badge className="absolute -top-1 -right-1 h-5 w-5 rounded-full p-0 text-xs bg-circle-online">
              3
            </Badge>
          </Button>
          
          <Button variant="ghost" size="sm" className="relative">
            <MessageCircle className="h-4 w-4" />
            <span className="ml-2 hidden md:inline">Chat</span>
            <Badge className="absolute -top-1 -right-1 h-5 w-5 rounded-full p-0 text-xs bg-learning-streak">
              2
            </Badge>
          </Button>
          
          <Button variant="ghost" size="sm">
            <Trophy className="h-4 w-4" />
            <span className="ml-2 hidden md:inline">Leaderboard</span>
          </Button>

          <Button variant="ghost" size="icon" className="relative">
            <Bell className="h-4 w-4" />
            <Badge className="absolute -top-1 -right-1 h-2 w-2 rounded-full p-0 bg-learning-streak" />
          </Button>

          <Button variant="ghost" size="icon">
            <Settings className="h-4 w-4" />
          </Button>

          {/* User Avatar */}
          <Avatar className="h-8 w-8">
            <AvatarImage src="/placeholder.svg" alt="User" />
            <AvatarFallback className="bg-gradient-primary text-primary-foreground text-xs">
              JD
            </AvatarFallback>
          </Avatar>
        </nav>
      </div>
    </header>
  );
}