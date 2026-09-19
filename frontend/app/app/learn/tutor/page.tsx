"use client";

import { useState } from "react";
import { 
  Bot, 
  Send, 
  Sparkles, 
  BookOpen, 
  CheckCircle2, 
  HelpCircle, 
  Award, 
  RefreshCw,
  ArrowRight
} from "lucide-react";

interface TutorMessage {
  id: string;
  sender: "user" | "tutor";
  content: string;
  quiz?: {
    question: string;
    options: string[];
    correctAnswer: number;
    explanation: string;
  };
}

const INITIAL_TUTOR_MESSAGES: TutorMessage[] = [
  {
    id: "tut_1",
    sender: "tutor",
    content: "Welcome to the Quantora AI Academy Tutor. I specialize in teaching mathematical finance, statistical risk metrics, regime modeling, and backtest integrity. Ask me a concept or request an interactive quiz!",
    quiz: {
      question: "Why does the Sortino Ratio penalize only downside deviation rather than total variance like the Sharpe Ratio?",
      options: [
        "Because investors generally welcome upside volatility and only perceive downside variance as true financial risk.",
        "Because upside variance is computationally impossible to calculate in discrete time.",
        "Because the risk-free rate is always negative during quantitative regimes.",
        "Because Sortino ratios only apply to fixed-income assets.",
      ],
      correctAnswer: 0,
      explanation: "Correct! The Sharpe Ratio penalizes upside volatility equally with downside volatility. The Sortino Ratio uses Downside Semi-Variance (returns below a Minimum Acceptable Return, MAR) to assess risk more realistically.",
    },
  },
];

