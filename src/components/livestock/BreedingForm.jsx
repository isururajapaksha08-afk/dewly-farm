import React, { useState } from 'react';

export default function BreedingForm({ animal, onSave, onCancel }) {
  const [form, setForm] = useState({ mateId: "", date: "", expectedBirthDate: "", outcome: "PENDING", notes: "" });

  function update(field, value) {
    setForm(prev => ({ ...prev, [field]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    onSave({ animal, ...form });
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 max-w-2xl mx-auto">
      <div className="mb-6 pb-4 border-b border-slate-100">
        <h2 className="text-xl font-bold text-slate-800">Add Breeding / Calving Record</h2>
        <p className="text-sm text-slate-500">Animal: {animal?.name || "Selected Animal"}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold text-slate-600 uppercase mb-1">Mate ID / Bull</label>
          <input value={form.mateId} onChange={e => update('mateId', e.target.value)} placeholder="Enter ID" className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm outline-none focus:border-green-600" />
        </div>
        <div>
          <label className="block text-xs font-semibold text-slate-600 uppercase mb-1">Breeding Date</label>
          <input type="date" value={form.date} onChange={e => update('date', e.target.value)} required className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm outline-none focus:border-green-600" />
        </div>
        <div>
          <label className="block text-xs font-semibold text-slate-600 uppercase mb-1">Expected Birth Date</label>
          <input type="date" value={form.expectedBirthDate} onChange={e => update('expectedBirthDate', e.target.value)} className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm outline-none focus:border-green-600" />
        </div>
        <div>
          <label className="block text-xs font-semibold text-slate-600 uppercase mb-1">Outcome Status</label>
          <select value={form.outcome} onChange={e => update('outcome', e.target.value)} className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm outline-none bg-white">
            <option value="PENDING">Pending</option>
            <option value="PREGNANT">Pregnant</option>
            <option value="BORN">Birth Completed</option>
            <option value="FAILED">Failed</option>
          </select>
        </div>
        <div className="md:col-span-2">
          <label className="block text-xs font-semibold text-slate-600 uppercase mb-1">Notes</label>
          <textarea value={form.notes} onChange={e => update('notes', e.target.value)} rows={3} placeholder="Additional notes..." className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm outline-none"></textarea>
        </div>
      </div>

      <div className="flex justify-end gap-3 mt-6">
        <button type="button" onClick={onCancel} className="px-4 py-2 border border-slate-200 rounded-lg text-sm font-medium text-slate-600 hover:bg-slate-50">Cancel</button>
        <button type="submit" className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg text-sm font-medium transition-colors">Save Record</button>
      </div>
    </form>
  );
}
