import { useState } from 'react';

export default function Dashboard() {
  const [role, setRole] = useState('manager'); // Switch to 'technician' to see assigned work orders

  return (
    <div className="min-h-screen bg-[#f3f4f6] flex text-gray-800 font-sans antialiased">
      
      {/* 1. LEFT NAVIGATION SIDEBAR (Dark Profile Theme) */}
      <aside className="w-64 bg-[#141414] text-white flex flex-col shrink-0 border-r border-neutral-800 hidden lg:flex">
        {/* Sidebar Header Brand with red circle logo icon */}
        <div className="p-5 border-b border-neutral-800 flex items-center space-x-3 bg-[#0d0d0d]">
          <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center font-bold text-sm tracking-tight text-white shadow-inner">
            IR
          </div>
          <div>
            <span className="font-black tracking-tight text-sm block">repAIr ichiban</span>
            <span className="text-[9px] text-neutral-500 uppercase font-bold tracking-widest block">Core Console</span>
          </div>
        </div>
        
        {/* Navigation Items Links */}
        <nav className="flex-1 p-3 space-y-1 text-xs font-bold uppercase tracking-wider">
          {/* Active Option with Left Red Accent Bar */}
          <div className="bg-[#1f1f1f] text-white px-4 py-3 rounded-md flex items-center justify-between border-l-4 border-red-600 cursor-pointer shadow-sm">
            <span>System Dashboard</span>
            <span className="text-[10px] text-red-500">●</span>
          </div>
          <div className="text-neutral-400 hover:bg-[#1a1a1a] hover:text-white px-4 py-3 rounded-md cursor-pointer transition-colors">
            Equipment / Fleet
          </div>
          <div className="text-neutral-400 hover:bg-[#1a1a1a] hover:text-white px-4 py-3 rounded-md cursor-pointer transition-colors">
            Maintenance Queue
          </div>
          <div className="text-neutral-400 hover:bg-[#1a1a1a] hover:text-white px-4 py-3 rounded-md cursor-pointer transition-colors">
            Reports Dashboard
          </div>
        </nav>

        {/* Development Quick Switcher Sandbox Block */}
        <div className="p-4 bg-[#0d0d0d] border-t border-neutral-800 m-3 rounded-lg">
          <label className="block text-[9px] text-neutral-500 font-bold uppercase tracking-widest mb-2">Simulate Team Role View</label>
          <div className="grid grid-cols-2 gap-1.5 text-[10px]">
            <button 
              onClick={() => setRole('manager')} 
              className={`py-1.5 rounded font-black uppercase transition-all ${role === 'manager' ? 'bg-red-600 text-white shadow-md' : 'bg-neutral-800 text-neutral-400 hover:bg-neutral-700'}`}
            >
              Manager
            </button>
            <button 
              onClick={() => setRole('technician')} 
              className={`py-1.5 rounded font-black uppercase transition-all ${role === 'technician' ? 'bg-red-600 text-white shadow-md' : 'bg-neutral-800 text-neutral-400 hover:bg-neutral-700'}`}
            >
              Tech
            </button>
          </div>
        </div>
      </aside>

      {/* 2. MAIN SYSTEM PLATFORM INTERFACE */}
      <main className="flex-1 flex flex-col min-w-0">
        
        {/* Top Operational Status Header Panel */}
        <header className="bg-white h-16 border-b border-gray-200 flex items-center justify-between px-6 shadow-sm">
          <div className="flex items-center space-x-3">
            <h2 className="text-base font-black uppercase tracking-tight text-gray-900">Operational Overview</h2>
            <div className="bg-red-50 border border-red-200 text-red-600 font-bold text-[10px] px-2.5 py-0.5 rounded-full uppercase tracking-wider">
              Network Mode: <span className="underline">{role}</span>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <div className="text-right">
              <span className="text-xs font-bold text-gray-900 block">Operator Secure Node</span>
              <span className="text-[10px] text-gray-400 uppercase font-semibold block">ID: 023-SYS</span>
            </div>
            <div className="w-8 h-8 bg-[#141414] border border-neutral-800 text-white rounded-full flex items-center justify-center text-xs font-black">
              {role === 'manager' ? 'MG' : 'TC'}
            </div>
          </div>
        </header>

        {/* Modular Grid Area */}
        <div className="p-6 space-y-6 overflow-y-auto flex-1">
          
          {/* A. CRITICAL SYSTEM INTERCEPT ALERTS (Required layout panel)[cite: 1] */}
          <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
            <div className="bg-red-600 text-white px-4 py-2.5 flex items-center justify-between">
              <div className="flex items-center space-x-2 text-xs font-black uppercase tracking-widest">
                <span className="animate-ping text-white mr-1">⚠️</span>
                <span>Critical Equipment Fault Pipeline</span>
              </div>
              <span className="bg-red-700 text-[9px] font-black px-2 py-0.5 rounded uppercase">2 Active Triggers</span>
            </div>
            <div className="p-2 bg-neutral-50 divide-y divide-gray-200">
              <div className="p-3 flex justify-between items-center text-xs">
                <div>
                  <span className="font-mono text-red-600 font-bold mr-2">[ALT-102]</span>
                  <strong className="text-gray-900">Excavator Delta-4</strong> — Hydraulic fluid temperatures exceeding safe operational thresholds[cite: 1].
                </div>
                <span className="text-[10px] font-bold text-gray-400 bg-white border px-2 py-1 rounded">5m ago</span>
              </div>
              <div className="p-3 flex justify-between items-center text-xs">
                <div>
                  <span className="font-mono text-amber-600 font-bold mr-2">[ALT-105]</span>
                  <strong className="text-gray-900">CNC Router Prime</strong> — Spindle axial runout variance limits breached[cite: 1].
                </div>
                <span className="text-[10px] font-bold text-gray-400 bg-white border px-2 py-1 rounded">12m ago</span>
              </div>
            </div>
          </div>

          {/* B. CONDITIONAL FEATURE MODULES DISPLAY */}
          {role === 'manager' ? (
            /* MANAGER EXECUTIVE SUMMARY SUITE[cite: 1] */
            <div className="space-y-6">
              
              {/* Fleet Statistics KPI Block Rows[cite: 1] */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 border-l-4 border-l-neutral-900">
                  <p className="text-[10px] uppercase font-bold text-gray-400 tracking-wider">Fleet Health Score</p>
                  <h3 className="text-2xl font-black text-gray-900 mt-0.5">94.2%</h3>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 border-l-4 border-l-red-600">
                  <p className="text-[10px] uppercase font-bold text-gray-400 tracking-wider">Critical Asset Summaries</p>
                  <h3 className="text-2xl font-black text-gray-900 mt-0.5">02 Breached</h3>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 border-l-4 border-l-neutral-900">
                  <p className="text-[10px] uppercase font-bold text-gray-400 tracking-wider">Monthly Operation Overhead</p>
                  <h3 className="text-2xl font-black text-gray-900 mt-0.5">$14,250</h3>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 border-l-4 border-l-emerald-600">
                  <p className="text-[10px] uppercase font-bold text-gray-400 tracking-wider">AI Preventative Savings</p>
                  <h3 className="text-2xl font-black text-emerald-600 mt-0.5">36.5 Hours</h3>
                </div>
              </div>

              {/* Maintenance Statistics Analysis Grid Area[cite: 1] */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm md:col-span-2">
                  <div className="border-b border-gray-100 pb-3 mb-4 flex justify-between items-center">
                    <h4 className="font-black text-xs uppercase tracking-wider text-gray-500">Fleet Operations Analytics Matrix</h4>
                    <span className="text-[10px] font-bold text-red-600">Live Engine Diagnostics</span>
                  </div>
                  {/* Clean mockup tracking grid lines imitating your image rows */}
                  <div className="space-y-2">
                    <div className="h-6 bg-red-600 rounded text-[10px] font-bold text-white flex items-center px-3 justify-between w-full">
                      <span>Heavy Excavator Fleet Node (Group A)</span>
                      <span>91% Performance Cap</span>
                    </div>
                    <div className="h-6 bg-neutral-900 rounded text-[10px] font-bold text-white flex items-center px-3 justify-between w-[85%]">
                      <span>CNC Assembly Grid Line (Group B)</span>
                      <span>85% Capacity</span>
                    </div>
                    <div className="h-6 bg-neutral-400 rounded text-[10px] font-bold text-white flex items-center px-3 justify-between w-[64%]">
                      <span>Auxiliary Generator Cells (Group C)</span>
                      <span>64% Operations Load</span>
                    </div>
                  </div>
                </div>
                
                {/* Secondary data widget sidebar summary panel */}
                <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm flex flex-col justify-between">
                  <div>
                    <h5 className="font-black text-xs uppercase tracking-wider text-gray-500 border-b pb-2 mb-3">KPI Target Threshold</h5>
                    <div className="w-24 h-24 rounded-full border-8 border-red-600 border-b-neutral-200 mx-auto my-2 flex items-center justify-center">
                      <span className="text-lg font-black">88%</span>
                    </div>
                  </div>
                  <p className="text-[11px] text-center text-gray-400 px-2 font-medium">System performance metrics currently tracking green across target vectors[cite: 1].</p>
                </div>
              </div>

            </div>
          ) : (
            /* TECHNICIAN WORK TRACKING INTERFACE[cite: 1] */
            <div className="space-y-6">
              
              {/* Technician Task Progress Cards[cite: 1] */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                  <p className="text-[10px] uppercase font-bold text-gray-400 tracking-wider">Assigned Operations Orders</p>
                  <h3 className="text-2xl font-black text-gray-900 mt-0.5">2 Active</h3>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                  <p className="text-[10px] uppercase font-bold text-gray-400 tracking-wider">Today's Schedule Allocations</p>
                  <h3 className="text-2xl font-black text-blue-600 mt-0.5">3 Slots Remaining</h3>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                  <p className="text-[10px] uppercase font-bold text-gray-400 tracking-wider">Shift Performance Ratio</p>
                  <h3 className="text-2xl font-black text-emerald-600 mt-0.5">85% Efficiency</h3>
                </div>
              </div>

              {/* Work Order Ledger Table View[cite: 1] */}
              <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
                <div className="p-4 bg-neutral-50 border-b font-black text-xs uppercase tracking-wider text-gray-500">
                  Active Work Verification Backlog
                </div>
                <div className="divide-y divide-gray-200 text-xs">
                  <div className="p-4 flex justify-between items-center hover:bg-neutral-50/50 transition-colors">
                    <div>
                      <span className="font-mono text-[10px] text-gray-400 block font-bold">TICKET: WO-401</span>
                      <strong className="text-sm text-gray-900 font-bold block mt-0.5">Generator Module 2</strong>
                      <span className="text-gray-500">Execute voltage droop correction and calibration sequences[cite: 1].</span>
                    </div>
                    <span className="bg-amber-100 text-amber-800 font-black px-3 py-1 rounded text-[10px] uppercase tracking-wider">
                      In Progress
                    </span>
                  </div>
                  <div className="p-4 flex justify-between items-center hover:bg-neutral-50/50 transition-colors">
                    <div>
                      <span className="font-mono text-[10px] text-gray-400 block font-bold">TICKET: WO-402</span>
                      <strong className="text-sm text-gray-900 font-bold block mt-0.5">Conveyor Belt C</strong>
                      <span className="text-gray-500">Photoelectric alignment tuning and hardware check verification[cite: 1].</span>
                    </div>
                    <span className="bg-gray-100 text-gray-600 font-black px-3 py-1 rounded text-[10px] uppercase tracking-wider">
                      Pending
                    </span>
                  </div>
                </div>
              </div>

            </div>
          )}

        </div>
      </main>
    </div>
  );
}