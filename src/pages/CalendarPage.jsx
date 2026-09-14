import React from 'react';
import {
  CalendarDays,
  Clock,
  AlertTriangle,
} from "lucide-react";

const events = [
  {
    title: "Cow 001 - Expected Calving",
    date: "2026-09-15",
    type: "CALVING",
    priority: "HIGH",
  },
  {
    title: "Cow 004 - Vaccination",
    date: "2026-09-18",
    type: "VACCINATION",
    priority: "MEDIUM",
  },
  {
    title: "Hive 03 - Inspection",
    date: "2026-09-20",
    type: "HIVE_INSPECTION",
    priority: "LOW",
  },
  {
    title: "Field 02 - Harvest",
    date: "2026-09-22",
    type: "HARVEST",
    priority: "HIGH",
  },
];

export default function CalendarPage() {
  return (
    <div className="p-6 space-y-6 max-w-7xl mx-auto">
      {/* Page Header */}
      <div className="flex flex-col gap-1">
        <h1 className="text-2xl font-bold text-slate-800 flex items-center gap-2">
          <CalendarDays className="text-green-600" size={28} />
          Farm Calendar
        </h1>
        <p className="text-sm text-slate-500">
          Important farm events and upcoming activities
        </p>
      </div>

      {/* Upcoming Events Card */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
        <div className="flex items-center gap-2 font-semibold text-slate-700 text-lg mb-4 pb-3 border-b border-slate-100">
          <CalendarDays size={20} className="text-green-600" />
          Upcoming Events
        </div>

        <div className="space-y-3">
          {events.map((event) => (
            <div
              key={`${event.title}-${event.date}`}
              className="flex items-center justify-between p-4 rounded-lg bg-slate-50 border border-slate-100 hover:bg-slate-100/60 transition-colors"
            >
              <div className="flex items-center gap-4">
                <span className="text-2xl p-2 bg-white rounded-lg shadow-xs border border-slate-200">
                  {event.type === "CALVING"
                    ? "🐄"
                    : event.type === "VACCINATION"
                    ? "💉"
                    : event.type === "HIVE_INSPECTION"
                    ? "🐝"
                    : "🌾"}
                </span>
                <div>
                  <h4 className="font-medium text-slate-800 text-sm">
                    {event.title}
                  </h4>
                  <p className="text-xs text-slate-500 flex items-center gap-1 mt-0.5">
                    <Clock size={12} />
                    {event.date}
                  </p>
                </div>
              </div>

              <span className={`px-2.5 py-1 text-xs font-semibold rounded-full uppercase ${
                event.priority === 'HIGH' 
                  ? 'bg-red-100 text-red-700' 
                  : event.priority === 'MEDIUM' 
                  ? 'bg-amber-100 text-amber-700' 
                  : 'bg-green-100 text-green-700'
              }`}>
                {event.priority}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Event Types Legend Card */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
        <div className="flex items-center gap-2 font-semibold text-slate-700 text-lg mb-4 pb-3 border-b border-slate-100">
          <AlertTriangle size={20} className="text-amber-500" />
          Event Types Legend
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm text-slate-600">
          <div className="flex items-center gap-2 p-2 rounded-lg bg-slate-50"><span>🐄</span> Calving & Birth</div>
          <div className="flex items-center gap-2 p-2 rounded-lg bg-slate-50"><span>💉</span> Vaccination</div>
          <div className="flex items-center gap-2 p-2 rounded-lg bg-slate-50"><span>🌾</span> Crop Harvest</div>
          <div className="flex items-center gap-2 p-2 rounded-lg bg-slate-50"><span>🐝</span> Hive Inspection</div>
          <div className="flex items-center gap-2 p-2 rounded-lg bg-slate-50"><span>🍯</span> Honey Harvest</div>
          <div className="flex items-center gap-2 p-2 rounded-lg bg-slate-50"><span>🔧</span> Equipment Service</div>
        </div>
      </div>
    </div>
  );
}