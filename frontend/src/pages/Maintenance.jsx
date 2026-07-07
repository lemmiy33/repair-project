import { useState } from 'react';

export default function Maintenance() {
  const [role, setRole] = useState('manager'); // Toggle to 'technician' to see assigned tasks

  // Mock queue data based on Saifullah's engineering specifications
  const [workOrders, setWorkOrders] = useState([
    { id: "WO-901", asset: "Excavator Delta-4", task: "Hydraulic Core Flush", tech: "Saifullah", priority: "Critical", status: "In Progress" },
    { id: "WO-902", asset: "CNC Router Prime", task: "Spindle Realignment", tech: "Kimberly", priority: "High", status: "Assigned" },
    { id: "WO-903", asset: "Generator Module 2", task: "Voltage Droop Tuning", tech: "Unassigned", priority: "Medium", status: "Pending" },
  ]);

  // Update status for Technician workspace
  const updateStatus = (id, newStatus) => {
    setWorkOrders(workOrders.map(wo => wo.id === id ? { ...wo, status: newStatus } : wo));
  };

  return (
    <div className="min-h-screen bg-[#f3f4f6] flex text-gray-800 font-sans">
      
      {/* Sidebar Accent Navigation Block */}
      <aside className="w-64 bg-[#141414] text-white p-5 shrink-0 hidden lg:block">
        <span className="font-black text-sm tracking-tight text-white block mb-4">repAIr ichiban</span>
        <p className="text-[10px] text-gray-500 uppercase font-bold tracking-wider">Maintenance Command</p>
        
        {/* Internal Role Switcher Sandbox */}
        <div className="mt-8 bg-[#0d0d0d] p-3 rounded-md border border-neutral-800 text-center">
          <span className="text-[9px] uppercase font-bold text-neutral-500 block mb-2">Workspace Filter</span>
          <div className="grid grid-cols-2 gap-1 text-[10px]">
            <button onClick={() => setRole('manager')} className={`py-1 rounded font-bold ${role === 'manager' ? 'bg-red-600 text-white' : 'text-neutral-400 bg-neutral-900'}`}>Manager</button>
            <button onClick={() => setRole('technician')} className={`py-1 rounded font-bold ${role === 'technician' ? 'bg-red-600 text-white' : 'text-neutral-400 bg-neutral-900'}`}>Tech</button>
          </div>
        </div>
      </aside>

      {/* Primary Control Grid Area */}
      <main className="flex-1 p-6 space-y-6 overflow-y-auto">
        <div className="border-b pb-4 border-gray-200 flex justify-between items-center">
          <div>
            <h1 className="text-xl font-black text-gray-900 uppercase">Operational Queue & Schedules</h1>
            <p className="text-xs text-gray-500">Track technician workloads, monitor schedules, and update dispatch orders.</p>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* A. MANAGER DESK VIEW SUITE */}
        {/* ========================================================================= */}
        {role === 'manager' ? (
          <div className="space-y-6">
            {/* Workload Status Summaries[cite: 1] */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
              <div className="bg-white p-4 rounded-lg border shadow-sm">
                <span className="text-[10px] text-gray-400 uppercase font-bold">Total Work Orders Queue[cite: 1]</span>
                <h3 className="text-2xl font-black text-gray-900 mt-1">{workOrders.length} Units</h3>
              </div>
              <div className="bg-white p-4 rounded-lg border shadow-sm border-l-4 border-l-amber-500">
                <span className="text-[10px] text-gray-400 uppercase font-bold">Active Dispatched Shifts[cite: 1]</span>
                <h3 className="text-2xl font-black text-gray-900 mt-1">2 Personnel</h3>
              </div>
              <div className="bg-white p-4 rounded-lg border shadow-sm border-l-4 border-l-red-600">
                <span className="text-[10px] text-gray-400 uppercase font-bold">Overdue Maintenance Pipeline[cite: 1]</span>
                <h3 className="text-2xl font-black text-red-600 mt-1">0 Overdue</h3>
              </div>
            </div>

            {/* Central Scheduling Matrix Board[cite: 1] */}
            <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
              <div className="p-4 bg-neutral-50 border-b font-black text-xs uppercase tracking-wider text-gray-500">
                Global Master Dispatch Ledger
              </div>
              <div className="p-2 divide-y text-xs">
                {workOrders.map(wo => (
                  <div key={wo.id} className="p-3 flex justify-between items-center hover:bg-neutral-50/50">
                    <div className="space-y-0.5">
                      <span className="font-mono text-gray-400 block font-bold">[{wo.id}] — {wo.asset}</span>
                      <strong className="text-sm text-gray-900 font-bold block">{wo.task}</strong>
                      <span className="text-gray-500 font-medium block">Assigned Specialist: <span className="underline text-neutral-800 font-bold">{wo.tech}</span>[cite: 1]</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span className={`px-2 py-0.5 rounded text-[9px] font-black uppercase ${wo.priority === 'Critical' ? 'bg-red-100 text-red-700' : 'bg-gray-100 text-gray-700'}`}>
                        {wo.priority} Priority[cite: 1]
                      </span>
                      <span className="bg-neutral-900 text-white font-black px-2.5 py-1 rounded text-[10px] uppercase">
                        {wo.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : (
          /* ========================================================================= */
          /* B. TECHNICIAN FLOW WORKSPACE[cite: 1] */
          /* ========================================================================= */
          <div className="space-y-6">
            <div className="bg-neutral-900 text-white p-4 rounded-lg shadow-md flex justify-between items-center">
              <div>
                <h3 className="text-sm font-black uppercase tracking-wider">Operator Profile: Saifullah</h3>
                <p className="text-[11px] text-neutral-400 mt-0.5">Showing assigned task iterations for today's maintenance schedule[cite: 1].</p>
              </div>
              <span className="text-xs font-mono font-bold text-red-500">Active Shift Node</span>
            </div>

            {/* Personalized Task Stack Cards[cite: 1] */}
            <div className="space-y-4">
              {workOrders.filter(wo => wo.tech === 'Saifullah').map(wo => (
                <div key={wo.id} className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                  <div>
                    <div className="flex items-center space-x-2">
                      <span className="font-mono text-xs text-gray-400 font-bold">[{wo.id}]</span>
                      <span className="bg-red-50 text-red-700 font-black text-[9px] px-2 py-0.5 rounded uppercase">{wo.priority}</span>
                    </div>
                    <h4 className="text-base font-black text-gray-900 mt-1">{wo.asset}</h4>
                    <p className="text-xs text-gray-600 font-medium mt-0.5">{wo.task}</p>
                  </div>

                  {/* Operational Controls to update completion progress[cite: 1] */}
                  <div className="flex items-center space-x-2 w-full md:w-auto">
                    {wo.status !== 'Completed' ? (
                      <>
                        <button 
                          onClick={() => updateStatus(wo.id, 'In Progress')}
                          className="bg-neutral-900 hover:bg-neutral-800 text-white font-bold px-3 py-2 rounded text-[10px] uppercase tracking-wider transition-colors flex-1 md:flex-initial"
                        >
                          Mark Active
                        </button>
                        <button 
                          onClick={() => updateStatus(wo.id, 'Completed')}
                          className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-3 py-2 rounded text-[10px] uppercase tracking-wider transition-colors flex-1 md:flex-initial"
                        >
                          Mark Complete[cite: 1]
                        </button>
                      </>
                    ) : (
                      <span className="bg-emerald-100 text-emerald-800 font-black px-4 py-2 rounded text-[10px] uppercase tracking-wider">
                        ✓ Tasks Dispatched & Complete[cite: 1]
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>
    </div>
  );
}