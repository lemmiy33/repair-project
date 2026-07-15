import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  LayoutGrid,
  Wrench,
  Hammer,
  BarChart2,
  Settings,
  HelpCircle,
  ShieldCheck,
  AlertTriangle,
  ClipboardList,
  CheckCircle2,
  Users,
  DollarSign,
  MoreVertical,
} from "lucide-react";

const navItems = [
  { label: "Dashboard", icon: LayoutGrid, path: "/dashboard" },
  { label: "Equipment", icon: Wrench, path: "/equipment" },
  { label: "Maintenance", icon: Hammer, path: "/maintenance" },
  { label: "Reports", icon: BarChart2, path: "/reports" },
];

const alerts = [
  {
    tag: "PRESSURE DROP",
    title: "Hydraulic Unit A-42",
    detail: "Pressure dropped below 1200 PSI threshold.",
    time: "12 mins ago",
  },
  {
    tag: "OVERDUE",
    title: "Conveyor Belt C-Line",
    detail: "Mandatory 500hr inspection past due.",
    time: "2 hrs ago",
  },
  {
    tag: "ANOMALY",
    title: "Robotic Arm R-9",
    detail: "AI detected abnormal vibration pattern.",
    time: "4 hrs ago",
  },
];

// Role-specific config: bottom stat row + user card
const roleConfig = {
  technician: {
    user: { name: "Alex", title: "Technician" },
    stats: [
      {
        label: "Maintenance To Do",
        value: "142",
        icon: ClipboardList,
        iconBg: "bg-gray-100",
        iconColor: "text-gray-500",
      },
      {
        label: "Maintenance Completed",
        value: "24",
        icon: CheckCircle2,
        iconBg: "bg-green-100",
        iconColor: "text-green-600",
        cardBg: "bg-green-50",
        border: "border-green-100",
      },
      {
        label: "Technicians Active",
        value: "8",
        icon: Users,
        iconBg: "bg-gray-100",
        iconColor: "text-gray-500",
      },
    ],
  },
  manager: {
    user: { name: "Alexander", title: "Maintenance Manager" },
    stats: [
      {
        label: "Critical Assets",
        value: "4",
        icon: ClipboardList,
        iconBg: "bg-gray-100",
        iconColor: "text-gray-500",
      },
      {
        label: "Downtime Prevented",
        value: "148 Hours",
        icon: CheckCircle2,
        iconBg: "bg-gray-100",
        iconColor: "text-gray-500",
      },
      {
        label: "Monthly Maintenance Cost",
        value: "RM420,000",
        icon: DollarSign,
        iconBg: "bg-gray-100",
        iconColor: "text-gray-500",
      },
    ],
  },
};

export default function RepairDashboard() {
  const [role, setRole] = useState("manager");
  const { user, stats } = roleConfig[role];
  const location = useLocation();

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
          {/* Role switcher - not part of original design, added for demo convenience */}
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
              <p className="text-sm font-semibold text-gray-800">
                {user.name}
              </p>
              <p className="text-xs text-gray-400">{user.title}</p>
            </div>
            <MoreVertical size={16} className="ml-auto text-gray-300" />
          </div>
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 px-10 py-8">
        <h1 className="text-[28px] font-extrabold tracking-tight text-gray-900">
          What needs attention today?
        </h1>
        <p className="mt-1 text-sm text-gray-400">
          Overview of critical alerts, high-risk assets, and maintenance progress.
        </p>

        <div className="mt-6 grid grid-cols-1 gap-5 lg:grid-cols-[340px_1fr]">
          {/* Left column */}
          <div className="rounded-2xl border border-[#eceff4] bg-white p-5 shadow-[0_1px_2px_rgba(16,24,40,0.04)] lg:self-start">
            <div className="flex items-start justify-between">
              <div>
                <h2 className="text-[15px] font-bold text-gray-900">
                  Equipment
                  <br />
                  Health Summary
                </h2>
                <p className="mt-1 text-xs text-gray-400">
                  Overall equipment health index
                </p>
              </div>
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-red-50 text-red-500">
                <ShieldCheck size={18} strokeWidth={2} />
              </div>
            </div>

            <div className="mt-5 text-[40px] font-extrabold leading-none text-gray-900">
              88%
            </div>

            <div className="mt-4 h-2 w-full overflow-hidden rounded-full bg-gray-100">
              <div
                className="h-full rounded-full bg-gradient-to-r from-green-400 to-green-500"
                style={{ width: "88%" }}
              />
            </div>

            <div className="mt-4 flex gap-2">
              <span className="rounded-md bg-gray-100 px-2.5 py-1 text-[11px] font-semibold tracking-wide text-gray-500">
                RISK: MEDIUM
              </span>
              <span className="rounded-md bg-gray-100 px-2.5 py-1 text-[11px] font-semibold tracking-wide text-gray-500">
                1 CRITICAL
              </span>
            </div>
          </div>

          {/* Right column */}
          <div className="rounded-2xl border border-[#eceff4] bg-white p-5 shadow-[0_1px_2px_rgba(16,24,40,0.04)]">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <AlertTriangle size={18} className="text-red-500" strokeWidth={2.2} />
                <h2 className="text-[15px] font-bold text-gray-900">
                  Critical Alerts
                </h2>
              </div>
              <button className="text-sm font-semibold text-red-500 hover:underline">
                View All
              </button>
            </div>

            <div className="mt-3 flex flex-col divide-y divide-[#f1f3f7]">
              {alerts.map((a) => (
                <div key={a.title} className="flex items-start gap-3 py-3.5">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-red-500" />
                  <div className="flex-1">
                    <span className="inline-block rounded bg-red-600 px-2 py-0.5 text-[10px] font-bold tracking-wide text-white">
                      {a.tag}
                    </span>
                    <p className="mt-1.5 text-sm font-semibold text-gray-900">
                      {a.title}
                    </p>
                    <p className="text-xs text-gray-400">{a.detail}</p>
                  </div>
                  <span className="whitespace-nowrap text-xs text-gray-400">
                    {a.time}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom stat row - spans both columns */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-3 lg:col-span-2">
            {stats.map((s) => (
              <StatCard key={s.label} {...s} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

function StatCard({ label, value, icon: Icon, iconBg, iconColor, cardBg, border }) {
  return (
    <div
      className={`flex items-center justify-between rounded-2xl border ${
        border || "border-[#eceff4]"
      } ${cardBg || "bg-white"} p-5 shadow-[0_1px_2px_rgba(16,24,40,0.04)]`}
    >
      <div>
        <p className="text-xs text-gray-400">{label}</p>
        <p className="mt-1.5 text-2xl font-extrabold text-gray-900">{value}</p>
      </div>
      <div
        className={`flex h-10 w-10 items-center justify-center rounded-full ${iconBg} ${iconColor}`}
      >
        <Icon size={18} strokeWidth={2.2} />
      </div>
    </div>
  );
}