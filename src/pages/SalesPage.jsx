
import React, { useState } from 'react';
import {
  ShoppingCart,
  Users
} from 'lucide-react';

import ModulePage from './ModulePage';

import Sales from '../components/sales/Sales';
import Customers from '../components/sales/Customers';

export default function SalesPage() {
  const [activeSubTab, setActiveSubTab] = useState('sales');

  const subTabs = [
    {
      id: 'sales',
      label: 'Sales Orders',
      icon: ShoppingCart,
    },
    {
      id: 'customers',
      label: 'Customers',
      icon: Users,
    },
  ];

  const renderContent = () => {
    switch (activeSubTab) {
      case 'sales':
        return <Sales />;

      case 'customers':
        return <Customers />;

      default:
        return <Sales />;
    }
  };

  return (
    <ModulePage
      title="Sales & Customers Management"
      description="Track farm sales orders, items, and customer details."
    >
      {/* Sub Navigation */}
      <div className="flex flex-wrap gap-2 border-b border-slate-200 pb-4 mb-6">
        {subTabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeSubTab === tab.id;

          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveSubTab(tab.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                isActive
                  ? 'bg-green-600 text-white shadow-sm'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              <Icon size={16} />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* Content */}
      <div className="mt-4">
        {renderContent()}
      </div>
    </ModulePage>
  );
}

