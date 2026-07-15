import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  LayoutGrid,
  Wrench,
  Hammer,
  BarChart2,
  Settings,
  HelpCircle,
  Download,
  FileText,
  ClipboardList,
  AlertTriangle,
  Radio,
  ChevronDown,
  SlidersHorizontal,
  Eye,
  ChevronLeft,
  ChevronRight,
  MoreVertical,
} from "lucide-react";

const navItems = [
  { label: "Dashboard", icon: LayoutGrid, path: "/dashboard" },
  { label: "Equipment", icon: Wrench, path: "/equipment" },
  { label: "Maintenance", icon: Hammer, path: "/maintenance" },
  { label: "Reports", icon: BarChart2, path: "/reports" },
];

const severityStyles = {
  CRITICAL: "bg-red-50 text-red-600",
  WARNING: "bg-amber-50 text-amber-600",
  INFO: "bg-gray-100 text-gray-500",
};

// Role-specific config: heading copy, KPIs, action buttons, table title/rows, user card
const roleConfig = {
  manager: {
    user: { name: "Alexander", title: "Maintenance Manager" },
    subtitle:
      "Review historical maintenance ledgers, failure reports, and AI predictions.",
    showExport: true,
    tableTitle: "Maintenance History",
    kpis: [
      {
        label: "TOTAL EVENTS (30D)",
        value: "1,248",
        icon: ClipboardList,
        footnote: "-12% vs last month",
        footnoteColor: "text-green-600",
        tone: "neutral",
      },
      {
        label: "CRITICAL FAILURES",
        value: "14",
        icon: AlertTriangle,
        footnote: "Requires immediate review",
        footnoteColor: "text-red-600",
        tone: "danger",
      },
      {
        label: "AI PREDICTION ACCURACY",
        value: "94.2%",
        icon: Radio,
        footnote: "Based on 500+ recent models",
        footnoteColor: "text-gray-400",
        tone: "neutral",
      },
    ],
    history: [
      {
        date: "Mar 26, 2026",
        time: "14:32:05 UTC",
        equipmentId: "CNC-MILL-004",
        event: "Spindle Overheat Detection",
        severity: "CRITICAL",
        technician: "J. Derulo",
        initials: "JD",
        avatarColor: "bg-indigo-100 text-indigo-600",
      },
      {
        date: "Mar 25, 2026",
        time: "09:15:22 UTC",
        equipmentId: "CONV-SYS-012",
        event: "Belt Tension Variance",
        severity: "WARNING",
        technician: "A. Sandler",
        initials: "AS",
        avatarColor: "bg-gray-200 text-gray-600",
      },
      {
        date: "Mar 24, 2026",
        time: "16:45:00 UTC",
        equipmentId: "ROB-ARM-099",
        event: "Scheduled Lubrication Cycle",
        severity: "INFO",
        technician: "Automated",
        initials: null,
        avatarColor: "bg-gray-100 text-gray-400",
      },
    ],
    entryCountLabel: "Showing 1 to 10 of 1,248 entries",
  },
  technician: {
    user: { name: "Alex", title: "Technician" },
    subtitle: "Review your completed jobs, response times, and open tasks.",
    showExport: false,
    tableTitle: "My Work Log",
    kpis: [
      {
        label: "JOBS COMPLETED (30D)",
        value: "38",
        icon: ClipboardList,
        footnote: "+6 vs last month",
        footnoteColor: "text-green-600",
        tone: "neutral",
      },
      {
        label: "OPEN TASKS",
        value: "5",
        icon: AlertTriangle,
        footnote: "1 flagged urgent",
        footnoteColor: "text-red-600",
        tone: "danger",
      },
      {
        label: "AVG. RESPONSE TIME",
        value: "22 min",
        icon: Radio,
        footnote: "Based on last 30 days",
        footnoteColor: "text-gray-400",
        tone: "neutral",
      },
    ],
    history: [
      {
        date: "Mar 26, 2026",
        time: "14:32:05 UTC",
        equipmentId: "CNC-MILL-004",
        event: "Spindle Overheat Detection",
        severity: "CRITICAL",
        technician: "You",
        initials: "AX",
        avatarColor: "bg-red-100 text-red-600",
      },
      {
        date: "Mar 23, 2026",
        time: "11:05:40 UTC",
        equipmentId: "PMP-HYD-021",
        event: "Seal Replacement",
        severity: "INFO",
        technician: "You",
        initials: "AX",
        avatarColor: "bg-red-100 text-red-600",
      },
      {
        date: "Mar 21, 2026",
        time: "08:12:15 UTC",
        equipmentId: "CONV-SYS-007",
        event: "Belt Alignment Check",
        severity: "WARNING",
        technician: "You",
        initials: "AX",
        avatarColor: "bg-red-100 text-red-600",
      },
    ],
    entryCountLabel: "Showing 1 to 10 of 38 entries",
  },
};

