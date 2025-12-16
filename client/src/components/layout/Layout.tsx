import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { 
  LayoutDashboard, 
  BookOpen, 
  PenTool, 
  FileText, 
  BarChart2, 
  Settings, 
  LogOut,
  Menu
} from "lucide-react";
import { useAuth } from "@/lib/supabase-auth";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const NAVIGATION = [
  { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { name: "Subjects", href: "/subjects", icon: BookOpen },
  { name: "Practice", href: "/practice", icon: PenTool },
  { name: "Mock Tests", href: "/mock-test", icon: FileText },
  { name: "Progress", href: "/progress", icon: BarChart2 },
  { name: "Settings", href: "/settings", icon: Settings },
];

export function Sidebar() {
  const [location] = useLocation();
  const { signOut, user } = useAuth();

  const NavContent = () => (
    <div className="flex flex-col h-full bg-sidebar text-sidebar-foreground border-r border-sidebar-border">
      <div className="p-6 border-b border-sidebar-border">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-indigo-600 bg-clip-text text-transparent">
          AP DSC Prep
        </h1>
        <p className="text-xs text-muted-foreground mt-1">AI-Powered Learning</p>
        {user?.user_metadata?.name && (
          <p className="text-xs text-muted-foreground mt-2">Welcome, {user.user_metadata.name}</p>
        )}
      </div>

      <div className="flex-1 py-6 px-4 space-y-1">
        {NAVIGATION.map((item) => {
          const isActive = location === item.href;
          return (
            <Link key={item.name} href={item.href}>
              <div
                className={cn(
                  "flex items-center gap-3 px-4 py-3 rounded-md text-sm font-medium transition-colors cursor-pointer",
                  isActive
                    ? "bg-primary/10 text-primary"
                    : "text-muted-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                )}
              >
                <item.icon className="h-5 w-5" />
                {item.name}
              </div>
            </Link>
          );
        })}
      </div>

      <div className="p-4 border-t border-sidebar-border">
        <Button 
          variant="ghost" 
          className="w-full justify-start text-destructive hover:text-destructive hover:bg-destructive/10"
          onClick={() => signOut()}
        >
          <LogOut className="mr-2 h-4 w-4" />
          Sign Out
        </Button>
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop Sidebar */}
      <div className="hidden md:flex w-64 flex-col fixed inset-y-0 z-50">
        <NavContent />
      </div>

      {/* Mobile Sidebar */}
      <div className="md:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="fixed top-4 left-4 z-50 md:hidden">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="p-0 w-64 border-r border-sidebar-border">
            <NavContent />
          </SheetContent>
        </Sheet>
      </div>
    </>
  );
}

export function Layout({ children }: { children: React.ReactNode }) {
  const { user, isLoading } = useAuth();
  const [location] = useLocation();

  if (isLoading) return null;

  // Layout for authenticated routes
  if (user) {
    return (
      <div className="min-h-screen bg-background">
        <Sidebar />
        <main className="md:pl-64 min-h-screen">
          <div className="container mx-auto p-4 md:p-8 pt-16 md:pt-8 max-w-7xl">
            {children}
          </div>
        </main>
      </div>
    );
  }

  // Layout for public routes (Landing, Auth)
  return (
    <div className="min-h-screen flex flex-col bg-background">
      {location !== "/auth" && (
        <header className="sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur-md">
          <div className="container flex h-16 items-center justify-between">
            <div className="flex items-center gap-2 font-bold text-xl text-primary">
              <BookOpen className="h-6 w-6" />
              <span>AP DSC Prep</span>
            </div>
            <nav className="flex gap-4">
              <Link href="/auth">
                <Button variant="ghost">Log In</Button>
              </Link>
              <Link href="/auth">
                <Button>Get Started</Button>
              </Link>
            </nav>
          </div>
        </header>
      )}
      <main className="flex-1">{children}</main>
    </div>
  );
}
