import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Clock, Mail, Calendar, Sparkles } from 'lucide-react';

export const TaskBoardMock = () => (
  <div className="x-panel p-4 w-full max-w-sm">
    <div className="flex items-center justify-between mb-3">
      <p className="text-sm font-semibold">All tasks</p>
      <span className="text-[11px] rounded-full bg-amber-100 text-amber-700 px-2 py-0.5">Waiting for approval</span>
    </div>
    <ul className="space-y-2 text-sm">
      {[
        ['Patient intake', 'Due tonight'],
        ['KYC review', '2 days ago'],
        ['Lease renewal', '70% prepared'],
        ['Rent reminder', 'Sent to tenants'],
        ['Line downtime alert', 'Live'],
      ].map(([title, meta]) => (
        <li key={title} className="flex items-center justify-between rounded-xl bg-white px-3 py-2 shadow-sm">
          <span className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-500" />{title}</span>
          <span className="text-[11px] text-neutral-500">{meta}</span>
        </li>
      ))}
    </ul>
  </div>
);

export const AssistantMock = () => (
  <div className="x-panel p-4 w-full max-w-sm">
    <p className="text-sm font-semibold mb-3">What can I help with?</p>
    <div className="rounded-2xl bg-white p-3 text-sm text-neutral-600 mb-3">
      Whether you want help with patient intake, KYC, or tenant chat — just give the command.
    </div>
    <div className="flex flex-wrap gap-2 mb-3">
      {['Add document', 'Analyze', 'Schedule', 'Research'].map((chip) => (
        <span key={chip} className="rounded-full bg-emerald-100 text-emerald-800 text-[11px] px-3 py-1">{chip}</span>
      ))}
    </div>
    <div className="flex items-center gap-2 rounded-full bg-white px-3 py-2">
      <Sparkles className="h-4 w-4 text-emerald-500" />
      <span className="text-xs text-neutral-400">Ask Aioxify…</span>
    </div>
  </div>
);

export const OutreachMock = () => (
  <div className="x-panel p-4 w-full max-w-sm overflow-hidden">
    <div className="flex items-center justify-between mb-3">
      <p className="text-sm font-semibold flex items-center gap-2"><Mail className="h-4 w-4" /> Email sending</p>
      <span className="text-[11px] rounded-full bg-sky-100 text-sky-700 px-2 py-0.5">Live</span>
    </div>
    <div className="space-y-2">
      {[
        ['Dr. Anya Sharma', 'InnovateHealth'],
        ['Mark Chen', 'FinFlow Solutions'],
        ['Sarah Miller', 'UrbanNest'],
      ].map(([name, company]) => (
        <div key={name} className="rounded-xl bg-white px-3 py-2 flex items-center justify-between">
          <div>
            <p className="text-sm font-medium">{name}</p>
            <p className="text-[11px] text-neutral-500">{company}</p>
          </div>
          <span className="text-[10px] rounded-full bg-emerald-100 text-emerald-700 px-2 py-0.5">Verified</span>
        </div>
      ))}
    </div>
  </div>
);

export const ScheduleMock = () => (
  <div className="x-panel p-4 w-full max-w-sm">
    <p className="text-sm font-semibold mb-1">Hey there</p>
    <p className="text-xs text-neutral-500 mb-3">Here is your custom project & schedule</p>
    <div className="rounded-xl bg-white p-3 mb-3">
      <p className="text-xs text-neutral-500">Ongoing project</p>
      <p className="text-sm font-semibold">Customer support chatbot</p>
      <div className="mt-2 h-2 rounded-full bg-neutral-200">
        <motion.div className="h-2 rounded-full bg-emerald-500" initial={{ width: '0%' }} animate={{ width: '90%' }} transition={{ duration: 1.4 }} />
      </div>
      <p className="text-[11px] mt-1 text-emerald-700">90% finished</p>
    </div>
    <div className="flex gap-1 mb-3">
      {['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'].map((d, i) => (
        <span key={d} className={`flex-1 text-center text-[10px] py-1 rounded-md ${i === 2 ? 'bg-emerald-500 text-white' : 'bg-white'}`}>{d}</span>
      ))}
    </div>
    <div className="rounded-xl bg-white px-3 py-2 text-sm flex items-center gap-2">
      <Calendar className="h-4 w-4" /> Discovery call · 10:00–10:30
    </div>
    <div className="rounded-xl bg-white px-3 py-2 text-sm flex items-center gap-2 mt-2">
      <Clock className="h-4 w-4" /> Custom automation · 18:00–18:30
    </div>
  </div>
);
