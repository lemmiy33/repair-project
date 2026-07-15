import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  LayoutGrid,
  Wrench,
  Hammer,
  BarChart2,
  Settings,
  HelpCircle,
  PlayCircle,
  Users,
  ClipboardList,
  SlidersHorizontal,
  Calendar,
  AlertTriangle,
  MoreVertical,
} from "lucide-react";

const navItems = [
  { label: "Dashboard", icon: LayoutGrid, path: "/dashboard" },
  { label: "Equipment", icon: Wrench, path: "/equipment" },
  { label: "Maintenance", icon: Hammer, path: "/maintenance" },
  { label: "Reports", icon: BarChart2, path: "/reports" },
];

const workOrders = [
  {
    id: "WO-2941",
    tag: "URGENT",
    tagStyle: "bg-red-600 text-white",
    title: "Hydraulic Press Calibration",
    location: "Line A / Sector 4",
    assignee: "J. Derulo",
    initials: "JD",
    avatarColor: "bg-indigo-100 text-indigo-600",
    timeLeft: "45m left",
    timeColor: "text-red-600",
    progress: 78,
    barColor: "bg-red-600",
    accent: "border-l-4 border-red-500",
  },
  {
    id: "WO-2942",
    tag: "STANDARD",
    tagStyle: "bg-gray-100 text-gray-500",
    title: "Conveyor Belt Bearing Swap",
    location: "Packaging / Zone B",
    assignee: "A. Sandler",
    initials: "AS",
    avatarColor: "bg-gray-200 text-gray-600",
    timeLeft: "2h 15m left",
    timeColor: "text-gray-400",
    progress: 30,
    barColor: "bg-gray-400",
    accent: "border-l-4 border-gray-200",
  },
];

const technicians = [
  {
    name: "Jason Derulo",
    load: 90,
    status: "online",
    avatarColor: "bg-orange-100 text-orange-600",
    initials: "JD",
  },
  {
    name: "Adam Sandler",
    load: 45,
    status: "online",
    avatarColor: "bg-gray-200 text-gray-600",
    initials: "AS",
  },
  {
    name: "Elena Perez",
    load: 0,
    status: "off",
    avatarColor: "bg-gray-100 text-gray-400",
    initials: "EP",
  },
];

const queue = [
  {
    task: "Filter Replacement",
    asset: "HVAC Unit 3",
    priority: "HIGH",
    priorityStyle: "bg-red-50 text-red-600",
    scheduled: "Today, 14:00",
  },
  {
    task: "Motor Inspection",
    asset: "Extruder B",
    priority: "MED",
    priorityStyle: "bg-amber-50 text-amber-600",
    scheduled: "Tom., 08:00",
  },
  {
    task: "Lubrication Cycle",
    asset: "Assembly Robot 12",
    priority: "LOW",
    priorityStyle: "bg-gray-100 text-gray-500",
    scheduled: "Oct 24, 09:00",
  },
];

const forecastDays = [
  { day: "MON", date: 21 },
  { day: "TUE", date: 22 },
  { day: "WED", date: 23, active: true, dot: true },
  { day: "THU", date: 24, dot: true },
  { day: "FRI", date: 25 },
];

