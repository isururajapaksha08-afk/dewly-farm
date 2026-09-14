import React from 'react';
import ManagementTable from '../common/ManagementTable';

export default function HoneyHarvest() {
  return (
    <ManagementTable
      title="Honey Harvest"
      description="Track honey collection batches and quantities."
      actionLabel="Add Harvest"
      columns={[
        { key: 'hive', label: 'Hive' },
        { key: 'date', label: 'Harvest Date' },
        { key: 'quantity', label: 'Quantity' },
        { key: 'quality', label: 'Quality' },
      ]}
    />
  );
}
