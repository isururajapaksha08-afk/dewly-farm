import React from 'react';
import ManagementTable from '../common/ManagementTable';

export default function Harvest() {
  return (
    <ManagementTable
      title="Harvest Records"
      description="Track harvested crops and quantities."
      actionLabel="Add Harvest"
      columns={[
        { key: 'crop', label: 'Crop' },
        { key: 'field', label: 'Field' },
        { key: 'quantity', label: 'Quantity' },
        { key: 'date', label: 'Harvest Date' },
      ]}
    />
  );
}
