import React from 'react';
import ManagementTable from '../common/ManagementTable';

export default function BeeHives() {
  return (
    <ManagementTable
      title="Bee Hives"
      description="Manage hive locations, colonies and hive status."
      actionLabel="Add Hive"
      columns={[
        { key: 'hiveNumber', label: 'Hive' },
        { key: 'location', label: 'Location' },
        { key: 'colony', label: 'Colony' },
        { key: 'status', label: 'Status' },
      ]}
    />
  );
}
