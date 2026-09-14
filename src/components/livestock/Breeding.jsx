import React from 'react';
import BreedingForm from './BreedingForm';
import ManagementTable from '../common/ManagementTable';

export default function Breeding() {
  return (
    <div className="space-y-6">
      <BreedingForm />

      <ManagementTable
        title="Breeding Records"
        description="Track breeding activities and reproductive history."
        actionLabel="Add Breeding Record"
        columns={[
          { key: 'animal', label: 'Animal' },
          { key: 'date', label: 'Date' },
          { key: 'method', label: 'Method' },
          { key: 'status', label: 'Status' },
        ]}
      />
    </div>
  );
}
