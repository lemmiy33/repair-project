import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  LayoutGrid,
  Wrench,
  Hammer,
  BarChart2,
  Settings,
  HelpCircle,
  Search,
  ChevronRight,
  MoreVertical,
  Eye,
  Heart,
  ShieldAlert,
  Sparkles,
  ChevronsRight,
  Download,
  ShieldCheck,
  HardHat,
  PenTool,
  Package,
  Bot,
} from "lucide-react";

const navItems = [
  { label: "Dashboard", icon: LayoutGrid, path: "/dashboard" },
  { label: "Equipment", icon: Wrench, path: "/equipment" },
  { label: "Maintenance", icon: Hammer, path: "/maintenance" },
  { label: "Reports", icon: BarChart2, path: "/reports" },
];

const equipmentList = [
  {
    id: "EX-190",
    type: "Excavator Medium",
    status: "stable",
    statusLabel: "Stable Health",
    location: null,
  },
  {
    id: "EX-203",
    type: "Excavator Heavy",
    status: "critical",
    statusLabel: "42% Health Rate",
    location: "Quarry Sector 4",
  },
  {
    id: "BT-045",
    type: "Dump Truck 50T",
    status: "stable",
    statusLabel: null,
    location: "Quarry Sector 2",
  },
];

const tabs = ["Overview", "Maintenance History", "AI Analysis"];

const predictionFactors = [
  { label: "Hydraulic Pressure Variance", impact: "+42% Impact", width: 85 },
  { label: "Vibration (Class 2)", impact: "+28% Impact", width: 58 },
  { label: "Operating Hours since PM", impact: "+15% Impact", width: 32 },
];

const anomalyHistory = [
  {
    when: "1 MONTH AGO",
    text: "Seal degradation signature matching profile B-992.",
  },
  {
    when: "2 MONTHS AGO",
    text: "Similar micro-corrosion flagged on EX-198. Resolved via seal replacement.",
  },
  {
    when: "6 MONTHS AGO",
    text: "Baseline profile established during initial OEM commissioning phase.",
  },
];

const ppe = ["Safety Glasses", "Nitrile Gloves"];
const tools = [
  "30mm Socket Wrench",
  "Hydraulic Seal Pick Set",
  "Torque Wrench (350Nm)",
];
const spareParts = [
  { name: "Seal Kit A-PX119 (High Temp)", qty: "1" },
  { name: "Hydraulic Fluid (330 mL)", qty: "330 mL" },
];
const sopSteps = [
  {
    title: "Depressurize System",
    detail: "Critical safety step — confirm zero residual pressure before opening the assembly.",
  },
  {
    title: "Remove Cylinder Cap",
    detail:
      "Use a 30mm socket to unbolt the end cap. Working fluid may spill — position a catch tray beneath the assembly.",
  },
  {
    title: "Extract and Inspect Seals",
    detail:
      "Carefully remove old O-rings using a brass pick to avoid scoring the cylinder wall. Inspect for scoring or deep gouges on the bore surface.",
  },
];

