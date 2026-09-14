import React, { useState } from 'react';
import { 
  Sprout, 
  Map, 
  Wheat, 
  CalendarDays, 
  Scissors, 
  Boxes 
} from 'lucide-react';
import ModulePage from './ModulePage';

import Fields from '../components/crops/Fields';
import Crops from '../components/crops/Crops';
import Cultivation from '../components/crops/Cultivation';
import Harvest from '../components/crops/Harvest';
import Silage from '../components/crops/Silage';

export default function CropsPage() {
  const [activeSubTab, setActiveSubTab] = useState('fields');

  const subTabs = [
    { id: 'fields', label: 'Fields', icon: Map },
    { id: 'crops', label: 'Crops', icon: Sprout },
    { id: 'cultivation', label: 'Cultivation', icon: Wheat },
    { id: 'harvest', label: 'Harvest', icon: Scissors },
    { id: 'silage', label: 'Silage', icon: Boxes },
  ];

  const renderContent = () => {
    switch (activeSubTab) {
      case 'fields': return <Fields />;
      case 'crops': return <Crops />;
      case 'cultivation': return <Cultivation />;
      case 'harvest': return <Harvest />;
      case 'silage': return <Silage />;
      default: return <Fields />;
    }
  };

  return (
    <ModulePage 
      title="Crops & Fields Management" 
      description="Manage farm fields, crop types, active cultivations, harvest records, and silage batches."
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