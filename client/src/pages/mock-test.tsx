import { MOCK_TESTS } from "@/lib/dummy-data";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, HelpCircle, Users, Play } from "lucide-react";

export default function MockTests() {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Mock Tests</h1>
          <p className="text-muted-foreground">Simulate the real exam experience.</p>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {MOCK_TESTS.map((test) => (
          <Card key={test.id} className="flex flex-col">
            <CardHeader>
              <div className="flex gap-2 mb-2">
                {test.tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>
              <CardTitle className="line-clamp-2">{test.title}</CardTitle>
              <CardDescription>Based on latest AP DSC Pattern</CardDescription>
            </CardHeader>
            <CardContent className="flex-1 space-y-4">
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center text-muted-foreground">
                  <HelpCircle className="mr-2 h-4 w-4" />
                  {test.questions} Questions
                </div>
                <div className="flex items-center text-muted-foreground">
                  <Clock className="mr-2 h-4 w-4" />
                  {test.duration} Mins
                </div>
              </div>
              <div className="flex items-center text-sm text-muted-foreground">
                <Users className="mr-2 h-4 w-4" />
                {test.attempts.toLocaleString()} Students attempted
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full">
                <Play className="mr-2 h-4 w-4" /> Start Test
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