export default function AiTutorPage() {
  const [messages, setMessages] = useState<TutorMessage[]>(INITIAL_TUTOR_MESSAGES);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, number>>({});

  const handleSend = (textToSend?: string) => {
    const text = textToSend || input;
    if (!text.trim() || isTyping) return;

    const userMsg: TutorMessage = {
      id: `usr_${Date.now()}`,
      sender: "user",
      content: text,
    };

    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsTyping(true);

    setTimeout(() => {
      let content = "";
      let quiz = undefined;
      const lower = text.toLowerCase();

      if (lower.includes("look-ahead") || lower.includes("bias")) {
        content = "Look-ahead bias occurs when an algorithm uses information that was not available at the execution timestamp. For instance, executing a trade at bar t open using the closing price or high of bar t. In Quantora, we enforce bar t+1 next-period open execution to mathematically prevent look-ahead bias.";
        quiz = {
          question: "Which of the following is an example of Look-Ahead Bias?",
          options: [
            "Normalizing an indicator using future high/low data not yet realized in the backtest loop.",
            "Including a 5 basis point fee for transaction costs.",
            "Testing a strategy across both bull and bear market regimes.",
            "Delaying trade entry to bar t+1 open.",
          ],
          correctAnswer: 0,
          explanation: "Accurate! Normalizing indicators using future data leaks forward prices into historical bars, creating artificially inflated backtest performance.",
        };
      } else if (lower.includes("sharpe") || lower.includes("sortino")) {
        content = "The Sharpe Ratio calculates excess return over the risk-free rate divided by standard deviation: (R_p - R_f) / σ_p. The Sortino ratio substitutes total standard deviation with downside semi-deviation, which only measures returns that fall below your target hurdle.";
      } else {
        content = `Great question on quantitative finance! In institutional research, understanding the mathematical constraints of your hypothesis is essential before allocating capital. Would you like me to generate a practice quiz on this topic?`;
      }

      const tutorReply: TutorMessage = {
        id: `tut_${Date.now()}`,
        sender: "tutor",
        content,
        quiz,
      };

      setMessages((prev) => [...prev, tutorReply]);
      setIsTyping(false);
    }, 700);
  };

  return (
    <div className="space-y-8 max-w-4xl mx-auto pb-12">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-6">
        <div>
          <div className="flex items-center gap-2 mb-1 text-[10px] font-mono text-[#7C6CFF] uppercase tracking-widest">
            <Bot className="w-3.5 h-3.5" />
            <span>INTERACTIVE QUANTITATIVE TUTOR</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold text-white tracking-tight font-heading">
            AI Quant Tutor
          </h1>
          <p className="text-xs sm:text-sm text-[#B7BEC8] mt-1">
            Adaptive tutor for statistical formulas, backtest methodologies, and risk theory.
          </p>
        </div>

        <div className="flex items-center gap-2 text-xs font-mono text-[#35E69A] bg-[#35E69A]/10 border border-[#35E69A]/30 px-3 py-1.5 rounded-xl">
          <Award className="w-4 h-4" />
          <span>Interactive Quiz Mode Active</span>
        </div>
      </div>

      {/* Main Conversation Container */}
      <div className="rounded-3xl bg-[#080B10] border border-white/10 shadow-2xl overflow-hidden flex flex-col h-[640px]">
        {/* Messages list */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {messages.map((m) => (
            <div
              key={m.id}
              className={`flex flex-col ${m.sender === "user" ? "items-end" : "items-start"}`}
            >
              <div
                className={`max-w-[85%] rounded-3xl p-4 sm:p-5 text-xs sm:text-sm leading-relaxed ${
                  m.sender === "user"
                    ? "bg-[#7C6CFF] text-white rounded-br-none shadow-lg"
                    : "bg-[#0C1016] text-[#B7BEC8] border border-white/10 rounded-bl-none shadow-sm"
                }`}
              >
                <p>{m.content}</p>

                {/* Interactive Quiz Widget if present */}
                {m.quiz && (
                  <div className="mt-4 pt-4 border-t border-white/10 space-y-3">
                    <div className="flex items-center gap-2 text-[#F5C451] font-bold text-xs">
                      <HelpCircle className="w-4 h-4" />
                      <span>Interactive Knowledge Check</span>
                    </div>

                    <p className="text-xs sm:text-sm font-semibold text-white">
                      {m.quiz.question}
                    </p>

                    <div className="space-y-2 pt-1">
                      {m.quiz.options.map((opt, optIdx) => {
                        const isAnswered = selectedAnswers[m.id] !== undefined;
                        const isSelected = selectedAnswers[m.id] === optIdx;
                        const isCorrect = optIdx === m.quiz!.correctAnswer;

                        let btnClass = "bg-white/5 border-white/10 text-[#B7BEC8] hover:bg-white/10 hover:text-white";
                        if (isAnswered) {
                          if (isCorrect) btnClass = "bg-[#35E69A]/20 border-[#35E69A] text-[#35E69A] font-bold";
                          else if (isSelected) btnClass = "bg-[#FF5F6D]/20 border-[#FF5F6D] text-[#FF5F6D]";
                        }

                        return (
                          <button
                            key={optIdx}
                            disabled={isAnswered}
                            onClick={() => setSelectedAnswers((prev) => ({ ...prev, [m.id]: optIdx }))}
                            className={`w-full text-left p-3 rounded-xl border text-xs leading-relaxed transition-all flex items-start gap-2.5 ${btnClass}`}
                          >
                            <span className="font-mono font-bold text-[10px] uppercase shrink-0 mt-0.5">
                              {String.fromCharCode(65 + optIdx)}.
                            </span>
                            <span>{opt}</span>
                          </button>
                        );
                      })}
                    </div>

                    {selectedAnswers[m.id] !== undefined && (
                      <div className="p-3 rounded-xl bg-black/40 border border-white/10 text-xs text-[#35E69A] font-mono leading-relaxed mt-2 animate-in fade-in duration-200">
                        {m.quiz.explanation}
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}

          {isTyping && (
            <div className="flex items-center gap-2 text-xs text-[#7C6CFF] font-mono bg-[#0C1016] border border-white/10 px-3 py-2 rounded-xl w-fit">
              <RefreshCw className="w-3.5 h-3.5 animate-spin" />
              <span>AI Tutor is drafting explanation...</span>
            </div>
          )}
        </div>

        {/* Quick Question Prompts */}
        <div className="px-4 py-2 bg-[#050608] border-t border-white/5 flex gap-2 overflow-x-auto no-scrollbar">
          {[
            "Explain look-ahead bias",
            "Sharpe vs Sortino difference",
            "What is a Markov Regime model?",
            "How does slippage degrade returns?",
          ].map((q, i) => (
            <button
              key={i}
              onClick={() => handleSend(q)}
              className="text-[11px] font-mono bg-white/5 hover:bg-white/10 text-[#B7BEC8] px-3 py-1 rounded-full border border-white/10 whitespace-nowrap transition-colors"
            >
              {q}
            </button>
          ))}
        </div>

        {/* Input Bar */}
        <div className="p-4 bg-[#0C1016] border-t border-white/10 flex items-center gap-3">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
            placeholder="Ask the Quant Tutor anything or request a quiz..."
            className="flex-1 bg-[#050608] border border-white/10 focus:border-[#7C6CFF] rounded-2xl px-4 py-3 text-xs text-white placeholder-[#69727E] outline-none"
          />
          <button
            onClick={() => handleSend()}
            disabled={!input.trim() || isTyping}
            className="p-3 rounded-2xl bg-[#7C6CFF] text-white hover:bg-[#6b58ff] disabled:opacity-40 transition-colors shadow-md"
          >
            <Send className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
