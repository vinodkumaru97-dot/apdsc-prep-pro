import { useState } from "react";
import { SAMPLE_QUESTIONS } from "@/lib/dummy-data";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { AlertCircle, CheckCircle2, XCircle, ArrowRight, RefreshCcw } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export default function Practice() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [score, setScore] = useState(0);

  const currentQuestion = SAMPLE_QUESTIONS[currentQuestionIndex];
  const isCorrect = selectedOption === currentQuestion?.correctAnswer;

  const handleNext = () => {
    setSelectedOption(null);
    setShowExplanation(false);
    if (currentQuestionIndex < SAMPLE_QUESTIONS.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
    }
  };

  const handleSubmit = () => {
    setShowExplanation(true);
    if (selectedOption === currentQuestion.correctAnswer) {
      setScore((prev) => prev + 1);
    }
  };

  if (!currentQuestion) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[50vh] space-y-4">
        <h2 className="text-2xl font-bold">Practice Session Complete!</h2>
        <p className="text-muted-foreground">You scored {score} out of {SAMPLE_QUESTIONS.length}</p>
        <Button onClick={() => {
          setCurrentQuestionIndex(0);
          setScore(0);
          setSelectedOption(null);
          setShowExplanation(false);
        }}>
          <RefreshCcw className="mr-2 h-4 w-4" /> Restart Practice
        </Button>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Daily Practice</h1>
          <p className="text-muted-foreground">Question {currentQuestionIndex + 1} of {SAMPLE_QUESTIONS.length}</p>
        </div>
        <div className="text-2xl font-mono font-bold text-primary">
          {String(currentQuestionIndex + 1).padStart(2, '0')}/{String(SAMPLE_QUESTIONS.length).padStart(2, '0')}
        </div>
      </div>

      <Card className="border-2 shadow-lg">
        <CardHeader className="space-y-4">
          <div className="space-y-2">
            <CardTitle className="text-xl leading-relaxed">{currentQuestion.question}</CardTitle>
            <p className="text-lg text-muted-foreground font-medium leading-relaxed font-telugu">
              {currentQuestion.questionTe}
            </p>
          </div>
        </CardHeader>
        <CardContent>
          <RadioGroup 
            value={selectedOption || ""} 
            onValueChange={setSelectedOption} 
            className="space-y-4"
            disabled={showExplanation}
          >
            {currentQuestion.options.map((option) => (
              <div 
                key={option.id} 
                className={`flex items-start space-x-3 rounded-lg border p-4 cursor-pointer transition-colors ${
                  showExplanation 
                    ? option.id === currentQuestion.correctAnswer 
                      ? "bg-green-50 border-green-200 dark:bg-green-900/20 dark:border-green-900"
                      : option.id === selectedOption 
                        ? "bg-red-50 border-red-200 dark:bg-red-900/20 dark:border-red-900"
                        : ""
                    : selectedOption === option.id 
                      ? "border-primary bg-primary/5" 
                      : "hover:bg-secondary/50"
                }`}
                onClick={() => !showExplanation && setSelectedOption(option.id)}
              >
                <RadioGroupItem value={option.id} id={option.id} className="mt-1" />
                <div className="space-y-1 w-full cursor-pointer">
                  <Label htmlFor={option.id} className="text-base font-medium cursor-pointer block">
                    {option.text}
                  </Label>
                  <p className="text-sm text-muted-foreground font-telugu cursor-pointer">
                    {option.textTe}
                  </p>
                </div>
                {showExplanation && option.id === currentQuestion.correctAnswer && (
                  <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0" />
                )}
                {showExplanation && option.id === selectedOption && option.id !== currentQuestion.correctAnswer && (
                  <XCircle className="h-5 w-5 text-red-600 flex-shrink-0" />
                )}
              </div>
            ))}
          </RadioGroup>

          {showExplanation && (
            <Alert className={`mt-6 ${isCorrect ? "bg-green-50 border-green-200 dark:bg-green-900/10" : "bg-blue-50 border-blue-200 dark:bg-blue-900/10"}`}>
              <AlertCircle className="h-4 w-4" />
              <AlertTitle>Explanation</AlertTitle>
              <AlertDescription className="mt-2 space-y-2">
                <p>{currentQuestion.explanation}</p>
                <p className="font-telugu text-muted-foreground">{currentQuestion.explanationTe}</p>
              </AlertDescription>
            </Alert>
          )}
        </CardContent>
        <CardFooter className="flex justify-end pt-6">
          {!showExplanation ? (
            <Button size="lg" onClick={handleSubmit} disabled={!selectedOption}>
              Check Answer
            </Button>
          ) : (
            <Button size="lg" onClick={handleNext}>
              Next Question <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          )}
        </CardFooter>
      </Card>
    </div>
  );
}
