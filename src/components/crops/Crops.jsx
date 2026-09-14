import React from 'react';
import ManagementTable from '../common/ManagementTable';

export default function Crops() {
  return (
    <ManagementTable
      title="Crop Types"
      description="Manage crops grown across the farm."
      actionLabel="Add Crop"
      columns={[
        { key: 'name', label: 'Crop' },
        { key: 'category', label: 'Category' },
        { key: 'season', label: 'Season' },
        { key: 'status', label: 'Status' },
      ]}
    />
  );
}
