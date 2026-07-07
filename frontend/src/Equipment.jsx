import { useState } from 'react';

export default function Equipment() {
  const [activeTelemetry, setActiveTelemetry] = useState(null);
  const [activeSchedule, setActiveSchedule] = useState(null);

  const fleetItems = [
    { id: "EQ-701", name: "Excavator Delta-4", status: "Critical", health: 42, risk: "High", issue: "Hydraulic Temp Critical" },
    { id: "EQ-702", name: "CNC Router Prime", status: "Warning", health: 78, risk: "Medium", issue: "Spindle Runout Variance" },
    { id: "EQ-703", name: "Conveyor Belt System C", status: "Healthy", health: 96, risk: "Low", issue: "None" },
  ];

  return (
    <div className="min-h-screen bg-[#f3f4f6] flex text-gray-800 font-sans">
      <div className="w-64 bg-[#141414] text-white shrink-0 hidden lg:block p-5">
        <span className="font-black text-sm tracking-tight text-white block mb-4">repAIr ichiban</span>
        <p className="text-[10px] text-gray-500 uppercase font-bold">Equipment Suite Active</p>
      </div>

      <main className="flex-1 p-6 space-y-6 overflow-y-auto">
        <div className="flex justify-between items-center border-b pb-4 border-gray-200">
          <div>
            <h1 className="text-xl font-black text-gray-900 uppercase">Fleet Asset Inventory</h1>
            <p className="text-xs text-gray-500">Review AI analysis, inspection details, and maintenance schedules[cite: 1].</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {fleetItems.map((item) => (
            <div key={item.id} className="bg-white rounded-lg border border-gray-200 shadow-sm p-5 flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start">
                  <span className="font-mono text-[10px] font-bold text-gray-400">[{item.id}]</span>
                  <span className={`px-2 py-0.5 rounded text-[9px] font-black uppercase ${
                    item.status === 'Critical' ? 'bg-red-100 text-red-700' :
                    item.status === 'Warning' ? 'bg-amber-100 text-amber-700' : 'bg-emerald-100 text-emerald-700'
                  }`}>
                    {item.status}
                  </span>
                </div>
                <h3 className="text-base font-black text-gray-900 mt-2">{item.name}</h3>
                
                <div className="grid grid-cols-2 gap-2 my-4 border-t border-b py-2 border-gray-100 text-xs">
                  <div>
                    <span className="text-gray-400 block text-[10px] uppercase font-bold">Health Score[cite: 1]</span>
                    <strong className={`text-sm ${item.health < 50 ? 'text-red-600' : 'text-gray-900'}`}>{item.health}%</strong>
                  </div>
                  <div>
                    <span className="text-gray-400 block text-[10px] uppercase font-bold">Failure Risk[cite: 1]</span>
                    <strong className="text-sm text-gray-900">{item.risk}</strong>
                  </div>
                </div>

                <div className="bg-neutral-50 p-2.5 rounded text-xs border border-gray-100 mb-4">
                  <span className="text-[9px] text-red-500 font-bold uppercase tracking-wider block">AI Root Cause Analysis[cite: 1]</span>
                  <p className="text-gray-600 font-medium mt-0.5">{item.issue === 'None' ? 'No anomalies detected.' : item.issue}</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2 pt-2">
                <button 
                  onClick={() => setActiveTelemetry(item)}
                  className="bg-neutral-900 hover:bg-neutral-800 text-white font-bold py-2 rounded text-[11px] uppercase tracking-wider transition-all"
                >
                  Inspect Telemetry[cite: 1]
                </button>
                <button 
                  onClick={() => setActiveSchedule(item)}
                  className="border border-gray-300 hover:border-gray-900 text-gray-700 font-bold py-2 rounded text-[11px] uppercase tracking-wider transition-all"
                >
                  Schedule Unit[cite: 1]
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Telemetry Popup Modal[cite: 1] */}
        {activeTelemetry && (
          <div className="fixed inset-0 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-lg max-w-md w-full border border-gray-200 shadow-2xl overflow-hidden">
              <div className="bg-neutral-900 text-white p-4 flex justify-between items-center">
                <h4 className="font-black text-xs uppercase tracking-widest">Live Sensor Diagnostics[cite: 1]</h4>
                <button onClick={() => setActiveTelemetry(null)} className="text-gray-400 hover:text-white font-bold">✕</button>
              </div>
              <div className="p-5 space-y-4 text-xs">
                <p className="text-gray-500 font-medium">Telemetry data matrix for: <strong className="text-gray-900">{activeTelemetry.name}</strong></p>
                <div className="grid grid-cols-2 gap-3 font-mono">
                  <div className="bg-gray-50 p-3 border rounded">
                    <span className="text-[9px] text-gray-400 block uppercase font-sans font-bold">Pressure</span>
                    <span className="text-sm font-bold text-gray-800">142.4 PSI</span>
                  </div>
                  <div className="bg-gray-50 p-3 border rounded">
                    <span className="text-[9px] text-gray-400 block uppercase font-sans font-bold">Temperature</span>
                    <span className="text-sm font-bold text-red-600">94.8 °C</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Schedule Maintenance Popup Modal[cite: 1] */}
        {activeSchedule && (
          <div className="fixed inset-0 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-lg max-w-sm w-full border border-gray-200 shadow-2xl overflow-hidden">
              <div className="bg-red-600 text-white p-4 flex justify-between items-center">
                <h4 className="font-black text-xs uppercase tracking-widest">Deploy Maintenance Order[cite: 1]</h4>
                <button onClick={() => setActiveSchedule(null)} className="text-white font-bold">✕</button>
              </div>
              <div className="p-5 space-y-4 text-xs">
                <p className="text-gray-600 leading-relaxed font-medium">Confirm schedule deployment for this machine asset node[cite: 1].</p>
                <button 
                  onClick={() => setActiveSchedule(null)}
                  className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-2.5 rounded uppercase tracking-wider text-[11px]"
                >
                  Approve & Dispatch[cite: 1]
                </button>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}