export default function ReportsPage() {
  const [role, setRole] = useState("manager");
  const [severity, setSeverity] = useState("All Severities");
  const [range, setRange] = useState("Last 30 Days");
  const location = useLocation();
  const { user, subtitle, showExport, tableTitle, kpis, history, entryCountLabel } =
    roleConfig[role];

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
          {/* Role switcher */}
          <div className="mb-2 flex rounded-lg bg-gray-50 p-1 text-xs font-medium">
            <button
              onClick={() => setRole("technician")}
              className={`flex-1 rounded-md py-1.5 transition-colors ${
                role === "technician"
                  ? "bg-white text-red-600 shadow-sm"
                  : "text-gray-400"
              }`}
            >
              Technician
            </button>
            <button
              onClick={() => setRole("manager")}
              className={`flex-1 rounded-md py-1.5 transition-colors ${
                role === "manager"
                  ? "bg-white text-red-600 shadow-sm"
                  : "text-gray-400"
              }`}
            >
              Manager
            </button>
          </div>

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
              <p className="text-sm font-semibold text-gray-800">{user.name}</p>
              <p className="text-xs text-gray-400">{user.title}</p>
            </div>
            <MoreVertical size={16} className="ml-auto text-gray-300" />
          </div>
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 px-10 py-8">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <h1 className="text-[28px] font-extrabold tracking-tight text-gray-900">
              Analytical Hub
            </h1>
            <p className="mt-1 text-sm text-gray-400">{subtitle}</p>
          </div>

          {showExport && (
            <div className="flex gap-3">
              <button className="flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-semibold text-gray-600 hover:bg-gray-50">
                <Download size={15} strokeWidth={2.2} />
                Export CSV
              </button>
              <button className="flex items-center gap-2 rounded-lg bg-red-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-700">
                <FileText size={15} strokeWidth={2.2} />
                Generate PDF
              </button>
            </div>
          )}
        </div>

        {/* KPI cards */}
        <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-3">
          {kpis.map((k) => (
            <KpiCard key={k.label} {...k} />
          ))}
        </div>

        {/* Maintenance history table */}
        <div className="mt-5 rounded-2xl border border-[#eceff4] bg-white p-5 shadow-[0_1px_2px_rgba(16,24,40,0.04)]">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <h2 className="text-[17px] font-bold text-gray-900">
              {tableTitle}
            </h2>

            <div className="flex items-center gap-2">
              <Dropdown value={severity} onClick={() => {}} />
              <Dropdown value={range} onClick={() => {}} />
              <button className="flex h-9 w-9 items-center justify-center rounded-lg border border-gray-200 text-gray-500 hover:bg-gray-50">
                <SlidersHorizontal size={15} strokeWidth={2.2} />
              </button>
            </div>
          </div>

          <div className="mt-4 overflow-x-auto">
            <table className="w-full min-w-[720px] border-collapse text-left">
              <thead>
                <tr className="border-b border-[#eceff4] text-[11px] font-semibold uppercase tracking-wide text-gray-400">
                  <th className="pb-3 pr-4 font-semibold">Date &amp; Time</th>
                  <th className="pb-3 pr-4 font-semibold">Equipment ID</th>
                  <th className="pb-3 pr-4 font-semibold">Event Type</th>
                  <th className="pb-3 pr-4 font-semibold">Severity</th>
                  <th className="pb-3 pr-4 font-semibold">Technician</th>
                  <th className="pb-3 pr-0 text-right font-semibold">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {history.map((row) => (
                  <tr
                    key={row.equipmentId + row.time}
                    className="border-b border-[#f1f3f7] text-sm last:border-0"
                  >
                    <td className="py-3.5 pr-4 align-top">
                      <p className="font-semibold text-gray-800">
                        {row.date}
                      </p>
                      <p className="text-xs text-gray-400">{row.time}</p>
                    </td>
                    <td className="py-3.5 pr-4 align-top font-mono text-[13px] text-gray-600">
                      {row.equipmentId}
                    </td>
                    <td className="py-3.5 pr-4 align-top text-gray-800">
                      {row.event}
                    </td>
                    <td className="py-3.5 pr-4 align-top">
                      <span
                        className={`inline-block rounded px-2 py-0.5 text-[10px] font-bold tracking-wide ${
                          severityStyles[row.severity]
                        }`}
                      >
                        {row.severity}
                      </span>
                    </td>
                    <td className="py-3.5 pr-4 align-top">
                      <div className="flex items-center gap-2">
                        <div
                          className={`flex h-6 w-6 items-center justify-center rounded-full text-[10px] font-bold ${row.avatarColor}`}
                        >
                          {row.initials ?? (
                            <Wrench size={11} strokeWidth={2.5} />
                          )}
                        </div>
                        <span className="text-gray-700">
                          {row.technician}
                        </span>
                      </div>
                    </td>
                    <td className="py-3.5 pr-0 text-right align-top">
                      <button className="text-red-500 hover:text-red-600">
                        <Eye size={16} strokeWidth={2} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="mt-4 flex flex-wrap items-center justify-between gap-3 pt-1">
            <p className="text-xs text-gray-400">{entryCountLabel}</p>
            <div className="flex items-center gap-1">
              <PageButton icon={ChevronLeft} />
              <PageButton label="1" active />
              <PageButton label="2" />
              <PageButton label="3" />
              <span className="px-1 text-sm text-gray-400">...</span>
              <PageButton icon={ChevronRight} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

function KpiCard({ label, value, icon: Icon, footnote, footnoteColor, tone }) {
  const danger = tone === "danger";
  return (
    <div
      className={`rounded-2xl border p-5 shadow-[0_1px_2px_rgba(16,24,40,0.04)] ${
        danger
          ? "border-red-100 bg-red-50/60"
          : "border-[#eceff4] bg-white"
      }`}
    >
      <div className="flex items-start justify-between">
        <p
          className={`text-[11px] font-bold tracking-wide ${
            danger ? "text-red-500" : "text-gray-400"
          }`}
        >
          {label}
        </p>
        <Icon
          size={16}
          strokeWidth={2.2}
          className={danger ? "text-red-500" : "text-gray-400"}
        />
      </div>
      <p
        className={`mt-3 text-[32px] font-extrabold leading-none ${
          danger ? "text-red-600" : "text-gray-900"
        }`}
      >
        {value}
      </p>
      <p className={`mt-2 text-xs font-medium ${footnoteColor}`}>
        {footnote}
      </p>
    </div>
  );
}

function Dropdown({ value }) {
  return (
    <button className="flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50">
      {value}
      <ChevronDown size={14} strokeWidth={2.2} className="text-gray-400" />
    </button>
  );
}

function PageButton({ label, icon: Icon, active }) {
  return (
    <button
      className={`flex h-8 w-8 items-center justify-center rounded-lg text-sm font-semibold transition-colors ${
        active
          ? "bg-red-600 text-white"
          : "text-gray-500 hover:bg-gray-100"
      }`}
    >
      {Icon ? <Icon size={15} strokeWidth={2.2} /> : label}
    </button>
  );
}