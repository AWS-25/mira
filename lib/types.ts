export interface Message {
  role: 'user' | 'assistant';
  content: string;
}

export interface E2BAgentInput {
  csvBuffer: Buffer;
  userMessage: string;
  conversationHistory: Message[];
}

export interface E2BAgentOutput {
  summary: string;
  charts: Buffer[];  // Array of chart image buffers from matplotlib
  externalContext?: string;
  structuredReport?: ReportData;
  insights: any;     // Raw insights from agent
}

export interface ReportChart {
  title: string;
  bullets: string[];
}

export interface ReportData {
  summary: string;
  kpis: string[];
  charts: ReportChart[];
  externalContext?: string[];
  nextSteps?: string[];
  additionalDetails?: string[];
}
