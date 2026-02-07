import React, { useState, useEffect } from 'react';
import { 
  Upload, FileText, AlertCircle, CheckCircle, AlertTriangle, 
  TrendingUp, Activity, DollarSign, Leaf, BarChart3, 
  FileSearch, Settings, Home, Menu, X, Download,
  Clock, Shield, Database, Zap, Globe, Building2, Sparkles, ChevronDown
} from 'lucide-react';

const GreenLedgerDashboard = () => {
  const [activeScreen, setActiveScreen] = useState('dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(true);
  
  // --- NEW REGIONAL STATE ---
  const [selectedRegion, setSelectedRegion] = useState('North America');

  // Define Regional Regulatory Standards
  const regions = {
    'North America': { 
        threshold: 12, 
        standard: 'SEC Climate Rules', 
        color: 'blue', 
        multiplier: 1.0,
        desc: 'Standard Compliance'
    },
    'European Union': { 
        threshold: 5, 
        standard: 'EU CSRD Directive', 
        color: 'emerald', 
        multiplier: 1.6, // Stricter = higher discrepancy perceived
        desc: 'High Strictness'
    },
    'APAC': { 
        threshold: 18, 
        standard: 'HKEX Framework', 
        color: 'purple', 
        multiplier: 0.8,
        desc: 'Transitioning'
    }
  };

  const ScottyLogo = ({ className = "w-full h-full" }) => (
    <img 
      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAACWCAYAAAA8AXDBAAAACXBIWXMAAAsTAAALEwEAmpwYAAAA..." 
      alt="CMU Scotty" 
      className={className}
    />
  );

  // Mock data (Modified to allow dynamic calculation)
  const baseAuditItems = [
    { id: 1, claim: "100% Carbon Neutral Logistics", evidence: "PDF Page 12", financialData: "Diesel Fuel Spend: $847,320", discrepancyScore: 45, recommendation: "High diesel expenditure contradicts claim" },
    { id: 2, claim: "50% Renewable Energy Usage", evidence: "PDF Page 8", financialData: "Energy Bills: 48% Green", discrepancyScore: 8, recommendation: "Request updated certificates" },
    { id: 3, claim: "Zero Waste Manufacturing", evidence: "PDF Page 15", financialData: "Waste Spend: $12,400", discrepancyScore: 4, recommendation: "Claim verified" },
    { id: 4, claim: "Sustainable Packaging", evidence: "PDF Page 19", financialData: "Plastic Purchases: $156,000", discrepancyScore: 35, recommendation: "Significant plastic detected" }
  ];

  // --- DYNAMIC DATA CALCULATION ---
  const auditItems = baseAuditItems.map(item => {
    const config = regions[selectedRegion];
    const score = item.discrepancyScore * config.multiplier;
    let status = 'green';
    if (score > config.threshold) status = 'red';
    else if (score > config.threshold / 2) status = 'yellow';

    return { ...item, displayScore: score.toFixed(1), status };
  });

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
      case 'green': return <CheckCircle className="w-4 h-4" />;
      case 'yellow': return <AlertTriangle className="w-4 h-4" />;
      case 'red': return <AlertCircle className="w-4 h-4" />;
      default: return <Activity className="w-4 h-4" />;
    }
  };

  // --- RENDER REGION SELECTOR ---
  const RegionSelector = () => (
    <div className="flex flex-col md:flex-row md:items-center justify-between bg-slate-800/80 backdrop-blur-md p-4 rounded-2xl border border-slate-700/50 mb-6 gap-4">
        <div className="flex items-center gap-3">
            <div className={`p-2 rounded-lg bg-${regions[selectedRegion].color}-500/20 text-${regions[selectedRegion].color}-400`}>
                <Globe className="w-5 h-5" />
            </div>
            <div>
                <h2 className="text-white font-bold text-sm">Global Regulatory Engine</h2>
                <p className="text-slate-400 text-[10px] uppercase tracking-widest font-black">
                    Standard: <span className="text-emerald-400">{regions[selectedRegion].standard}</span>
                </p>
            </div>
        </div>

        <div className="flex items-center gap-3 bg-slate-900/50 p-1 rounded-xl border border-slate-700">
            {