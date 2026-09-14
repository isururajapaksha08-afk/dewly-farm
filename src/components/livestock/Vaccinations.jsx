import React from 'react';
import ManagementTable from '../common/ManagementTable';

export default function Vaccinations() {
  return (
    <ManagementTable
      title="Vaccinations"
      description="Track animal vaccination schedules and history."
      actionLabel="Add Vaccination"
      columns={[
        { key: 'animal', label: 'Animal' },
        { key: 'vaccine', label: 'Vaccine' },
        { key: 'date', label: 'Date' },
        { key: 'nextDate', label: 'Next Due' },
      ]}
    />
  );
}
