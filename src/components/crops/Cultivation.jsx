import React from 'react';
import ManagementTable from '../common/ManagementTable';

export default function Cultivation() {
  return (
    <ManagementTable
      title="Cultivation"
      description="Track active crop cultivation activities."
      actionLabel="Add Cultivation"
      columns={[
        { key: 'crop', label: 'Crop' },
        { key: 'field', label: 'Field' },
        { key: 'startDate', label: 'Start Date' },
        { key: 'status', label: 'Status' },
      ]}
    />
  );
}
