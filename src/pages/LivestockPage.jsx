import React, { useState } from 'react';
import { 
  Beef, 
  HeartPulse, 
  Syringe, 
  Dna, 
  Warehouse, 
  Tag,
  Activity
} from 'lucide-react';
import ModulePage from './ModulePage';

import Animals from '../components/livestock/Animals';
import AnimalTypes from '../components/livestock/AnimalTypes';
import Breeds from '../components/livestock/Breeds';
import Sheds from '../components/livestock/Sheds';
import HealthRecords from '../components/livestock/HealthRecords';
import Vaccinations from '../components/livestock/Vaccinations';
import Breeding from '../components/livestock/Breeding';

export default function LivestockPage() {
  const [activeSubTab, setActiveSubTab] = useState('animals');

  const subTabs = [
    { id: 'animals', label: 'Animals', icon: Beef },
    { id: 'types', label: 'Animal Types', icon: Tag },
    { id: 'breeds', label: 'Breeds', icon: Dna },
    { id: 'sheds', label: 'Sheds', icon: Warehouse },
    { id: 'health', label: 'Health Records', icon: HeartPulse },
    { id: 'vaccinations', label: 'Vaccinations', icon: Syringe },
    { id: 'breeding', label: 'Breeding', icon: Activity },
  ];

  const renderContent = () => {
    switch (activeSubTab) {
      case 'animals': return <Animals />;
      case 'types': return <AnimalTypes />;
      case 'breeds': return <Breeds />;
      case 'sheds': return <Sheds />;
      case 'health': return <HealthRecords />;
      case 'vaccinations': return <Vaccinations />;
      case 'breeding': return <Breeding />;
      default: return <Animals />;
    }
  };

  return (
    <ModulePage 
      title="Livestock Management" 
      description="Manage all farm animals, health records, sheds, vaccinations, and breeding schedules."
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
