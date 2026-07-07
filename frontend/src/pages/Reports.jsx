import { useState } from 'react';

export default function Reports() {
  const [role, setRole] = useState('manager'); // Switch to 'technician' to see personal log histories
  const [filterType, setFilterType] = useState('All');

  // Mock historical log matrix matching team documentation guidelines[cite: 1]
  const historicalReports = [
    { id: "REP-301", asset: "Excavator Delta-4", type: "Hydraulic", cost: "$4,200", downtime: "4.5 hrs", accuracy: "94%", date: "2026-06-12", tech: "Saifullah" },
    { id: "REP-302", asset: "CNC Router Prime", type: "Spindle", cost: "$1,850", downtime: "2.0 hrs", accuracy: "89%", date: "2026-06-28", tech: "Kimberly" },
    { id: "REP-303", asset: "Generator Module 2", type: "Electrical", cost: "$950", downtime: "1.2 hrs", accuracy: "91%", date: "2026-07-02", tech: "Saifullah" },
  ];

  const filteredReports = filterType === 'All' 
    ? historicalReports 
    : historicalReports.filter(r => r.type === filterType);

  const handleExport = (format) => {
    alert(`Exporting document index data stream as ${format.toUpperCase()}...`);
  };

  return (
    <div className="min-h-screen bg-[#f3f4f6] flex text-gray-800 font-sans">
      
      {/* Sidebar Navigation Placeholder Space */}
      <aside className="w-64 bg-[#141414] text-white p-5 shrink-0 hidden lg:block">
        <span className="font-black text-sm tracking-tight text-white block mb-4">repAIr ichiban</span>
        <p className="text-[10px] text-gray-500 uppercase font-bold tracking-wider">Analytics Intelligence</p>
        
        {/* Internal Profile Sandbox Switcher */}
        <div className="mt-8 bg-[#0d0d0d] p-3 rounded-md border border-neutral-800 text-center">
          <span className="text-[9px] uppercase font-bold text-neutral-500 block mb-2">Toggle Reports Context</span>
          <div className="grid grid-cols-2 gap-1 text-[10px]">
            <button onClick={() => setRole('manager')} className={`py-1 rounded font-bold ${role === 'manager' ? 'bg-red-600 text-white' : 'text-neutral-400 bg-neutral-900'}`}>Manager</button>
            <button onClick={() => setRole('technician')} className={`py-1 rounded font-bold ${role === 'technician' ? 'bg-red-600 text-white' : 'text-neutral-400 bg-neutral-900'}`}>Tech</button>
          </div>
        </div>
      </aside>

      {/* Main Historical Analytics Dashboard */}
      <main className="flex-1 p-6 space-y-6 overflow-y-auto">
        
        {/* Header Strip */}
        <div className="border-b pb-4 border-gray-200 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-xl font-black text-gray-900 uppercase">System Data Center</h1>
            <p className="text-xs text-gray-500">Review historical maintenance logs, AI accuracy margins, and asset downtime records[cite: 1].</p>
          </div>
          
          {/* Export Action Controls based on designated role permissions[cite: 1] */}
          <div className="flex items-center space-x-2">
            {role === 'manager' ? (
              <>
                <button onClick={() => handleExport('pdf')} className="bg-neutral-900 hover:bg-neutral-800 text-white text-[10px] uppercase tracking-wider font-bold px-3 py-2 rounded shadow-sm transition-colors">Export PDF[cite: 1]</button>
                <button onClick={() => handleExport('csv')} className="bg-red-600 hover:bg-red-700 text-white text-[10px] uppercase tracking-wider font-bold px-3 py-2 rounded shadow-sm transition-colors">Export CSV[cite: 1]</button>
              </>
            ) : (
              <button onClick={() => handleExport('service report')} className="bg-neutral-900 hover:bg-neutral-800 text-white text-[10px] uppercase tracking-wider font-bold px-4 py-2 rounded shadow-sm transition-colors">Export Service Report[cite: 1]</button>
            )}
          </div>
        </div>

        {/* ========================================================================= */}
        {/* A. PREDICTION ACCURACY & COST ANALYTICS DISPLAY PANELS (Manager Context)[cite: 1] */}
        {/* ========================================================================= */}
        {role === 'manager' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Prediction Accuracy Progress Arc Card[cite: 1] */}
            <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm text-center">
              <span className="text-[10px] uppercase font-bold text-gray-400 tracking-wider block mb-2">AI Prediction Accuracy[cite: 1]</span>
              <div className="w-20 h-20 rounded-full border-4 border-emerald-500 border-t-transparent mx-auto flex items-center justify-center mb-1">
                <span className="text-lg font-black text-gray-900">91.3%</span>
              </div>
              <p className="text-[11px] text-gray-400 font-medium">Tracking variance stability across active node arrays[cite: 1].</p>
            </div>

            {/* Cost Analysis Card[cite: 1] */}
            <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm flex flex-col justify-between">
              <div>
                <span className="text-[10px] uppercase font-bold text-gray-400 tracking-wider block">Financial Cost Analysis[cite: 1]</span>
                <h3 className="text-2xl font-black text-gray-900 mt-1">$7,000 <span className="text-xs text-gray-400 font-bold">YTD Total</span></h3>
              </div>
              <div className="w-full bg-gray-100 h-2 rounded overflow-hidden mt-4">
                <div className="bg-neutral-900 h-full w-[65%]"></div>
              </div>
            </div>

            {/* Downtime Analysis Card[cite: 1] */}
            <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm flex flex-col justify-between">
              <div>
                <span className="text-[10px] uppercase font-bold text-gray-400 tracking-wider block">Downtime Mitigation Analysis[cite: 1]</span>
                <h3 className="text-2xl font-black text-red-600 mt-1">7.7 Hours</h3>
              </div>
              <p className="text-[11px] text-gray-400 font-medium">Aggregated micro-outages resolved prior to asset breakdown threshold limits[cite: 1].</p>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* B. HISTORICAL LOGS WORKSPACE TABLE INTERFACE WITH FILTERS[cite: 1] */}
        {/* ========================================================================= */}
        <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
          
          {/* Filter Header Strip Area[cite: 1] */}
          <div className="p-4 bg-neutral-50 border-b flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <span className="font-black text-xs uppercase tracking-wider text-gray-500">
              {role === 'manager' ? 'Global Fleet Maintenance Ledger' : 'Personal Operational History Log'}[cite: 1]
            </span>
            
            {/* Filter Toggle Dropdown[cite: 1] */}
            <div className="flex items-center space-x-2 text-xs font-semibold">
              <span className="text-gray-400">Filter Classification:[cite: 1]</span>
              <select 
                value={filterType} 
                onChange={(e) => setFilterType(e.target.value)}
                className="bg-white border rounded p-1 font-bold text-gray-700 focus:outline-none focus:border-red-600"
              >
                <option value="All">All Classifications</option>
                <option value="Hydraulic">Hydraulic Systems</option>
                <option value="Spindle">Spindle Mechanisms</option>
                <option value="Electrical">Electrical Grids</option>
              </select>
            </div>
          </div>

          {/* Core Structured Data Grid Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="bg-gray-50 text-gray-400 uppercase text-[10px] tracking-wider font-bold border-b">
                  <th className="p-4">Report ID</th>
                  <th className="p-4">Machine Asset</th>
                  <th className="p-4">Classification</th>
                  {role === 'manager' && <th className="p-4">Operational Cost</th>}
                  <th className="p-4">Net Downtime</th>
                  {role === 'manager' && <th className="p-4">AI Accuracy</th>}
                  <th className="p-4">Resolution Date</th>
                  <th className="p-4">Specialist</th>
                </tr>
              </thead>
              <tbody className="divide-y font-medium text-gray-700">
                {filteredReports.map((report) => (
                  <tr key={report.id} className="hover:bg-neutral-50/50 transition-colors">
                    <td className="p-4 font-mono font-bold text-neutral-400">[{report.id}]</td>
                    <td className="p-4 font-bold text-gray-900">{report.asset}</td>
                    <td className="p-4">{report.type}</td>
                    {role === 'manager' && <td className="p-4 font-bold text-gray-900">{report.cost}</td>}
                    <td className="p-4 text-red-600 font-bold">{report.downtime}</td>
                    {role === 'manager' && <td className="p-4 text-emerald-600 font-bold">{report.accuracy}</td>}
                    <td className="p-4 font-mono text-gray-400">{report.date}</td>
                    <td className="p-4 underline text-gray-900">{report.tech}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </main>
    </div>
  );
}