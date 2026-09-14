import React, { useState } from 'react';
import { 
  Package, 
  Truck, 
  ArrowLeftRight, 
  Wheat, 
  Layers 
} from 'lucide-react';
import ModulePage from './ModulePage';

import Inventory from '../components/inventory/Inventory';
import Suppliers from '../components/inventory/Suppliers';
import StockTransactions from '../components/inventory/StockTransactions';
import FeedUsage from '../components/inventory/FeedUsage';

export default function InventoryPage() {
  const [activeSubTab, setActiveSubTab] = useState('inventory');

  const subTabs = [
    { id: 'inventory', label: 'Inventory Stock', icon: Package },
    { id: 'suppliers', label: 'Suppliers', icon: Truck },
    { id: 'transactions', label: 'Stock Transactions', icon: ArrowLeftRight },
    { id: 'feed', label: 'Feed Usage', icon: Wheat },
  ];

  const renderContent = () => {
    switch (activeSubTab) {
      case 'inventory': return <Inventory />;
      case 'suppliers': return <Suppliers />;
      case 'transactions': return <StockTransactions />;
      case 'feed': return <FeedUsage />;
      default: return <Inventory />;
    }
  };

  return (
    <ModulePage 
      title="Inventory Management" 
      description="Track farm stock, suppliers, inventory transactions, and feed usage."
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