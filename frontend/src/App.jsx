import React, { useState } from 'react';
import { Upload, Download, ShieldAlert, Sparkles, FileSpreadsheet, Building2, ChevronRight } from 'lucide-react';
import scotty_logo from './assets/scottylogo.jpeg';

const MosaicBackground = () => (
  <div className="fixed inset-0 -z-10 bg-[#f8fafc] overflow-hidden">
    <div style={{ position: 'absolute', top: '-10%', left: '-5%', width: '60%', height: '70%', background: 'linear-gradient(135deg, #10b981 0%, #3b82f6 100%)', clipPath: 'polygon(30% 0%, 100% 0%, 70% 100%, 0% 70%)', filter: 'blur(100px)', opacity: 0.15 }} />
    <div style={{ position: 'absolute', bottom: '-15%', right: '-10%', width: '70%', height: '60%', background: 'linear-gradient(135deg, #6366f1 0%, #a855f7 100%)', clipPath: 'polygon(10% 20%, 90% 0%, 100% 80%, 20% 100%)', filter: 'blur(120px)', opacity: 0.12 }} />
    <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(#e2e8f0 1px, transparent 1px)', backgroundSize: '40px 40px', opacity: 0.3 }} />
  </div>
);

const GreenLedgerDashboard = () => {
  const [industry, setIndustry] = useState('Technology');
  const [region, setRegion] = useState('North America');
  const [companyName, setCompanyName] = useState('');
  const [results, setResults] = useState([]);
  const [isProcessing, setIsProcessing] = useState(false);

  // --- RESTORED EXCEL TEMPLATES LOGIC ---
  const downloadTemplate = () => {
    const headers = "Metric,Current_Value,Target_Goal,Unit\n";
    const templates = {
      'Technology': {
        'European Union': `Data Center PUE (ESRS E1-1),1.5,1.2,Ratio\nE-Waste Recovery Rate (ESRS E5),45,90,%\nRenewable Energy Mix (ESRS E1-6),45,100,%\nScope 3 Emissions,4500,2000,tCO2e`,
        'North America': `Data Center Energy Usage,550,300,MWh\nScope 1 & 2 Emissions (SEC),450,300,tCO2e\nE-Waste Recycled,40,80,%\nClimate Risk Opportunity,1.2,2.5,Millions`
      },
      'Manufacturing': {
        'European Union': `Carbon Intensity (CBAM),850,400,tCO2e\nCircular Material Use (ESRS E5),15,40,%\nWater Stewardship,35,90,%\nScope 1 Direct Emissions,500,300,tCO2e`,
        'North America': `Factory Emissions,850,400,Tons\nSteel Scrap Recovery,2100,500,kg\nEnergy Intensity per Unit,12.5,10.0,kWh/Unit\nWater Discharge Compliance,100,100,%`
      }
    };

    // Get the specific data or fallback to a generic template
    const templateBody = templates[industry]?.[region] || `Sample Metric,50,100,Units`;
    const blob = new Blob([headers + templateBody], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `GreenLedger_${industry}_${region}.csv`;
    a.click();
  };

  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setIsProcessing(true);
    
    const formData = new FormData();
    formData.append('file', file);
    formData.append('industry', industry);
    formData.append('region', region);
    formData.append('companyName', companyName);

    try {
      const response = await fetch('http://127.0.0.1:5000/api/audit', { method: 'POST', body: formData });
      const data = await response.json();
      setResults(data); 
    } catch (error) {
      alert("Backend error. Is Flask running on port 5000?");
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="relative min-h-screen p-6 md:p-12 font-sans text-slate-800">
      <MosaicBackground />
      <div className="max-w-5xl mx-auto relative z-10">
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12">
          <h1 className="text-4xl font-black text-slate-900 tracking-tight flex items-center gap-3">
            {/* The Logo Container */}
                  <div className="bg-white/80 p-1.5 rounded-2xl shadow-xl shadow-emerald-100/50 border border-white backdrop-blur-sm overflow-hidden w-14 h-14 flex items-center justify-center">
                    <img 
                    src={scotty_logo} 
                    alt="GreenLedger Scotty" 
                    className="w-full h-full object-contain hover:scale-110 transition-transform duration-300"
                  />
                  </div>
            SCOTTYSCOPE <span className="text-emerald-600"></span>
          </h1>
          <div className="flex gap-3">
             <select value={industry} onChange={(e) => setIndustry(e.target.value)} className="bg-white/70 border border-slate-200 p-3 rounded-xl backdrop-blur-md shadow-sm text-sm font-bold">
               <option>Technology</option><option>Manufacturing</option>
             </select>
             <select value={region} onChange={(e) => setRegion(e.target.value)} className="bg-white/70 border border-slate-200 p-3 rounded-xl backdrop-blur-md shadow-sm text-sm font-bold">
               <option>North America</option><option>European Union</option>
             </select>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-4 space-y-4">
            <div className="bg-white/60 backdrop-blur-xl p-6 rounded-3xl border border-white/50 shadow-xl shadow-slate-200/40">
              <div className="flex items-center gap-2 mb-4 text-slate-400 font-black text-[10px] uppercase tracking-widest">
                <Building2 size={14} /> Organization
              </div>
              <input 
                type="text" 
                placeholder="Enter Company Name..." 
                className="w-full bg-white/50 border border-slate-100 p-4 rounded-2xl text-sm outline-none focus:ring-2 focus:ring-emerald-500 mb-4 transition-all"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
              />

              {/* RESTORED DOWNLOAD BUTTON */}
              <button 
                onClick={downloadTemplate} 
                className="w-full flex items-center justify-between p-4 bg-white/40 hover:bg-emerald-50 border border-slate-100 rounded-2xl transition-all group mb-4"
              >
                <div className="flex items-center gap-3">
                  <Download className="text-emerald-500" size={20} />
                  <span className="font-bold text-sm text-slate-700">Get Template</span>
                </div>
                <ChevronRight size={16} className="text-slate-300 group-hover:text-emerald-500" />
              </button>

              <label className="cursor-pointer block">
                <div className="w-full flex flex-col items-center justify-center p-10 border-2 border-dashed border-slate-200 hover:border-emerald-400 rounded-3xl bg-white/20 transition-all group">
                  <Upload className="text-slate-400 group-hover:text-emerald-500 mb-4" />
                  <p className="font-bold text-slate-500">Upload CSV</p>
                  <input type="file" className="hidden" accept=".csv" onChange={handleFileUpload} />
                </div>
              </label>
            </div>
          </div>

          <div className="lg:col-span-8">
            {isProcessing ? (
              <div className="bg-white/60 backdrop-blur-2xl rounded-3xl p-20 flex flex-col items-center justify-center border border-white">
                <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-emerald-500 mb-4"></div>
                <p className="font-mono text-emerald-600 font-bold tracking-tighter">AI AUDIT IN PROGRESS...</p>
              </div>
            ) : results.length > 0 ? (
              <div className="bg-white/60 backdrop-blur-2xl rounded-3xl border border-white shadow-2xl overflow-hidden">
                <table className="w-full text-left">
                  <thead className="bg-slate-50/50 border-b">
                    <tr>
                      <th className="p-5 text-[10px] font-black text-slate-400 uppercase tracking-widest">Metric</th>
                      <th className="p-5 text-[10px] font-black text-slate-400 uppercase tracking-widest">Risk</th>
                      <th className="p-5 text-[10px] font-black text-slate-400 uppercase tracking-widest text-center">AI Fix</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {results.map((item, idx) => (
                      <tr key={idx} className="hover:bg-white/80 transition-colors">
                        <td className="p-5">
                          <p className="font-bold text-slate-900 text-sm">{item.metric}</p>
                          <p className="text-[10px] text-slate-400 font-bold uppercase">{item.current}/{item.target} {item.unit}</p>
                        </td>
                        <td className="p-5">
                          <span className={`text-[9px] font-black px-2 py-0.5 rounded-full ${item.risk === 'High' ? 'bg-red-100 text-red-600' : 'bg-emerald-100 text-emerald-600'}`}>
                            {item.risk}
                          </span>
                        </td>
                        <td className="p-5 max-w-xs">
                          <div className="flex gap-2">
                            <Sparkles size={12} className="text-amber-400 shrink-0 mt-0.5" />
                            <p className="text-[11px] text-slate-600 italic leading-relaxed">"{item.insight}"</p>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <div className="bg-white/30 backdrop-blur-md rounded-3xl p-20 flex flex-col items-center justify-center border-2 border-dashed border-white min-h-[420px]">
                <FileSpreadsheet size={40} className="text-slate-300 mb-4" />
                <p className="text-slate-400 font-bold tracking-tight">Organization Audit Ready</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GreenLedgerDashboard;