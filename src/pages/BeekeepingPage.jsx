import React, { useState } from 'react';
import { 
  Hexagon, 
  Boxes 
} from 'lucide-react';
import ModulePage from './ModulePage';

import BeeHives from '../components/beekeeping/BeeHives';
import HoneyHarvest from '../components/beekeeping/HoneyHarvest';

export default function BeekeepingPage() {
  const [activeSubTab, setActiveSubTab] = useState('hives');

  const subTabs = [
    { id: 'hives', label: 'Bee Hives', icon: Hexagon },
    { id: 'harvest', label: 'Honey Harvest', icon: Boxes },
  ];

  const renderContent = () => {
    switch (activeSubTab) {
      case 'hives': return <BeeHives />;
      case 'harvest': return <HoneyHarvest />;
      default: return <BeeHives />;
    }
  };

  return (
    <ModulePage 
      title="Beekeeping Management" 
      description="Track bee hives, health inspections, and honey harvest collections."
    >
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
      <div className="mt-4">
        {renderContent()}
      </div>
    </ModulePage>
  );
}