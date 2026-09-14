import React, { useState } from 'react';
import { 
  Wallet, 
  TrendingUp, 
  TrendingDown, 
  PieChart 
} from 'lucide-react';
import ModulePage from './ModulePage';

import Income from '../components/finance/Income';
import Expenses from '../components/finance/Expenses';
import FinanceSummary from '../components/finance/FinanceSummary';

export default function FinancePage() {
  const [activeSubTab, setActiveSubTab] = useState('summary');

  const subTabs = [
    { id: 'summary', label: 'Financial Summary', icon: PieChart },
    { id: 'income', label: 'Income', icon: TrendingUp },
    { id: 'expenses', label: 'Expenses', icon: TrendingDown },
  ];

  const renderContent = () => {
    switch (activeSubTab) {
      case 'summary': return <FinanceSummary />;
      case 'income': return <Income />;
      case 'expenses': return <Expenses />;
      default: return <FinanceSummary />;
    }
  };

  return (
    <ModulePage 
      title="Finance Management" 
      description="Track farm income, expenses, and overall financial summaries."
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