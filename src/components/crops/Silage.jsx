import React from 'react';
import ManagementTable from '../common/ManagementTable';

export default function Silage() {
  return (
    <ManagementTable
      title="Silage Batches"
      description="Manage silage production, storage and quantities."
      actionLabel="Add Silage"
      columns={[
        { key: 'batch', label: 'Batch' },
        { key: 'crop', label: 'Crop' },
        { key: 'quantity', label: 'Quantity' },
        { key: 'status', label: 'Status' },
      ]}
    />
  );
}
