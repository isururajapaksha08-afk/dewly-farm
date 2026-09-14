import React, { useState } from 'react';
import { 
  Users, 
  ClipboardList 
} from 'lucide-react';
import ModulePage from './ModulePage';

import Employees from '../components/employees/Employees';
import WorkRecords from '../components/employees/WorkRecords';

export default function EmployeesPage() {
  const [activeSubTab, setActiveSubTab] = useState('employees');

  const subTabs = [
    { id: 'employees', label: 'Employees', icon: Users },
    { id: 'workrecords', label: 'Work Records', icon: ClipboardList },
  ];

  const renderContent = () => {
    switch (activeSubTab) {
      case 'employees': return <Employees />;
      case 'workrecords': return <WorkRecords />;
      default: return <Employees />;
    }
  };

  return (
    <ModulePage 
      title="Employees & Work Records" 
      description="Manage farm staff, roles, and daily employee work records."
    >
      {/* Sub-navigation tabs */}
      <div className="flex flex-wrap gap-2 border-b border-slate-200 pb-4 mb-6">
        {subTabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeSubTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveSubTab(tab.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                isActive 
                  ? 'bg-green-600 text-white shadow-sm' 
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              <Icon size={16} />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* Active Tab Content Area */}
      <div className="mt-4">
        {renderContent()}
      </div>
    </ModulePage>
  );
}