import React from 'react';
import { 
  Settings, 
  ShieldCheck, 
  UserCog, 
  Database 
} from 'lucide-react';
import ModulePage from './ModulePage';

export default function SettingsPage() {
  return (
    <ModulePage 
      title="System Settings" 
      description="Configure your farm preferences, user roles, security, and data backups."
    >
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-5 border border-slate-200 rounded-xl bg-slate-50">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 bg-green-100 text-green-700 rounded-lg">
                <UserCog size={20} />
              </div>
              <h3 className="font-semibold text-slate-800">User Management</h3>
            </div>
            <p className="text-sm text-slate-500 mb-4">Manage farm manager and worker accounts, roles, and access permissions.</p>
            <button className="px-4 py-2 bg-white border border-slate-300 text-slate-700 text-sm font-medium rounded-lg hover:bg-slate-100 transition-colors">
              Manage Users
            </button>
          </div>

          <div className="p-5 border border-slate-200 rounded-xl bg-slate-50">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 bg-blue-100 text-blue-700 rounded-lg">
                <Database size={20} />
              </div>
              <h3 className="font-semibold text-slate-800">Data & Backup</h3>
            </div>
            <p className="text-sm text-slate-500 mb-4">Export farm records, database status, and backup configuration.</p>
            <button className="px-4 py-2 bg-white border border-slate-300 text-slate-700 text-sm font-medium rounded-lg hover:bg-slate-100 transition-colors">
              Backup Settings
            </button>
          </div>
        </div>
      </div>
    </ModulePage>
  );
}
