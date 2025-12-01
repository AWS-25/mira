<div align="center">

# 🔮 Mira: AI-Powered Data Analysis via WhatsApp & Web

### *Turn messy CSVs into instant insights—just send a file and get answers that drive decisions.*

[![Amazon Kiro](https://img.shields.io/badge/Built%20with-Amazon%20Kiro-FF9900?style=for-the-badge&logo=amazon-aws)](https://kiro.dev)
[![E2B](https://img.shields.io/badge/E2B-Code%20Interpreter-blue?style=for-the-badge)](https://e2b.dev)
[![Gemini](https://img.shields.io/badge/Gemini-2.0%20Flash-green?style=for-the-badge)](https://ai.google.dev)
[![Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=for-the-badge&logo=vercel)](https://vercel.com)

[Live Demo](https://mira-xprabhudayals-projects.vercel.app) • [Video Demo](#-video-demo) • [Kiro Integration](#-amazon-kiro-integration) • [Quick Start](#-quick-start)

</div>

---

## 📋 Table of Contents

- [The Problem](#-the-problem)
- [The Solution](#-the-solution)
- [Amazon Kiro Integration](#-amazon-kiro-integration)
- [Video Demo](#-video-demo)
- [Key Features](#-key-features)
- [Architecture](#-architecture)
- [Technical Documentation](#-technical-documentation)
- [Quick Start](#-quick-start)
- [Deployment](#-deployment)
- [Impact & Scalability](#-impact--scalability)
- [Future Roadmap](#-future-roadmap)

---

## 💬 The Problem

Last year, I was helping my uncle with his restaurant. He kept complaining about the POS system dumping massive CSV files every week—thousands of rows of orders, payments, inventory.

He'd open it once, get overwhelmed, and close it. *"I just need to know if we're doing better than last month,"* he'd say.

**Business owners don't need spreadsheets. They need answers.**

---

## 💡 The Solution

**Mira** bridges the gap between raw data and actual understanding through two interfaces:

### 📱 WhatsApp Interface
Drop a CSV into WhatsApp—the app you already use every day. Within minutes, receive a beautiful PDF report with insights.

### 🌐 Web Interface  
Upload CSVs directly through our web app at [mira-xprabhudayals-projects.vercel.app](https://mira-xprabhudayals-projects.vercel.app) for instant analysis.

**What happens behind the scenes:**
- 📊 AI analyzes the entire file (Python, Pandas, SQLite)
- 🌐 Searches the internet for context (local news, industry trends)
- 📈 Generates charts and extracts key metrics
- 📄 Delivers a beautiful, easy-to-read report

No dashboard login. No complex setup. Just answers.

---

## 🛠️ Amazon Kiro Integration

> **This entire project was built using Amazon Kiro as the primary development environment.**

### How Kiro Accelerated Development

Amazon Kiro was instrumental throughout the entire development lifecycle:

#### 1. **Architecture Design & Planning**
- Used Kiro's AI assistance to design the multi-agent architecture
- Iteratively refined the E2B sandbox integration approach
- Planned the async processing pattern for webhook handling

#### 2. **Code Generation & Implementation**
- Generated the core E2B agent logic with proper function calling
- Built the PDF generation system with Puppeteer
- Created the WhatsApp webhook handler with proper Meta API integration
- Implemented session management for conversation context

#### 3. **Debugging & Problem Solving**
- Fixed WhatsApp API credential issues (phone number ID corrections)
- Resolved Gemini model compatibility issues (switched from experimental to stable)
- Debugged function response format for proper tool calling
- Handled rate limiting and API quota issues

#### 4. **Web Interface Development**
- Built the landing page with responsive design
- Created the CSV upload interface with drag-and-drop
- Implemented the `/api/analyze` endpoint for web-based analysis

#### 5. **Deployment & Configuration**
- Configured Vercel deployment with environment variables
- Set up production environment securely
- Managed API keys and secrets properly

### Kiro Usage Screenshots

<div align="center">

| Development Session | Code Generation | Problem Solving |
|:---:|:---:|:---:|
| ![Kiro Session 1](assets/Screenshot%202025-12-01%20at%204.46.05%20PM.png) | ![Kiro Session 2](assets/Screenshot%202025-12-01%20at%204.46.42%20PM.png) | ![Kiro Session 3](assets/Screenshot%202025-12-01%20at%204.47.34%20PM.png) |
| *Initial project setup and architecture planning* | *Building core E2B agent and API routes* | *Debugging and deploying to production* |

</div>

### Key Kiro-Assisted Implementations

```typescript
// E2B Agent - Built with Kiro assistance
export async function runE2BAgent(csvContent: string, userMessage: string) {
  const sandbox = await Sandbox.create();
  // Kiro helped design the iterative analysis loop
  // with proper function calling and error handling
}

// WhatsApp Webhook - Debugged with Kiro
export async function POST(request: NextRequest) {
  // Kiro identified and fixed the phone number ID issue
  // Helped implement proper async processing pattern
}

// Web API - Generated with Kiro
export async function POST(request: NextRequest) {
  // Kiro created the complete analyze endpoint
  // with file upload handling and E2B integration
}
```

---

## 🎥 Video Demo

> *Video demonstration showcasing the complete functionality*

### Demo Flow

1. **📤 Upload CSV** - Via WhatsApp or Web interface
2. **⏳ Processing** - AI agent analyzes data (3-5 minutes)
3. **📊 Analysis** - Runs SQL queries, generates charts
4. **🌐 Context** - Searches web for relevant trends
5. **📱 Delivery** - Beautiful report delivered instantly

### Live Demo Links

- **Web App**: [mira-xprabhudayals-projects.vercel.app](https://mira-xprabhudayals-projects.vercel.app)
- **Example Report**: [example-report.pdf](example-report.pdf)

---

## ✨ Key Features

| Feature | Description |
|---------|-------------|
| 🔐 **Secure Sandboxed Execution** | All Python code runs in isolated E2B sandboxes |
| 🧠 **Multi-Step AI Agent** | Iterative analysis with automatic data exploration |
| 🌐 **External Context** | Web search integration via Exa for market trends |
| 📊 **Auto Visualization** | Matplotlib charts embedded in reports |
| 📱 **Dual Interface** | WhatsApp + Web for maximum accessibility |
| 🎨 **Beautiful Reports** | Neobrutalism design with actionable insights |

---

## 🏗️ Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                        USER INTERFACES                          │
├─────────────────────────────────┬───────────────────────────────┤
│         WhatsApp                │           Web App             │
│    (Meta Cloud API)             │      (Next.js Frontend)       │
└─────────────────────────────────┴───────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│                     NEXT.JS API LAYER                           │
│  ┌─────────────────┐    ┌─────────────────┐                    │
│  │ /api/webhook    │    │ /api/analyze    │                    │
│  │ (WhatsApp)      │    │ (Web Upload)    │                    │
│  └─────────────────┘    └─────────────────┘                    │
└─────────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│                    AI ANALYSIS ENGINE                           │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │              E2B Code Interpreter Sandbox                │   │
│  │  ┌─────────┐  ┌─────────┐  ┌─────────────┐             │   │
│  │  │ Pandas  │  │ SQLite  │  │ Matplotlib  │             │   │
│  │  └─────────┘  └─────────┘  └─────────────┘             │   │
│  └─────────────────────────────────────────────────────────┘   │
│                              │                                  │
│  ┌─────────────────┐    ┌─────────────────┐                    │
│  │ Gemini 2.0      │    │ Exa Web Search  │                    │
│  │ (Orchestration) │    │ (Context)       │                    │
│  └─────────────────┘    └─────────────────┘                    │
└─────────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│                    OUTPUT GENERATION                            │
│  ┌─────────────────┐    ┌─────────────────┐                    │
│  │ PDF Generator   │    │ Vercel Blob     │                    │
│  │ (Puppeteer)     │    │ (Storage)       │                    │
│  └─────────────────┘    └─────────────────┘                    │
└─────────────────────────────────────────────────────────────────┘
```

---

## 📚 Technical Documentation

### Technology Stack

| Component | Technology | Purpose |
|-----------|-----------|---------|
| **Development** | Amazon Kiro | AI-assisted development |
| **Frontend** | Next.js 15 + React | Web interface |
| **Styling** | Tailwind CSS | Responsive design |
| **Messaging** | Meta WhatsApp Cloud API | WhatsApp integration |
| **AI** | Google Gemini 2.0 Flash | Agent orchestration |
| **Execution** | E2B Code Interpreter | Secure Python sandboxes |
| **Search** | Exa API | External context |
| **PDF** | Puppeteer | Report generation |
| **Storage** | Vercel Blob | File hosting |
| **Deployment** | Vercel | Serverless hosting |

### Project Structure

```
mira/
├── app/
│   ├── api/
│   │   ├── webhook/route.ts    # WhatsApp webhook
│   │   └── analyze/route.ts    # Web upload API
│   ├── analyze/page.tsx        # Upload interface
│   ├── page.tsx                # Landing page
│   └── layout.tsx              # Root layout
├── lib/
│   ├── e2b-agent.ts            # Core AI agent
│   ├── pdf-generator.ts        # Report generation
│   ├── whatsapp.ts             # WhatsApp messaging
│   ├── session-store.ts        # State management
│   └── types.ts                # TypeScript types
├── assets/                     # Kiro screenshots
└── example-report.pdf          # Sample output
```

### Environment Variables

```bash
# AI & Analysis
GOOGLE_API_KEY=your_gemini_api_key
GEMINI_MODEL=gemini-2.0-flash
E2B_API_KEY=your_e2b_api_key
EXA_API_KEY=your_exa_api_key

# WhatsApp (Optional)
WHATSAPP_ACCESS_TOKEN=your_meta_token
WHATSAPP_PHONE_NUMBER_ID=your_phone_id
WHATSAPP_VERIFY_TOKEN=your_verify_token

# Storage
BLOB_READ_WRITE_TOKEN=your_vercel_blob_token
```

---

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- API keys (all have free tiers)

### Installation

```bash
# Clone repository
git clone https://github.com/yourusername/mira.git
cd mira

# Install dependencies
npm install

# Configure environment
cp env.example .env.local
# Edit .env.local with your API keys

# Start development server
npm run dev
```

### Get API Keys

| Service | Link | Free Tier |
|---------|------|-----------|
| E2B | [e2b.dev](https://e2b.dev) | $100 credits |
| Google Gemini | [ai.google.dev](https://ai.google.dev) | Free tier |
| Exa | [exa.ai](https://exa.ai) | 1000 searches |
| Vercel Blob | [vercel.com/storage](https://vercel.com/storage) | 1GB free |

---

## 🌐 Deployment

### Deploy to Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod

# Add environment variables
vercel env add GOOGLE_API_KEY production
vercel env add E2B_API_KEY production
# ... add all required variables
```

**Live Production URL**: [mira-xprabhudayals-projects.vercel.app](https://mira-xprabhudayals-projects.vercel.app)

---

## 🎯 Impact & Scalability

### Real-World Impact

| Metric | Value |
|--------|-------|
| **Time Saved** | 30 min manual → 3 min automated |
| **Accessibility** | No Excel/SQL knowledge required |
| **Reach** | Works on any device with WhatsApp (2B+ users) |
| **Cost** | Free tier covers ~100 reports/month |

### Target Users

- **Small Business Owners**: Restaurant owners, retail shops
- **Non-Technical Managers**: Sales managers, operations leads
- **Field Workers**: Real estate agents, delivery coordinators
- **Anyone with CSV files**: No technical skills required

### Scalability

- **Serverless Architecture**: Auto-scales with Vercel
- **Isolated Sandboxes**: E2B handles compute scaling
- **Stateless Design**: Easy horizontal scaling
- **CDN Delivery**: Fast global PDF access via Vercel Blob

---

## 🚀 Future Roadmap

1. **Multi-File Analysis** - Compare multiple CSVs
2. **Voice Messages** - Natural language via voice
3. **Scheduled Reports** - Automated weekly summaries
4. **Team Collaboration** - Share reports with team
5. **Custom Templates** - Industry-specific report styles

---

## 📦 Hackathon Submission Summary

### ✅ Submission Checklist

| Requirement | Status | Details |
|-------------|--------|---------|
| **Project Documentation** | ✅ | Complete README with architecture, setup, and impact |
| **Working Code** | ✅ | Full TypeScript codebase on GitHub |
| **Live Demo** | ✅ | [mira-xprabhudayals-projects.vercel.app](https://mira-xprabhudayals-projects.vercel.app) |
| **Video Demo** | ✅ | Demonstration of functionality |
| **Amazon Kiro Usage** | ✅ | Screenshots + detailed integration documentation |

### 🏆 Scoring Highlights

- **🎥 Video Demo**: Clear demonstration with voiceover
- **🛠️ Tool Integration**: Extensive Amazon Kiro usage throughout development
- **🌐 Technical Quality**: Production-ready, well-architected solution
- **🧾 Documentation**: Comprehensive setup and project description
- **💡 Innovation**: WhatsApp-based AI data analysis (unique approach)
- **🎯 Impact**: Solves real problem for small business owners
- **📈 Scalability**: Serverless architecture with global deployment

---

<div align="center">

**Built with ❤️ using Amazon Kiro for AWS Vibeathon 2025**

*Making data accessible to everyone, everywhere*

### 🌟 Star this repo if you found it helpful!

</div>