export default function EquipmentPage() {
  const location = useLocation();
  const [selectedId, setSelectedId] = useState("EX-203");
  const [activeTab, setActiveTab] = useState("AI Analysis");

  return (
    <div className="flex min-h-screen w-full bg-[#eef1f6] font-sans text-[#1f2430]">
      {/* Sidebar */}
      <aside className="flex w-60 shrink-0 flex-col border-r border-[#e3e7ee] bg-white px-4 py-5">
        <div className="mb-8 flex items-center gap-2 px-1">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-red-50 text-red-600">
            <Wrench size={16} strokeWidth={2.5} />
          </div>
          <div className="leading-tight">
            <p className="text-[11px] text-gray-400">Welcome to</p>
            <p className="-mt-0.5 text-lg font-bold tracking-tight text-red-600">
              rep<span className="text-red-600">AI</span>r
            </p>
          </div>
        </div>

        <nav className="flex flex-col gap-1">
          {navItems.map(({ label, icon: Icon, path }) => {
            const active = location.pathname === path;
            return (
              <Link
                key={label}
                to={path}
                className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
                  active
                    ? "bg-red-600 text-white shadow-sm"
                    : "text-gray-500 hover:bg-gray-50"
                }`}
              >
                <Icon size={17} strokeWidth={2} />
                {label}
              </Link>
            );
          })}
        </nav>

        <div className="mt-auto flex flex-col gap-1 border-t border-[#eceff4] pt-4">
          <button className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-gray-500 hover:bg-gray-50">
            <Settings size={17} strokeWidth={2} />
            Settings
          </button>
          <button className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-gray-500 hover:bg-gray-50">
            <HelpCircle size={17} strokeWidth={2} />
            Support
          </button>

          <div className="mt-3 flex items-center gap-3 rounded-lg px-2 py-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-red-50 text-red-500">
              <Wrench size={15} strokeWidth={2.5} />
            </div>
            <div className="leading-tight">
              <p className="text-sm font-semibold text-gray-800">Alexander</p>
              <p className="text-xs text-gray-400">Maintenance Manager</p>
            </div>
            <MoreVertical size={16} className="ml-auto text-gray-300" />
          </div>
        </div>
      </aside>

      {/* Main content */}
      <div className="flex flex-1">
        {/* Equipment list panel */}
        <div className="w-72 shrink-0 border-r border-[#e3e7ee] bg-white px-4 py-5">
          <h2 className="text-[15px] font-bold text-gray-900">
            Equipment List
          </h2>

          <div className="mt-3 flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-3 py-2">
            <Search size={14} className="text-gray-400" strokeWidth={2.2} />
            <input
              placeholder="Search ID or Type..."
              className="w-full bg-transparent text-sm text-gray-600 placeholder:text-gray-400 focus:outline-none"
            />
          </div>

          <div className="mt-3 flex gap-2">
            <FilterChip label="ALL" count={null} active />
            <FilterChip label="CRITICAL" count={40} />
            <FilterChip label="WARNING" count={12} />
          </div>

          <div className="mt-4 flex flex-col gap-2">
            {equipmentList.map((eq) => {
              const selected = eq.id === selectedId;
              return (
                <button
                  key={eq.id}
                  onClick={() => setSelectedId(eq.id)}
                  className={`rounded-xl border p-3 text-left transition-colors ${
                    selected
                      ? "border-red-200 bg-red-50"
                      : "border-[#eceff4] bg-white hover:bg-gray-50"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-bold text-gray-900">
                      {eq.id}
                    </span>
                    {eq.status === "critical" && (
                      <span className="flex items-center gap-1 text-[11px] font-semibold text-red-600">
                        <ShieldAlert size={12} strokeWidth={2.4} />
                        {eq.statusLabel}
                      </span>
                    )}
                  </div>
                  <p className="mt-0.5 text-xs text-gray-500">{eq.type}</p>
                  <div className="mt-1.5 flex items-center gap-1.5">
                    <span
                      className={`h-1.5 w-1.5 rounded-full ${
                        eq.status === "critical"
                          ? "bg-red-500"
                          : "bg-green-500"
                      }`}
                    />
                    <span className="text-[11px] text-gray-400">
                      {eq.status === "critical"
                        ? eq.location
                        : eq.statusLabel || eq.location}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Detail panel */}
        <main className="flex-1 px-8 py-7">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-[26px] font-extrabold tracking-tight text-gray-900">
                  Excavator EX-203
                </h1>
                <span className="rounded-md bg-gray-100 px-2 py-0.5 text-[11px] font-semibold text-gray-500">
                  Heavy Duty
                </span>
              </div>
              <p className="mt-1 text-sm text-gray-400">
                Kuching Quarry Sector 4 • Primary Extraction Fleet
              </p>
            </div>

            <div className="flex gap-3">
              <button className="flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-semibold text-gray-600 hover:bg-gray-50">
                <Eye size={15} strokeWidth={2.2} />
                View Telemetry
              </button>
              <button className="flex items-center gap-2 rounded-lg bg-red-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-700">
                <Wrench size={15} strokeWidth={2.2} />
                Initiate Repair
              </button>
            </div>
          </div>

          {/* Tabs */}
          <div className="mt-5 flex gap-6 border-b border-[#e3e7ee]">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`-mb-px border-b-2 pb-2.5 text-sm font-semibold transition-colors ${
                  activeTab === tab
                    ? "border-red-600 text-red-600"
                    : "border-transparent text-gray-400 hover:text-gray-600"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {activeTab === "AI Analysis" ? (
            <div className="mt-5 flex flex-col gap-5">
              {/* Health / Risk / AI Insights row */}
              <div className="grid grid-cols-1 gap-5 lg:grid-cols-[220px_220px_1fr]">
                <div className="rounded-2xl border border-[#eceff4] bg-white p-5 shadow-[0_1px_2px_rgba(16,24,40,0.04)]">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1.5 text-red-500">
                      <Heart size={16} strokeWidth={2.2} />
                      <span className="text-xs font-semibold">Health Score</span>
                    </div>
                    <span className="text-[10px] font-bold tracking-wide text-red-500">
                      POOR
                    </span>
                  </div>
                  <p className="mt-3 text-[34px] font-extrabold leading-none text-red-600">
                    42
                    <span className="text-sm font-semibold text-gray-400">
                      {" "}/ 100
                    </span>
                  </p>
                  <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-gray-100">
                    <div
                      className="h-full rounded-full bg-red-600"
                      style={{ width: "42%" }}
                    />
                  </div>
                </div>

                <div className="rounded-2xl border border-[#eceff4] bg-white p-5 shadow-[0_1px_2px_rgba(16,24,40,0.04)]">
                  <p className="text-xs font-semibold text-gray-500">
                    Failure Risk
                  </p>
                  <p className="mt-3 text-[34px] font-extrabold leading-none text-gray-900">
                    98%
                  </p>
                  <p className="mt-2 text-xs font-semibold text-red-600">
                    Imminent Action Required
                  </p>
                  <p className="text-[11px] text-gray-400">Confidence Level</p>
                </div>

                <div className="rounded-2xl border border-[#eceff4] bg-white p-5 shadow-[0_1px_2px_rgba(16,24,40,0.04)]">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Sparkles size={17} className="text-red-500" strokeWidth={2.2} />
                      <h3 className="text-[15px] font-bold text-gray-900">
                        AI Insights
                      </h3>
                    </div>
                    <span className="text-[10px] font-semibold tracking-wide text-gray-400">
                      GENERATED JUST NOW
                    </span>
                  </div>

                  <p className="mt-3 text-xs font-semibold text-gray-500">
                    ROOT CAUSE ANALYSIS
                  </p>
                  <p className="mt-1 text-sm text-gray-600">
                    Hydraulic pressure sensors indicate a micro-movement event
                    in the primary lift cylinder.
                  </p>

                  <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2">
                    <div>
                      <p className="text-[11px] font-semibold text-gray-400">
                        PRIMARY TRIGGER
                      </p>
                      <p className="text-xs text-gray-600">
                        Fluid temperature spike (+34°C) during high-load
                        cycles.
                      </p>
                    </div>
                    <div>
                      <p className="text-[11px] font-semibold text-gray-400">
                        SECONDARY EFFECT
                      </p>
                      <p className="text-xs text-gray-600">
                        Accelerated seal degradation via acoustic anomaly.
                      </p>
                    </div>
                  </div>

                  <div className="mt-4 flex items-center justify-between rounded-xl bg-[#1c1f26] p-3.5">
                    <p className="text-xs text-white">
                      Immediate seal replacement required to prevent early
                      failure.
                    </p>
                    <button className="flex shrink-0 items-center gap-1 rounded-md bg-white/10 px-3 py-1.5 text-xs font-semibold text-white hover:bg-white/20">
                      View SOP
                      <ChevronsRight size={13} strokeWidth={2.4} />
                    </button>
                  </div>
                </div>
              </div>

              {/* Prediction factors + anomaly pattern */}
              <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
                <div className="rounded-2xl border border-[#eceff4] bg-white p-5 shadow-[0_1px_2px_rgba(16,24,40,0.04)]">
                  <h3 className="text-[15px] font-bold text-gray-900">
                    Top Prediction Factors
                  </h3>
                  <div className="mt-4 flex flex-col gap-4">
                    {predictionFactors.map((f) => (
                      <div key={f.label}>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-700">
                            {f.label}
                          </span>
                          <span className="text-xs font-semibold text-red-600">
                            {f.impact}
                          </span>
                        </div>
                        <div className="mt-1.5 h-1.5 w-full overflow-hidden rounded-full bg-gray-100">
                          <div
                            className="h-full rounded-full bg-red-500"
                            style={{ width: `${f.width}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-2xl border border-[#eceff4] bg-white p-5 shadow-[0_1px_2px_rgba(16,24,40,0.04)]">
                  <h3 className="text-[15px] font-bold text-gray-900">
                    Recurring Anomaly Pattern
                  </h3>
                  <div className="mt-4 flex flex-col divide-y divide-[#f1f3f7]">
                    {anomalyHistory.map((a) => (
                      <div key={a.when} className="py-3 first:pt-0 last:pb-0">
                        <p className="text-[11px] font-semibold tracking-wide text-gray-400">
                          {a.when}
                        </p>
                        <p className="mt-1 text-sm text-gray-700">{a.text}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* AI-Generated Maintenance Guide */}
              <div className="rounded-2xl border border-[#eceff4] bg-white p-5 shadow-[0_1px_2px_rgba(16,24,40,0.04)]">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <h3 className="text-[17px] font-bold text-gray-900">
                      AI-Generated Maintenance Guide
                    </h3>
                    <p className="text-xs text-gray-400">
                      Customized SOP for hydraulic seal replacement on EX-203
                    </p>
                  </div>
                  <button className="flex items-center gap-2 text-sm font-semibold text-red-600 hover:underline">
                    <Download size={15} strokeWidth={2.2} />
                    Export PDF
                  </button>
                </div>

                <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="rounded-xl border border-[#eceff4] bg-[#fafbfc] p-4">
                    <p className="flex items-center gap-2 text-xs font-semibold text-gray-500">
                      <ShieldCheck size={14} strokeWidth={2.2} />
                      REQUIRED PPE
                    </p>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {ppe.map((p) => (
                        <span
                          key={p}
                          className="flex items-center gap-1.5 rounded-md bg-white px-2.5 py-1.5 text-xs font-medium text-gray-600 shadow-sm ring-1 ring-gray-100"
                        >
                          <HardHat size={12} strokeWidth={2.2} />
                          {p}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="rounded-xl border border-[#eceff4] bg-[#fafbfc] p-4">
                    <p className="flex items-center gap-2 text-xs font-semibold text-gray-500">
                      <PenTool size={14} strokeWidth={2.2} />
                      REQUIRED TOOLS
                    </p>
                    <ul className="mt-2 flex flex-col gap-1.5">
                      {tools.map((t) => (
                        <li
                          key={t}
                          className="text-xs font-medium text-gray-600"
                        >
                          • {t}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <p className="mt-5 text-xs font-semibold text-gray-500">
                  STANDARD OPERATING PROCEDURE
                </p>
                <div className="mt-3 flex flex-col gap-4">
                  {sopSteps.map((s, i) => (
                    <div key={s.title} className="flex gap-3">
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-red-600 text-xs font-bold text-white">
                        {i + 1}
                      </span>
                      <div>
                        <p className="text-sm font-semibold text-gray-900">
                          {s.title}
                        </p>
                        <p className="text-xs text-gray-500">{s.detail}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-5 rounded-xl border border-[#eceff4] bg-[#fafbfc] p-4">
                  <p className="flex items-center gap-2 text-xs font-semibold text-gray-500">
                    <Package size={14} strokeWidth={2.2} />
                    SPARE PARTS LIST
                  </p>
                  <div className="mt-2 flex flex-col gap-1.5">
                    {spareParts.map((p) => (
                      <div
                        key={p.name}
                        className="flex items-center justify-between text-xs"
                      >
                        <span className="font-medium text-gray-700">
                          {p.name}
                        </span>
                        <span className="text-gray-400">{p.qty}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-4 flex items-start gap-3 rounded-xl border border-red-100 bg-red-50 p-4">
                  <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-red-100 text-red-600">
                    <Bot size={14} strokeWidth={2.2} />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-red-600">
                      AI Assistant Note
                    </p>
                    <p className="mt-0.5 text-xs text-gray-600">
                      Based on this unit's corrosion rate, applying a
                      protective coating to the lower gland could extend seal
                      life beyond the current maintenance schedule.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="mt-8 flex flex-col items-center justify-center rounded-2xl border border-dashed border-gray-200 bg-white py-16 text-center">
              <p className="text-sm font-semibold text-gray-500">
                {activeTab} content coming soon
              </p>
              <p className="mt-1 text-xs text-gray-400">
                This tab isn't part of the current design yet — let me know
                what should live here.
              </p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}

function FilterChip({ label, count, active }) {
  return (
    <button
      className={`rounded-md px-2.5 py-1 text-[11px] font-semibold tracking-wide transition-colors ${
        active
          ? "bg-red-600 text-white"
          : "bg-gray-100 text-gray-500 hover:bg-gray-200"
      }`}
    >
      {label}
      {count !== null && <span className="ml-1">{count}</span>}
    </button>
  );
}