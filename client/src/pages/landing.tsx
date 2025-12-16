import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight, CheckCircle2, Trophy, Brain, Target, BookOpen } from "lucide-react";
// @ts-ignore
import heroImage from "@assets/generated_images/ap_dsc_exam_prep_hero_image.png";

export default function Landing() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 space-y-8">
              <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary/10 text-primary hover:bg-primary/20">
                New: 2025 Syllabus Updated
              </div>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground">
                Crack AP DSC with <br />
                <span className="text-primary">AI-Powered Coaching</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-[600px]">
                Your personal digital tutor for AP DSC exams. Structured learning, 
                adaptive practice, and real-time evaluation in Telugu & English.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/auth">
                  <Button size="lg" className="text-lg px-8 h-12">
                    Start Learning Now <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Button variant="outline" size="lg" className="text-lg px-8 h-12">
                  View Syllabus
                </Button>
              </div>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="h-8 w-8 rounded-full bg-slate-200 border-2 border-background flex items-center justify-center text-[10px] font-bold">
                      U{i}
                    </div>
                  ))}
                </div>
                <p>Trusted by 10,000+ aspirants</p>
              </div>
            </div>
            
            <div className="flex-1 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border bg-card p-2 aspect-[4/3] rotate-2 hover:rotate-0 transition-transform duration-500">
                <img 
                  src={heroImage} 
                  alt="AP DSC Learning Platform" 
                  className="w-full h-full object-cover rounded-xl"
                />
                
                {/* Floating Badge */}
                <div className="absolute -bottom-6 -left-6 bg-card p-4 rounded-xl shadow-lg border animate-bounce-slow">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                      <Trophy className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">Highest Success Rate</p>
                      <p className="text-lg font-bold">85% Qualified</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Background Decorative Elements */}
              <div className="absolute -z-10 top-0 right-0 w-72 h-72 bg-primary/20 rounded-full blur-3xl opacity-50" />
              <div className="absolute -z-10 bottom-0 left-0 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl opacity-50" />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-secondary/30">
        <div className="container px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Everything you need to succeed</h2>
            <p className="text-muted-foreground text-lg">
              We cover every aspect of the AP DSC exam pattern with precision and depth.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Brain,
                title: "AI Learning Assistant",
                desc: "Personalized study plans that adapt to your weak areas and learning speed."
              },
              {
                icon: BookOpen,
                title: "Bilingual Content",
                desc: "Study in Telugu or English with instant translation toggle for all concepts."
              },
              {
                icon: Target,
                title: "Mock Tests & Analysis",
                desc: "Real exam simulation with state-level ranking and detailed performance breakdown."
              }
            ].map((feature, i) => (
              <div key={i} className="bg-card p-8 rounded-xl border shadow-sm hover:shadow-md transition-shadow">
                <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-6">
                  <feature.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Syllabus Coverage */}
      <section className="py-24">
        <div className="container px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Complete Syllabus Coverage</h2>
              <div className="space-y-4">
                {[
                  "General Knowledge & Current Affairs",
                  "Perspectives in Education",
                  "Classroom Implications of Educational Psychology",
                  "Content & Methodology (Maths, Science, Social)",
                  "Tri-Language Formula Implementation"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-lg">{item}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <Link href="/auth">
                  <Button size="lg" variant="secondary">Check Full Syllabus</Button>
                </Link>
              </div>
            </div>
            <div className="bg-gradient-to-br from-primary/5 to-blue-500/5 p-8 rounded-2xl border">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-card p-6 rounded-xl shadow-sm">
                  <div className="text-4xl font-bold text-primary mb-1">10k+</div>
                  <div className="text-sm text-muted-foreground">Practice Questions</div>
                </div>
                <div className="bg-card p-6 rounded-xl shadow-sm">
                  <div className="text-4xl font-bold text-primary mb-1">500+</div>
                  <div className="text-sm text-muted-foreground">Video Lessons</div>
                </div>
                <div className="bg-card p-6 rounded-xl shadow-sm">
                  <div className="text-4xl font-bold text-primary mb-1">50+</div>
                  <div className="text-sm text-muted-foreground">Full Mock Tests</div>
                </div>
                <div className="bg-card p-6 rounded-xl shadow-sm">
                  <div className="text-4xl font-bold text-primary mb-1">24/7</div>
                  <div className="text-sm text-muted-foreground">Doubt Resolution</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
