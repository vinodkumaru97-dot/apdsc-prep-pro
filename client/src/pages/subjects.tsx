import { SUBJECTS } from "@/lib/dummy-data";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, ChevronRight, PlayCircle } from "lucide-react";
import * as Icons from "lucide-react";

export default function Subjects() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">My Subjects</h1>
        <p className="text-muted-foreground">Access study materials, video lessons, and notes.</p>
      </div>

      <div className="grid gap-6">
        {SUBJECTS.map((subject) => {
          const IconComponent = (Icons as any)[subject.icon] || BookOpen;
          
          return (
            <Card key={subject.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="flex flex-col md:flex-row">
                {/* Subject Header (Left) */}
                <div className={`p-6 md:w-1/3 flex flex-col justify-center ${subject.color} bg-opacity-10`}>
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`p-3 rounded-xl bg-white shadow-sm`}>
                      <IconComponent className={`h-8 w-8 ${subject.color.split(" ")[1]}`} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">{subject.title}</h3>
                      <p className="text-sm font-medium opacity-80">{subject.titleTe}</p>
                    </div>
                  </div>
                  <div className="flex gap-2 mt-2">
                    <Button size="sm" className="w-full">
                      <BookOpen className="mr-2 h-4 w-4" /> Study Now
                    </Button>
                  </div>
                </div>

                {/* Topics List (Right) */}
                <div className="p-6 md:w-2/3 border-l">
                  <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-muted-foreground">Chapters / Topics</h4>
                  <div className="grid md:grid-cols-2 gap-3">
                    {subject.topics.map((topic) => (
                      <div 
                        key={topic.id} 
                        className="group flex items-center justify-between p-3 rounded-lg border hover:bg-secondary/50 cursor-pointer transition-colors"
                      >
                        <div className="space-y-1">
                          <p className="font-medium text-sm group-hover:text-primary transition-colors">{topic.title}</p>
                          <p className="text-xs text-muted-foreground">{topic.titleTe}</p>
                        </div>
                        <PlayCircle className="h-4 w-4 text-muted-foreground group-hover:text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
