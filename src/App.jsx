import React, { useState } from 'react';
import { Upload, Download, Globe, Factory, BarChart3, ShieldAlert, Sparkles, FileSpreadsheet, ChevronRight } from 'lucide-react';

const GreenLedgerDashboard = () => {
  const [industry, setIndustry] = useState('Technology');
  const [region, setRegion] = useState('North America');
  const [results, setResults] = useState([]);
  const [isProcessing, setIsProcessing] = useState(false);

  // 1. DYNAMIC TEMPLATE GENERATOR
  const downloadTemplate = () => {
    let headers = "Metric,Current_Value,Target_Goal,Unit\n";
    const templates = {
      'Technology': `Data Center Energy,550,300,MWh\nE-Waste Recycled,40,80,%\nServer Efficiency,92,95,%\nCarbon Offset,120,500,Tons`,
      'Manufacturing': `Steel Scraps,2100,500,kg\nFactory Emissions,850,400,Metric Tons\nWater Recycled,35,90,%\nRenewable Power,15,50,%`,
      'Fashion': `Fabric Waste,180,20,Tons\nOrganic Cotton Usage,12,65,%\nSupply Chain Carbon,450,200,kg\nDye Water Treatment,60,100,%`
    };
    const blob = new Blob([headers + templates[industry]], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `GreenLedger_${industry}_${region}_Template.csv`;
    a.click();
  };

  // 2. BROWSER-SIDE CSV PROCESSOR (The "Mock Backend")
  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setIsProcessing(true);
    const reader = new FileReader();
    
    reader.onload = (event) => {
      const text = event.target.result;
      const rows = text.split('\n').slice(1); // Skip header
      
      const analyzedData = rows.filter(row => row.trim() !== '').map(row => {
        const [metric, current, target, unit] = row.split(',');
        const currVal = parseFloat(current);
        const tarVal = parseFloat(target);

        // STRICTURE FACTORS
        const indFact = { 'Technology': 1.2, 'Manufacturing': 0.8, 'Fashion': 1.1 }[industry];
        const regFact = { 'European Union': 1.4, 'North America': 1.0, 'APAC': 0.9 }[region];

        // LOGIC: High is Good vs High is Bad
        const isHighGood = unit.includes('%') || metric.toLowerCase().includes('recycle') || metric.toLowerCase().includes('efficiency');
        
        let score = isHighGood ? (currVal / tarVal) * 100 : (tarVal / currVal) * 100;
        const finalScore = Math.min(Math.max(Math.round(score / (indFact * regFact)), 0), 100);

        // RISK CATEGORY
        let risk = "Low";
        if (finalScore < 40) risk = "High";
        else if (finalScore < 75) risk = "Medium";

        return {
          metric,
          score: finalScore,
          risk,
          current: currVal,
          target: tarVal,
          unit,
          insight: getMockAIInsight(metric, risk, region)
        };
      });

      setTimeout(() => {
        setResults(analyzedData);
        setIsProcessing(false);
      }, 1000); // Simulate processing time for effect
    };
    reader.readAsText(file);
  };

  const getMockAIInsight = (metric, risk, reg) => {
    if (risk === "High") return `Critical: ${metric} deviates significantly from ${reg} standards. Immediate optimization required.`;
    if (risk === "Medium") return `Warning: Potential regulatory gap detected. Review ${metric} reporting for 2026.`;
    return `Compliant: Current performance meets ${reg} baseline for this sector.`;
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans p-6 md:p-12">
      <div className="max-w-5xl mx-auto">
        
        {/* HEADER */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
          <div>
            <h1 className="text-4xl font-black text-white tracking-tight flex items-center gap-3">
              <div className="bg-emerald-500 p-2 rounded-lg"><ShieldAlert className="text-slate-950" /></div>
              GREENLEDGER <span className="text-emerald-500 text-lg font-mono underline decoration-2 underline-offset-8">AUDIT_v4</span>
            </h1>
            <p className="text-slate-400 mt-3 font-medium">Precision ESG Auditing & Risk Forecasting</p>
          </div>

          <div className="flex gap-3">
             <select onChange={(e) => setIndustry(e.target.value)} className="bg-slate-900 border border-slate-800 p-3 rounded-xl outline-none focus:border-emerald-500 transition-all text-sm font-bold">
               <option>Technology</option>
               <option>Manufacturing</option>
               <option>Fashion</option>
             </select>
             <select onChange={(e) => setRegion(e.target.value)} className="bg-slate-900 border border-slate-800 p-3 rounded-xl outline-none focus:border-emerald-500 transition-all text-sm font-bold">
               <option>North America</option>
               <option>European Union</option>
               <option>APAC</option>
             </select>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* LEFT: CONTROLS */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-slate-900 p-6 rounded-3xl border border-slate-800 shadow-xl">
              <h2 className="text-sm font-black text-slate-500 uppercase tracking-widest mb-6">Workflow</h2>
              
              <button onClick={downloadTemplate} className="w-full flex items-center justify-between p-4 bg-slate-800 hover:bg-slate-700 rounded-2xl transition-all group mb-4">
                <div className="flex items-center gap-3">
                  <Download className="text-emerald-500" size={20} />
                  <div className="text-left">
                    <p className="text-sm font-bold text-white">Get Template</p>
                    <p className="text-xs text-slate-400">{region} Standard</p>
                  </div>
                </div>
                <ChevronRight size={16} className="text-slate-600 group-hover:text-white transition-all" />
              </button>

              <label className="cursor-pointer block">
                <div className="w-full flex flex-col items-center justify-center p-8 border-2 border-dashed border-slate-700 hover:border-emerald-500 rounded-2xl transition-all bg-slate-950/50 group">
                  <Upload className="text-slate-500 group-hover:text-emerald-500 mb-3" />
                  <p className="text-sm font-bold text-slate-400 group-hover:text-white">Upload Scanned Data</p>
                  <input type="file" className="hidden" accept=".csv" onChange={handleFileUpload} />
                </div>
              </label>
            </div>
          </div>

          {/* RIGHT: RESULTS */}
          <div className="lg:col-span-8">
            {isProcessing ? (
              <div className="bg-slate-900 rounded-3xl p-20 flex flex-col items-center justify-center border border-slate-800">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-emerald-500 mb-4"></div>
                <p className="font-mono text-emerald-500 animate-pulse">ANALYZING REGULATORY GAP...</p>
              </div>
            ) : results.length > 0 ? (
              <div className="bg-slate-900 rounded-3xl border border-slate-800 overflow-hidden">
                <table className="w-full">
                  <thead className="bg-slate-950/50 border-b border-slate-800">
                    <tr>
                      <th className="p-5 text-left text-xs font-black text-slate-500 uppercase">Metric Analysis</th>
                      <th className="p-5 text-left text-xs font-black text-slate-500 uppercase">Risk Index</th>
                      <th className="p-5 text-left text-xs font-black text-slate-500 uppercase">Audit Intelligence</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800">
                    {results.map((item, idx) => (
                      <tr key={idx} className="hover:bg-slate-800/30 transition-colors">
                        <td className="p-5">
                          <p className="text-white font-bold">{item.metric}</p>
                          <p className="text-xs text-slate-500">{item.current} / {item.target} {item.unit}</p>
                        </td>
                        <td className="p-5">
                          <div className="flex flex-col gap-1">
                            <span className={`text-[10px] font-black uppercase ${item.risk === 'High' ? 'text-red-500' : item.risk === 'Medium' ? 'text-amber-500' : 'text-emerald-500'}`}>
                              {item.risk} Risk
                            </span>
                            <div className="w-24 h-1.5 bg-slate-800 rounded-full overflow-hidden">
                              <div className={`h-full rounded-full ${item.risk === 'High' ? 'bg-red-500' : item.risk === 'Medium' ? 'bg-amber-500' : 'bg-emerald-500'}`} style={{ width: `${item.score}%` }}></div>
                            </div>
                          </div>
                        </td>
                        <td className="p-5">
                          <div className="flex gap-2 items-start">
                            <Sparkles className="text-amber-400 shrink-0" size={14} />
                            <p className="text-xs text-slate-400 leading-relaxed italic">"{item.insight}"</p>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <div className="bg-slate-900/50 rounded-3xl p-20 flex flex-col items-center justify-center border-2 border-dashed border-slate-800">
                <FileSpreadsheet size={48} className="text-slate-800 mb-4" />
                <p className="text-slate-500 font-medium text-center max-w-xs">Download the {region} template and upload your data to begin the audit.</p>
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  );
};

export default GreenLedgerDashboard;