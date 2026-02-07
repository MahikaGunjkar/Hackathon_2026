import React, { useState } from 'react';
import { 
  Upload, FileText, AlertCircle, CheckCircle, AlertTriangle, 
  TrendingUp, Activity, DollarSign, Leaf, BarChart3, 
  FileSearch, Settings, Home, Menu, X, Download,
  Clock, Shield, Database, Zap, Globe, Building2, Sparkles
} from 'lucide-react';

const GreenLedgerDashboard = () => {
  const [activeScreen, setActiveScreen] = useState('dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(true);

  // CMU Scotty Logo Component - using base64 embedded image
  const ScottyLogo = ({ className = "w-full h-full" }) => (
    <img 
      src="data:image/png;base64,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" 
      alt="CMU Scotty" 
      className={className}
    />
  );

  // Mock data
  const auditItems = [
    {
      id: 1,
      claim: "100% Carbon Neutral Logistics",
      evidence: "PDF Page 12, Paragraph 2",
      financialData: "Diesel Fuel Spend: $847,320 (Merchant: TruckStop Inc.)",
      discrepancyScore: 85,
      status: "red",
      recommendation: "Investigate Merchant #882 - High diesel expenditure contradicts carbon neutrality claim"
    },
    {
      id: 2,
      claim: "50% Renewable Energy Usage",
      evidence: "PDF Page 8, Section 3.1",
      financialData: "Energy Bills: 48% from Green Energy Co-op",
      discrepancyScore: 12,
      status: "yellow",
      recommendation: "Request updated renewable energy certificates for Q4 2025"
    },
    {
      id: 3,
      claim: "Zero Waste Manufacturing by 2025",
      evidence: "PDF Page 15, Executive Summary",
      financialData: "Waste Management Spend: $12,400 (down 94% YoY)",
      discrepancyScore: 6,
      status: "green",
      recommendation: "Claim verified - Continue monitoring waste management vendors"
    },
    {
      id: 4,
      claim: "100% Sustainable Packaging Materials",
      evidence: "PDF Page 19, Supply Chain Section",
      financialData: "Plastic Film Purchases: $156,000 (Merchant: PackPro LLC)",
      discrepancyScore: 72,
      status: "red",
      recommendation: "Flag for review - Significant plastic packaging purchases detected"
    },
    {
      id: 5,
      claim: "Water Usage Reduced 40%",
      evidence: "PDF Page 11, Environmental Metrics",
      financialData: "Water Utility Bills: Down 38% vs. 2024 baseline",
      discrepancyScore: 5,
      status: "green",
      recommendation: "Claim substantiated - Minor variance within acceptable tolerance"
    }
  ];

  const extractionFeed = [
    { time: "14:32:18", text: "Extracting claim: '100% Carbon Neutral Logistics'", page: 12 },
    { time: "14:32:22", text: "Cross-referencing with financial transactions...", page: null },
    { time: "14:32:26", text: "Found 847 diesel fuel transactions totaling $847,320", page: null },
    { time: "14:32:29", text: "Discrepancy detected - Flagging for review", page: null },
    { time: "14:32:31", text: "Extracting claim: '50% Renewable Energy Usage'", page: 8 }
  ];

  const recentAudits = [
    { company: "TechCorp Inc.", date: "2026-02-05", score: 73, status: "completed" },
    { company: "Green Manufacturing Co.", date: "2026-02-04", score: 89, status: "completed" },
    { company: "Sustainable Logistics LLC", date: "2026-02-03", score: 45, status: "flagged" },
    { company: "EcoFriendly Products", date: "2026-02-01", score: 92, status: "completed" }
  ];

  const getStatusColor = (status) => {
    switch(status) {
      case 'green': return 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30';
      case 'yellow': return 'bg-amber-500/20 text-amber-400 border-amber-500/30';
      case 'red': return 'bg-red-500/20 text-red-400 border-red-500/30';
      default: return 'bg-slate-500/20 text-slate-400 border-slate-500/30';
    }
  };

  const getStatusIcon = (status) => {
    switch(status) {
      case 'green': return <CheckCircle className="w-5 h-5" />;
      case 'yellow': return <AlertTriangle className="w-5 h-5" />;
      case 'red': return <AlertCircle className="w-5 h-5" />;
      default: return <Activity className="w-5 h-5" />;
    }
  };

  const navItems = [
    { id: 'dashboard', icon: Home, label: 'Dashboard' },
    { id: 'audit', icon: FileSearch, label: 'Audit Workspace' },
    { id: 'verification', icon: Shield, label: 'Verification Matrix' },
    { id: 'reports', icon: BarChart3, label: 'Reports & Analytics' },
    { id: 'settings', icon: Settings, label: 'Settings' }
  ];

  // Dashboard Screen - MOSAIC STYLE
  const DashboardScreen = () => (
    <div className="space-y-6">
      {/* Hero Mosaic Section */}
      <div className="grid grid-cols-12 gap-4 auto-rows-fr">
        {/* Large Health Score Card */}
        <div className="col-span-12 md:col-span-5 row-span-2 bg-gradient-to-br from-emerald-900/40 via-emerald-800/30 to-emerald-900/40 backdrop-blur border-2 border-emerald-500/30 rounded-2xl p-8 relative overflow-hidden transform hover:scale-[1.02] transition-all shadow-xl shadow-emerald-500/10">
          <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-40 h-40 bg-emerald-600/10 rounded-full blur-3xl"></div>
          <div className="relative z-10">
            <div className="flex items-center justify-between mb-6">
              <div className="bg-emerald-500/20 p-4 rounded-2xl border border-emerald-400/30">
                <TrendingUp className="w-10 h-10 text-emerald-400" />
              </div>
              <span className="text-emerald-400 text-2xl font-bold">+12%</span>
            </div>
            <p className="text-emerald-300/80 text-sm uppercase tracking-wider mb-3 font-bold">Sustainability Health Score</p>
            <div className="flex items-baseline gap-3 mb-4">
              <span className="text-7xl font-black text-white">73</span>
              <span className="text-4xl text-emerald-400/60">/100</span>
            </div>
            <div className="bg-slate-900/50 rounded-full h-3 mb-4">
              <div className="bg-gradient-to-r from-emerald-500 to-emerald-400 h-3 rounded-full" style={{width: '73%'}}></div>
            </div>
            <p className="text-emerald-300/60 text-xs">Based on verified claims vs. financial evidence</p>
          </div>
        </div>

        {/* Confidence Score */}
        <div className="col-span-6 md:col-span-3 bg-gradient-to-br from-blue-900/40 to-blue-800/30 backdrop-blur border-2 border-blue-500/30 rounded-2xl p-6 relative overflow-hidden transform hover:scale-[1.02] transition-all shadow-lg shadow-blue-500/10">
          <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/10 rounded-full blur-2xl"></div>
          <div className="relative z-10">
            <div className="bg-blue-500/20 p-3 rounded-xl border border-blue-400/30 inline-block mb-4">
              <Activity className="w-6 h-6 text-blue-400" />
            </div>
            <p className="text-blue-300/80 text-xs uppercase tracking-wider mb-2 font-bold">Audit Confidence</p>
            <p className="text-5xl font-black text-white mb-1">91<span className="text-2xl text-blue-400">%</span></p>
            <p className="text-blue-300/60 text-xs">High Quality</p>
          </div>
        </div>

        {/* Total Audits */}
        <div className="col-span-6 md:col-span-4 bg-gradient-to-br from-purple-900/40 to-purple-800/30 backdrop-blur border-2 border-purple-500/30 rounded-2xl p-6 relative overflow-hidden transform hover:scale-[1.02] transition-all shadow-lg shadow-purple-500/10">
          <div className="absolute bottom-0 left-0 w-28 h-28 bg-purple-500/10 rounded-full blur-2xl"></div>
          <div className="relative z-10">
            <div className="bg-purple-500/20 p-3 rounded-xl border border-purple-400/30 inline-block mb-4">
              <Database className="w-6 h-6 text-purple-400" />
            </div>
            <p className="text-purple-300/80 text-xs uppercase tracking-wider mb-2 font-bold">Total Audits</p>
            <div className="flex items-baseline gap-2">
              <p className="text-5xl font-black text-white">156</p>
              <span className="text-purple-400 text-sm font-bold">+24 this month</span>
            </div>
          </div>
        </div>

        {/* Discrepancies Alert */}
        <div className="col-span-6 md:col-span-3 bg-gradient-to-br from-red-900/40 to-red-800/30 backdrop-blur border-2 border-red-500/30 rounded-2xl p-6 relative overflow-hidden transform hover:scale-[1.02] transition-all shadow-lg shadow-red-500/10">
          <div className="absolute top-0 right-0 w-20 h-20 bg-red-500/10 rounded-full blur-2xl"></div>
          <div className="relative z-10">
            <div className="bg-red-500/20 p-3 rounded-xl border border-red-400/30 inline-block mb-4">
              <AlertCircle className="w-6 h-6 text-red-400" />
            </div>
            <p className="text-red-300/80 text-xs uppercase tracking-wider mb-2 font-bold">Active Issues</p>
            <p className="text-5xl font-black text-white">12</p>
            <p className="text-red-300/60 text-xs mt-1">Need review</p>
          </div>
        </div>

        {/* CMU Scotty Logo Card */}
        <div className="col-span-6 md:col-span-4 bg-gradient-to-br from-red-900/30 via-slate-800/40 to-slate-900/50 backdrop-blur border-2 border-red-700/40 rounded-2xl p-6 relative overflow-hidden transform hover:scale-[1.02] transition-all shadow-lg shadow-red-700/10">
          <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-transparent"></div>
          <div className="relative z-10 flex flex-col items-center justify-center h-full">
            <div className="w-28 h-28 mb-3">
              <ScottyLogo />
            </div>
            <p className="text-red-400 font-black text-sm tracking-wider">TARTANHACKS 2026</p>
            <p className="text-slate-400 text-xs mt-1">Carnegie Mellon University</p>
          </div>
        </div>
      </div>

      {/* Mosaic Chart Section */}
      <div className="grid grid-cols-12 gap-4">
        {/* Verification Trends - Wider */}
        <div className="col-span-12 lg:col-span-7 bg-slate-800/50 backdrop-blur border-2 border-slate-700/50 rounded-2xl p-6 transform hover:scale-[1.01] transition-all shadow-xl">
          <h3 className="text-lg font-black text-white mb-6 flex items-center gap-2">
            <BarChart3 className="w-5 h-5 text-emerald-400" />
            Verification Trends
            <Sparkles className="w-4 h-4 text-yellow-400 ml-auto" />
          </h3>
          <div className="space-y-5">
            {['Carbon Emissions', 'Energy Usage', 'Waste Management', 'Water Conservation'].map((category, idx) => (
              <div key={idx} className="bg-slate-900/50 rounded-xl p-4 border border-slate-700/50">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-slate-300 text-sm font-bold">{category}</span>
                  <span className="text-emerald-400 text-lg font-black">{90 - idx * 10}%</span>
                </div>
                <div className="bg-slate-700/50 rounded-full h-3 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-transparent"></div>
                  <div 
                    className="bg-gradient-to-r from-emerald-600 via-emerald-500 to-emerald-400 h-3 rounded-full transition-all relative overflow-hidden"
                    style={{ width: `${90 - idx * 10}%` }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Risk Distribution - Compact */}
        <div className="col-span-12 lg:col-span-5 bg-slate-800/50 backdrop-blur border-2 border-slate-700/50 rounded-2xl p-6 transform hover:scale-[1.01] transition-all shadow-xl">
          <h3 className="text-lg font-black text-white mb-6 flex items-center gap-2">
            <Shield className="w-5 h-5 text-blue-400" />
            Risk Distribution
          </h3>
          <div className="flex items-center justify-center mb-6">
            <div className="relative">
              <svg className="w-40 h-40 transform -rotate-90">
                <circle cx="80" cy="80" r="70" fill="none" stroke="#1e293b" strokeWidth="20"/>
                <circle cx="80" cy="80" r="70" fill="none" stroke="#10b981" strokeWidth="20" strokeDasharray="264 440" strokeLinecap="round"/>
                <circle cx="80" cy="80" r="70" fill="none" stroke="#f59e0b" strokeWidth="20" strokeDasharray="110 440" strokeDashoffset="-264" strokeLinecap="round"/>
                <circle cx="80" cy="80" r="70" fill="none" stroke="#ef4444" strokeWidth="20" strokeDasharray="66 440" strokeDashoffset="-374" strokeLinecap="round"/>
              </svg>
              <div className="absolute inset-0 flex items-center justify-center flex-col">
                <p className="text-4xl font-black text-white">60%</p>
                <p className="text-slate-400 text-xs font-bold">Low Risk</p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-3">
            <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-xl p-3 text-center">
              <div className="w-4 h-4 rounded-full bg-emerald-500 mx-auto mb-2 shadow-lg shadow-emerald-500/50"></div>
              <p className="text-slate-300 text-xs font-bold">Low</p>
              <p className="text-emerald-400 font-black">60%</p>
            </div>
            <div className="bg-amber-500/10 border border-amber-500/30 rounded-xl p-3 text-center">
              <div className="w-4 h-4 rounded-full bg-amber-500 mx-auto mb-2 shadow-lg shadow-amber-500/50"></div>
              <p className="text-slate-300 text-xs font-bold">Med</p>
              <p className="text-amber-400 font-black">25%</p>
            </div>
            <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-3 text-center">
              <div className="w-4 h-4 rounded-full bg-red-500 mx-auto mb-2 shadow-lg shadow-red-500/50"></div>
              <p className="text-slate-300 text-xs font-bold">High</p>
              <p className="text-red-400 font-black">15%</p>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Audits - Full Width Mosaic */}
      <div className="bg-slate-800/50 backdrop-blur border-2 border-slate-700/50 rounded-2xl overflow-hidden shadow-xl">
        <div className="px-6 py-5 border-b border-slate-700 bg-slate-900/50">
          <h3 className="text-lg font-black text-white flex items-center gap-2">
            <Clock className="w-5 h-5 text-emerald-400" />
            Recent Audits
          </h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
          {recentAudits.map((audit, idx) => (
            <div key={idx} className="bg-slate-900/50 border-2 border-slate-700/50 rounded-xl p-5 hover:border-emerald-500/50 transition-all cursor-pointer transform hover:scale-105 shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-gradient-to-br from-emerald-600 to-emerald-700 p-3 rounded-lg">
                  <Building2 className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1">
                  <p className="text-white font-bold text-sm">{audit.company}</p>
                  <p className="text-slate-500 text-xs">{audit.date}</p>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-slate-400 text-xs">Score</span>
                  <span className="text-white font-black text-xl">{audit.score}</span>
                </div>
                <span className={`block w-full px-3 py-2 rounded-lg text-xs font-bold text-center ${
                  audit.status === 'completed' ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30' : 'bg-red-500/20 text-red-400 border border-red-500/30'
                }`}>
                  {audit.status === 'completed' ? '✓ Completed' : '⚠ Flagged'}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  // Audit Workspace Screen - MOSAIC STYLE
  const AuditWorkspaceScreen = () => (
    <div className="grid grid-cols-12 gap-4">
      {/* Upload Section - Large */}
      <div className="col-span-12 lg:col-span-8 bg-slate-800/50 backdrop-blur border-2 border-slate-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="text-xl font-black text-white mb-6 flex items-center gap-2">
          <Upload className="w-6 h-6 text-emerald-400" />
          Document Upload
        </h2>
        
        <div className="border-2 border-dashed border-slate-600 rounded-2xl p-16 text-center hover:border-emerald-500 hover:bg-emerald-500/5 transition-all cursor-pointer bg-slate-900/30 relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <div className="relative z-10">
            <FileText className="w-20 h-20 text-slate-500 group-hover:text-emerald-500 mx-auto mb-4 transition-colors" />
            <p className="text-slate-300 font-bold text-lg mb-2">Drop Sustainability Report PDF here</p>
            <p className="text-slate-500 text-sm mb-6">or click to browse files</p>
            <button className="px-8 py-3 bg-gradient-to-r from-emerald-600 to-emerald-500 text-white rounded-xl hover:from-emerald-700 hover:to-emerald-600 transition-all font-bold shadow-lg shadow-emerald-500/20">
              Select File
            </button>
          </div>
        </div>

        {/* Extraction Feed */}
        <div className="mt-6">
          <h3 className="text-sm font-black text-slate-400 uppercase tracking-wider mb-3 flex items-center gap-2">
            <Zap className="w-4 h-4 text-yellow-400" />
            Live Extraction Feed
          </h3>
          <div className="bg-slate-950/80 rounded-xl p-5 font-mono text-xs space-y-2 max-h-64 overflow-y-auto border-2 border-slate-800 shadow-inner">
            {extractionFeed.map((item, idx) => (
              <div key={idx} className="text-emerald-400 flex items-start gap-2">
                <span className="text-slate-600 shrink-0">[{item.time}]</span>
                <span className="flex-1">{item.text}</span>
                {item.page && <span className="text-slate-600 shrink-0">(Page {item.page})</span>}
              </div>
            ))}
            <div className="text-emerald-400 animate-pulse">▊</div>
          </div>
        </div>
      </div>

      {/* Processing Stats - Sidebar Mosaic */}
      <div className="col-span-12 lg:col-span-4 space-y-4">
        <div className="bg-gradient-to-br from-blue-900/40 to-blue-800/30 backdrop-blur border-2 border-blue-500/30 rounded-2xl p-6 shadow-lg transform hover:scale-105 transition-all">
          <div className="flex items-center justify-between mb-4">
            <FileText className="w-10 h-10 text-blue-400" />
            <span className="bg-blue-500/20 text-blue-400 text-xs font-bold px-3 py-1 rounded-full border border-blue-500/30">Active</span>
          </div>
          <p className="text-blue-300/80 text-xs uppercase tracking-wider mb-2 font-bold">Claims Extracted</p>
          <p className="text-5xl font-black text-white">47</p>
        </div>

        <div className="bg-gradient-to-br from-purple-900/40 to-purple-800/30 backdrop-blur border-2 border-purple-500/30 rounded-2xl p-6 shadow-lg transform hover:scale-105 transition-all">
          <div className="flex items-center justify-between mb-4">
            <Database className="w-10 h-10 text-purple-400" />
            <span className="bg-purple-500/20 text-purple-400 text-xs font-bold px-3 py-1 rounded-full border border-purple-500/30">Processing</span>
          </div>
          <p className="text-purple-300/80 text-xs uppercase tracking-wider mb-2 font-bold">Financial Records</p>
          <p className="text-5xl font-black text-white">1,247</p>
        </div>

        <div className="bg-gradient-to-br from-emerald-900/40 to-emerald-800/30 backdrop-blur border-2 border-emerald-500/30 rounded-2xl p-6 shadow-lg transform hover:scale-105 transition-all">
          <div className="flex items-center justify-between mb-4">
            <Shield className="w-10 h-10 text-emerald-400" />
            <span className="bg-emerald-500/20 text-emerald-400 text-xs font-bold px-3 py-1 rounded-full border border-emerald-500/30">Complete</span>
          </div>
          <p className="text-emerald-300/80 text-xs uppercase tracking-wider mb-2 font-bold">Verifications</p>
          <p className="text-5xl font-black text-white">42</p>
        </div>

        {/* CMU Branding */}
        <div className="bg-gradient-to-br from-red-900/30 via-slate-800/40 to-slate-900/50 backdrop-blur border-2 border-red-700/40 rounded-2xl p-6 shadow-lg">
          <div className="flex flex-col items-center justify-center text-center">
            <div className="w-20 h-20 mb-3">
              <ScottyLogo />
            </div>
            <p className="text-red-400 font-black text-xs tracking-widest">POWERED BY</p>
            <p className="text-white font-black text-sm">CMU INNOVATION</p>
          </div>
        </div>
      </div>
    </div>
  );

  // Verification Matrix Screen - MOSAIC CARDS
  const VerificationMatrixScreen = () => (
    <div className="space-y-4">
      <div className="bg-slate-800/50 backdrop-blur border-2 border-slate-700/50 rounded-2xl p-6 shadow-xl">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-black text-white flex items-center gap-2">
              <Shield className="w-6 h-6 text-emerald-400" />
              Verification Matrix
            </h2>
            <p className="text-slate-400 text-sm mt-1">Claims vs. Financial Evidence Analysis</p>
          </div>
          <div className="w-14 h-14">
            <ScottyLogo />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {auditItems.map((item) => (
          <div key={item.id} className="bg-slate-800/50 backdrop-blur border-2 border-slate-700/50 rounded-2xl p-6 hover:border-emerald-500/50 transition-all transform hover:scale-[1.01] shadow-lg">
            <div className="flex items-start justify-between mb-5">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <span className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-black border-2 ${getStatusColor(item.status)} shadow-lg`}>
                    {getStatusIcon(item.status)}
                    {item.status === 'green' ? 'VERIFIED' : item.status === 'yellow' ? 'REVIEW' : 'DISCREPANCY'}
                  </span>
                  <div className="bg-slate-900/50 px-4 py-2 rounded-xl border border-slate-700">
                    <span className="text-xs text-slate-400 font-bold">Risk Score: </span>
                    <span className={`text-lg font-black ${
                      item.discrepancyScore > 50 ? 'text-red-400' : item.discrepancyScore > 20 ? 'text-amber-400' : 'text-emerald-400'
                    }`}>{item.discrepancyScore}%</span>
                  </div>
                </div>
                <h3 className="text-xl font-black text-white mb-4">{item.claim}</h3>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div className="bg-slate-900/50 rounded-xl p-5 border-2 border-slate-700/50 hover:border-blue-500/30 transition-all">
                <p className="text-slate-400 font-black mb-3 flex items-center gap-2 text-xs uppercase tracking-wider">
                  <FileText className="w-4 h-4 text-blue-400" />
                  Evidence Found
                </p>
                <p className="text-slate-200 font-medium">{item.evidence}</p>
              </div>
              <div className="bg-slate-900/50 rounded-xl p-5 border-2 border-slate-700/50 hover:border-emerald-500/30 transition-all">
                <p className="text-slate-400 font-black mb-3 flex items-center gap-2 text-xs uppercase tracking-wider">
                  <DollarSign className="w-4 h-4 text-emerald-400" />
                  Financial Reality
                </p>
                <p className="text-slate-200 font-medium">{item.financialData}</p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-slate-900/70 to-slate-900/50 rounded-xl p-5 border-2 border-slate-700/50">
              <p className="text-slate-400 text-xs font-black mb-2 uppercase tracking-wider flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-yellow-400" />
                AI Recommendation
              </p>
              <p className="text-white font-medium">{item.recommendation}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  // Reports Screen - MOSAIC GRID
  const ReportsScreen = () => (
    <div className="grid grid-cols-12 gap-4">
      <div className="col-span-12">
        <div className="bg-slate-800/50 backdrop-blur border-2 border-slate-700/50 rounded-2xl p-6 shadow-xl mb-4">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-black text-white flex items-center gap-2">
              <BarChart3 className="w-6 h-6 text-emerald-400" />
              Reports & Analytics
            </h2>
            <div className="w-12 h-12">
              <ScottyLogo />
            </div>
          </div>
        </div>
      </div>

      {[
        { title: 'Full Audit Report', desc: 'Complete analysis with all findings and recommendations', icon: FileText, color: 'emerald', span: 'col-span-12 md:col-span-6' },
        { title: 'Executive Summary', desc: 'High-level overview for stakeholders and leadership', icon: BarChart3, color: 'blue', span: 'col-span-12 md:col-span-6' },
        { title: 'Discrepancy Report', desc: 'Detailed analysis of flagged claims and issues', icon: AlertTriangle, color: 'purple', span: 'col-span-12 md:col-span-6 lg:col-span-4' },
        { title: 'Trend Analysis', desc: 'Historical performance and improvement tracking', icon: TrendingUp, color: 'amber', span: 'col-span-12 md:col-span-6 lg:col-span-4' },
        { title: 'Compliance Export', desc: 'Regulatory-ready documentation', icon: Shield, color: 'red', span: 'col-span-12 lg:col-span-4' },
      ].map((report, idx) => (
        <div key={idx} className={`${report.span} bg-gradient-to-br from-${report.color}-900/40 to-${report.color}-800/30 backdrop-blur border-2 border-${report.color}-500/30 rounded-2xl p-6 hover:scale-105 transition-all cursor-pointer group shadow-lg`}>
          <div className="flex items-center justify-between mb-5">
            <div className={`bg-${report.color}-500/20 p-4 rounded-xl border border-${report.color}-400/30 group-hover:scale-110 transition-transform`}>
              <report.icon className={`w-8 h-8 text-${report.color}-400`} />
            </div>
            <Download className={`w-6 h-6 text-slate-500 group-hover:text-${report.color}-400 transition-colors`} />
          </div>
          <h3 className="text-white font-black text-lg mb-2">{report.title}</h3>
          <p className="text-slate-400 text-sm mb-5">{report.desc}</p>
          <button className={`w-full px-4 py-3 bg-${report.color}-600 text-white rounded-xl hover:bg-${report.color}-700 transition-colors font-bold shadow-lg`}>
            Generate Report
          </button>
        </div>
      ))}
    </div>
  );

  // Settings Screen
  const SettingsScreen = () => (
    <div className="space-y-6">
      <div className="bg-slate-800/50 backdrop-blur border-2 border-slate-700/50 rounded-2xl p-6 shadow-xl">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-black text-white flex items-center gap-2">
            <Settings className="w-6 h-6 text-emerald-400" />
            Settings
          </h2>
          <div className="w-12 h-12">
            <ScottyLogo />
          </div>
        </div>

        <div className="space-y-6">
          <div>
            <h3 className="text-white font-black mb-4 text-lg">API Configuration</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-slate-900/50 rounded-xl p-5 border-2 border-slate-700">
                <label className="text-slate-400 text-sm font-bold block mb-3 uppercase tracking-wider">Dedalus SDK API Key</label>
                <input 
                  type="password" 
                  placeholder="••••••••••••••••"
                  className="w-full bg-slate-800 border-2 border-slate-600 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 font-medium"
                />
              </div>
              <div className="bg-slate-900/50 rounded-xl p-5 border-2 border-slate-700">
                <label className="text-slate-400 text-sm font-bold block mb-3 uppercase tracking-wider">Capital One Nessie API Key</label>
                <input 
                  type="password" 
                  placeholder="••••••••••••••••"
                  className="w-full bg-slate-800 border-2 border-slate-600 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 font-medium"
                />
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-white font-black mb-4 text-lg">Audit Thresholds</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-slate-900/50 rounded-xl p-5 border-2 border-slate-700">
                <label className="text-slate-400 text-sm font-bold block mb-3 uppercase tracking-wider">Low Risk Threshold (%)</label>
                <input 
                  type="number" 
                  defaultValue="15"
                  className="w-full bg-slate-800 border-2 border-slate-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-emerald-500 font-bold text-lg"
                />
              </div>
              <div className="bg-slate-900/50 rounded-xl p-5 border-2 border-slate-700">
                <label className="text-slate-400 text-sm font-bold block mb-3 uppercase tracking-wider">High Risk Threshold (%)</label>
                <input 
                  type="number" 
                  defaultValue="50"
                  className="w-full bg-slate-800 border-2 border-slate-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-emerald-500 font-bold text-lg"
                />
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-white font-black mb-4 text-lg">Notifications</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {['High-risk discrepancies detected', 'Audit completion', 'New sustainability claims found', 'Weekly summary reports'].map((item, idx) => (
                <div key={idx} className="bg-slate-900/50 rounded-xl p-4 border-2 border-slate-700 flex items-center justify-between hover:border-emerald-500/50 transition-all">
                  <span className="text-slate-300 font-medium text-sm">{item}</span>
                  <button className="bg-emerald-600 w-14 h-7 rounded-full relative shadow-lg">
                    <div className="absolute right-1 top-1 w-5 h-5 bg-white rounded-full shadow"></div>
                  </button>
                </div>
              ))}
            </div>
          </div>

          <button className="w-full px-6 py-4 bg-gradient-to-r from-emerald-600 to-emerald-500 text-white rounded-xl hover:from-emerald-700 hover:to-emerald-600 transition-all font-black text-lg shadow-xl shadow-emerald-500/20">
            Save Settings
          </button>
        </div>
      </div>
    </div>
  );

  const renderScreen = () => {
    switch(activeScreen) {
      case 'dashboard': return <DashboardScreen />;
      case 'audit': return <AuditWorkspaceScreen />;
      case 'verification': return <VerificationMatrixScreen />;
      case 'reports': return <ReportsScreen />;
      case 'settings': return <SettingsScreen />;
      default: return <DashboardScreen />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-950">
      {/* Top Header with CMU Branding */}
      <header className="bg-slate-900/90 backdrop-blur-xl border-b-2 border-slate-800 px-6 py-4 sticky top-0 z-50 shadow-2xl">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="lg:hidden text-slate-400 hover:text-white transition-colors"
            >
              {sidebarOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
            <div className="flex items-center gap-4">
              <div className="bg-gradient-to-br from-emerald-600 to-emerald-700 p-2.5 rounded-xl shadow-lg shadow-emerald-500/30">
                <Leaf className="w-7 h-7 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-black text-white tracking-tight">The Green Ledger</h1>
                <p className="text-slate-400 text-xs font-bold">AI-Powered Sustainability Audit Platform</p>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-3 bg-slate-800/70 px-5 py-2.5 rounded-xl border-2 border-slate-700 shadow-lg">
              <div className="w-10 h-10">
                <ScottyLogo />
              </div>
              <div>
                <p className="text-red-400 text-xs font-black">TARTANHACKS 2026</p>
                <p className="text-slate-400 text-xs">CMU Project</p>
              </div>
            </div>
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center shadow-lg shadow-emerald-500/30 border-2 border-emerald-400">
              <span className="text-white font-black text-lg">TC</span>
            </div>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className={`${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 fixed lg:sticky top-16 lg:top-0 left-0 h-[calc(100vh-4rem)] lg:h-screen w-72 bg-slate-900/90 backdrop-blur-xl border-r-2 border-slate-800 transition-transform z-40 flex flex-col shadow-2xl`}>
          <nav className="flex-1 p-4 space-y-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setActiveScreen(item.id);
                  if (window.innerWidth < 1024) setSidebarOpen(false);
                }}
                className={`w-full flex items-center gap-3 px-5 py-4 rounded-xl transition-all font-bold shadow-lg ${
                  activeScreen === item.id
                    ? 'bg-gradient-to-r from-emerald-600 to-emerald-500 text-white shadow-emerald-500/30 scale-105'
                    : 'text-slate-400 hover:bg-slate-800 hover:text-white hover:scale-102'
                }`}
              >
                <item.icon className="w-5 h-5" />
                <span>{item.label}</span>
              </button>
            ))}
          </nav>

          <div className="p-4 border-t-2 border-slate-800">
            <div className="bg-slate-800/70 rounded-xl p-5 border-2 border-slate-700">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-16 h-16">
                  <ScottyLogo />
                </div>
                <div>
                  <p className="text-red-400 text-xs font-black tracking-wider">POWERED BY</p>
                  <p className="text-white font-black text-sm">CMU TARTAN</p>
                </div>
              </div>
              <div className="flex items-center gap-2 pt-3 border-t border-slate-700">
                <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse shadow-lg shadow-emerald-500/50"></div>
                <span className="text-emerald-400 text-xs font-bold">All Systems Operational</span>
              </div>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-8 min-h-screen">
          <div className="max-w-7xl mx-auto">
            {renderScreen()}
          </div>
        </main>
      </div>
    </div>
  );
};

export default GreenLedgerDashboard;