export default function MaintenancePage() {
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
      <main className="flex-1 px-10 py-8">
        <h1 className="text-[28px] font-extrabold tracking-tight text-gray-900">
          Maintenance Control
        </h1>
        <p className="mt-1 text-sm text-gray-400">
          Track, manage, and schedule technical interventions.
        </p>

        <div className="mt-6 grid grid-cols-1 gap-5 lg:grid-cols-[1fr_300px]">
          {/* Active Work Orders */}
          <div className="rounded-2xl border border-[#eceff4] bg-white p-5 shadow-[0_1px_2px_rgba(16,24,40,0.04)]">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <PlayCircle size={19} className="text-red-600" strokeWidth={2.2} />
                <h2 className="text-[17px] font-bold text-gray-900">
                  Active Work Orders
                </h2>
              </div>
              <button className="text-sm font-semibold text-gray-500 hover:text-gray-700">
                View All
              </button>
            </div>

            <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {workOrders.map((wo) => (
                <div
                  key={wo.id}
                  className={`rounded-xl border border-[#eceff4] bg-[#fafbfc] p-4 ${wo.accent}`}
                >
                  <div className="flex items-center justify-between">
                    <span
                      className={`rounded px-2 py-0.5 text-[10px] font-bold tracking-wide ${wo.tagStyle}`}
                    >
                      {wo.tag}
                    </span>
                    <span className="text-xs text-gray-400">{wo.id}</span>
                  </div>

                  <p className="mt-3 text-sm font-semibold text-gray-900">
                    {wo.title}
                  </p>
                  <p className="text-xs text-gray-400">{wo.location}</p>

                  <div className="mt-4 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div
                        className={`flex h-6 w-6 items-center justify-center rounded-full text-[10px] font-bold ${wo.avatarColor}`}
                      >
                        {wo.initials}
                      </div>
                      <span className="text-xs font-medium text-gray-600">
                        {wo.assignee}
                      </span>
                    </div>
                    <span className={`text-xs font-semibold ${wo.timeColor}`}>
                      {wo.timeLeft}
                    </span>
                  </div>

                  <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-gray-100">
                    <div
                      className={`h-full rounded-full ${wo.barColor}`}
                      style={{ width: `${wo.progress}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Technician Status */}
          <div className="rounded-2xl border border-[#eceff4] bg-white p-5 shadow-[0_1px_2px_rgba(16,24,40,0.04)]">
            <div className="flex items-center gap-2">
              <Users size={19} className="text-gray-700" strokeWidth={2.2} />
              <h2 className="text-[17px] font-bold text-gray-900">
                Technician Status
              </h2>
            </div>

            <div className="mt-4 flex flex-col gap-4">
              {technicians.map((t) => (
                <div key={t.name}>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <div className="relative">
                        <div
                          className={`flex h-8 w-8 items-center justify-center rounded-full text-[11px] font-bold ${t.avatarColor}`}
                        >
                          {t.initials}
                        </div>
                        <span
                          className={`absolute -bottom-0.5 -right-0.5 h-2.5 w-2.5 rounded-full border-2 border-white ${
                            t.status === "online"
                              ? "bg-green-500"
                              : "bg-gray-300"
                          }`}
                        />
                      </div>
                      <span
                        className={`text-sm font-medium ${
                          t.status === "off" ? "text-gray-400" : "text-gray-800"
                        }`}
                      >
                        {t.name}
                        {t.status === "off" && (
                          <span className="ml-1 text-xs text-gray-400">
                            (Off)
                          </span>
                        )}
                      </span>
                    </div>
                    <span className="text-xs font-semibold text-gray-500">
                      {t.load}% Load
                    </span>
                  </div>
                  <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-gray-100">
                    <div
                      className={`h-full rounded-full ${
                        t.load >= 80
                          ? "bg-red-500"
                          : t.load > 0
                          ? "bg-gray-400"
                          : "bg-gray-200"
                      }`}
                      style={{ width: `${t.load}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Maintenance Queue */}
          <div className="rounded-2xl border border-[#eceff4] bg-white p-5 shadow-[0_1px_2px_rgba(16,24,40,0.04)]">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <ClipboardList size={18} className="text-gray-700" strokeWidth={2.2} />
                <h2 className="text-[17px] font-bold text-gray-900">
                  Maintenance Queue
                </h2>
              </div>
              <button className="flex h-8 w-8 items-center justify-center rounded-lg border border-gray-200 text-gray-500 hover:bg-gray-50">
                <SlidersHorizontal size={14} strokeWidth={2.2} />
              </button>
            </div>

            <div className="mt-3 overflow-x-auto">
              <table className="w-full min-w-[480px] border-collapse text-left">
                <thead>
                  <tr className="text-[11px] font-semibold uppercase tracking-wide text-gray-400">
                    <th className="pb-2 pr-4 font-semibold">Task</th>
                    <th className="pb-2 pr-4 font-semibold">Asset</th>
                    <th className="pb-2 pr-4 font-semibold">Priority</th>
                    <th className="pb-2 pr-0 font-semibold">Scheduled</th>
                  </tr>
                </thead>
                <tbody>
                  {queue.map((q) => (
                    <tr
                      key={q.task}
                      className="border-t border-[#f1f3f7] text-sm"
                    >
                      <td className="py-3 pr-4 font-semibold text-gray-800">
                        {q.task}
                      </td>
                      <td className="py-3 pr-4 text-gray-500">{q.asset}</td>
                      <td className="py-3 pr-4">
                        <span
                          className={`inline-block rounded px-2 py-0.5 text-[10px] font-bold tracking-wide ${q.priorityStyle}`}
                        >
                          {q.priority}
                        </span>
                      </td>
                      <td className="py-3 pr-0 text-gray-500">
                        {q.scheduled}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Schedule Forecast */}
          <div className="rounded-2xl bg-[#1c1f26] p-5 text-white shadow-[0_1px_2px_rgba(16,24,40,0.04)]">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Calendar size={18} className="text-red-400" strokeWidth={2.2} />
                <h2 className="text-[17px] font-bold">Schedule Forecast</h2>
              </div>
              <span className="text-xs text-gray-400">Jul 2026</span>
            </div>

            <div className="mt-4 grid grid-cols-5 gap-2">
              {forecastDays.map((d) => (
                <div key={d.day} className="flex flex-col items-center gap-1.5">
                  <span className="text-[10px] font-semibold tracking-wide text-gray-500">
                    {d.day}
                  </span>
                  <div
                    className={`relative flex h-9 w-9 items-center justify-center rounded-lg text-sm font-semibold ${
                      d.active
                        ? "bg-red-600 text-white"
                        : "bg-white/5 text-gray-300"
                    }`}
                  >
                    {d.date}
                    {d.dot && (
                      <span className="absolute -top-1 -right-1 h-2 w-2 rounded-full bg-red-500" />
                    )}
                  </div>
                </div>
              ))}
            </div>

            <p className="mt-5 text-[10px] font-semibold tracking-wide text-gray-500">
              UPCOMING CRITICAL EVENT
            </p>
            <div className="mt-2 flex items-start gap-3 rounded-xl bg-white/5 p-3">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-red-500/20 text-red-400">
                <AlertTriangle size={15} strokeWidth={2.2} />
              </div>
              <div>
                <p className="text-sm font-semibold text-white">
                  Annual Facility Power-down
                </p>
                <p className="text-xs text-gray-400">Jul 28, 00:00 - 04:00</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}