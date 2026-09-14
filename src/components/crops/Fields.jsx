import React from 'react';
import ManagementTable from '../common/ManagementTable';

export default function Fields() {
  return (
    <ManagementTable
      title="Farm Fields"
      description="Manage cultivated land, field locations, sizes and status."
      actionLabel="Add Field"
      columns={[
        { key: 'name', label: 'Field' },
        { key: 'location', label: 'Location' },
        { key: 'area', label: 'Area' },
        { key: 'status', label: 'Status' },
      ]}
    />
  );
}
