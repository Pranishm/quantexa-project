"use client";

import { useState, useRef, useEffect } from "react";
import { Send, Bot, User, Loader2, Sparkles, ExternalLink } from "lucide-react";
import { api } from "@/lib/api";
import Link from "next/link";
import ReactMarkdown from "react-markdown";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  structured?: {
    sourceData: string[];
    metricsUsed: string[];
    analysis: string;
    evidence: { label: string; value: string; sub: string }[];
    actionLink: { label: string; href: string };
  };
}

export default function CopilotPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      role: "assistant",
      content: "Hello. I am Quantora AI, powered by Featherless. Ask me to run quantitative analysis on any asset (e.g., 'Analyze NVDA volatility' or 'What is the BTC drawdown?').",
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const query = input.trim();
    setInput("");
    
    const userMsg: Message = { id: Date.now().toString(), role: "user", content: query };
    setMessages(prev => [...prev, userMsg]);
    setIsLoading(true);

    try {
      const res = await api.chat({ query });
      
      if (res.status === "success" && res.structured) {
        setMessages(prev => [
          ...prev, 
          {
            id: Date.now().toString() + "_bot",
            role: "assistant",
            content: res.structured.analysis,
            structured: res.structured
          }
        ]);
      } else {
        throw new Error("Invalid response format");
      }
    } catch (error) {
      setMessages(prev => [
        ...prev, 
        {
          id: Date.now().toString() + "_err",
          role: "assistant",
          content: "Sorry, I encountered an error connecting to the AI engine."
        }
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-[calc(100vh-3.5rem)] bg-[var(--bg-root)] p-4 max-w-5xl mx-auto w-full">
      <div className="flex items-center gap-2 mb-4 px-2">
        <Sparkles className="w-5 h-5 text-[var(--accent)]" />
        <h1 className="text-lg font-semibold tracking-tight text-[var(--text-primary)]">Featherless AI</h1>
        <span className="text-[10px] font-mono bg-[var(--bg-elevated)] border border-[var(--border)] px-1.5 py-0.5 rounded text-[var(--text-secondary)]">
          POWERED BY FEATHERLESS AI
        </span>
      </div>

      <div className="flex-1 overflow-y-auto mb-4 space-y-4 px-2 no-scrollbar">
        {messages.map((m) => (
          <div key={m.id} className={`flex gap-3 ${m.role === "user" ? "flex-row-reverse" : ""}`}>
            <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${
              m.role === "user" ? "bg-[var(--accent)]/10 text-[var(--accent)] border border-[var(--accent)]/20" : "bg-[var(--bg-elevated)] border border-[var(--border)] text-[var(--text-primary)]"
            }`}>
              {m.role === "user" ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
            </div>
            
            <div className={`max-w-[85%] flex flex-col gap-2 ${m.role === "user" ? "items-end" : "items-start"}`}>
              {m.role === "assistant" && m.structured && (
                <div className="flex flex-wrap gap-1 mb-1">
                  {m.structured.sourceData.map((src, i) => (
                    <span key={i} className="text-[9px] font-mono text-[var(--text-muted)] border border-[var(--border)] bg-[var(--bg-surface)] px-1.5 py-0.5 rounded">
                      {src}
                    </span>
                  ))}
                </div>
              )}
              
              <div className={`p-4 rounded-2xl text-sm ${
                m.role === "user" 
                  ? "bg-[var(--bg-elevated)] border border-[var(--border)] text-[var(--text-primary)]" 
                  : "bg-[var(--bg-surface)] border border-[var(--border)] clay-recessed-sm text-[var(--text-primary)]"
              }`}>
                {m.role === "assistant" ? (
                  <div className="prose prose-sm dark:prose-invert max-w-none text-sm text-[var(--text-primary)]">
                    <ReactMarkdown>{m.content}</ReactMarkdown>
                  </div>
                ) : (
                  m.content
                )}
              </div>

              {m.structured?.evidence && (
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 mt-1 w-full">
                  {m.structured.evidence.map((ev, i) => (
                    <div key={i} className="bg-[var(--bg-elevated)] border border-[var(--border)] p-2 rounded-lg flex flex-col">
                      <span className="text-[10px] text-[var(--text-muted)] font-sans">{ev.label}</span>
                      <span className="text-sm font-bold text-[var(--text-primary)] font-mono my-0.5">{ev.value}</span>
                      <span className="text-[9px] text-[var(--text-subtle)] font-mono">{ev.sub}</span>
                    </div>
                  ))}
                </div>
              )}

              {m.structured?.actionLink && (
                <Link 
                  href={m.structured.actionLink.href}
                  className="inline-flex items-center gap-1.5 mt-1 text-[11px] font-medium text-[var(--accent)] hover:text-[var(--accent)]/80 transition-colors bg-[var(--accent)]/10 px-3 py-1.5 rounded-full border border-[var(--accent)]/20"
                >
                  <span>{m.structured.actionLink.label}</span>
                  <ExternalLink className="w-3 h-3" />
                </Link>
              )}
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex gap-3">
            <div className="w-8 h-8 rounded-full bg-[var(--bg-elevated)] border border-[var(--border)] text-[var(--text-primary)] flex items-center justify-center shrink-0">
              <Bot className="w-4 h-4 animate-pulse" />
            </div>
            <div className="flex items-center bg-[var(--bg-surface)] border border-[var(--border)] px-4 py-3 rounded-2xl">
              <Loader2 className="w-4 h-4 animate-spin text-[var(--accent)]" />
              <span className="ml-2 text-xs text-[var(--text-muted)]">Running quant analysis...</span>
            </div>
          </div>
        )}
        <div ref={endRef} />
      </div>

      <form onSubmit={handleSubmit} className="relative mt-auto">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask Quantora AI..."
          className="w-full bg-[var(--bg-surface)] border border-[var(--border-strong)] rounded-2xl pl-4 pr-12 py-4 text-sm text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:outline-none focus:border-[var(--accent)]/50 focus:ring-1 focus:ring-[var(--accent)]/50 transition-all shadow-sm"
          disabled={isLoading}
        />
        <button
          type="submit"
          disabled={!input.trim() || isLoading}
          className="absolute right-2 top-2 bottom-2 aspect-square flex items-center justify-center bg-[var(--accent)] hover:bg-[var(--accent)]/90 text-white rounded-xl disabled:opacity-50 disabled:cursor-not-allowed transition-colors shadow-md"
        >
          <Send className="w-4 h-4 ml-0.5" />
        </button>
      </form>
    </div>
  );
}
