import React from 'react';
import ManagementTable from '../common/ManagementTable';

export default function AnimalTypes() {
  return (
    <ManagementTable
      title="Animal Types"
      description="Manage livestock species and animal categories."
      actionLabel="Add Animal Type"
      columns={[
        { key: 'name', label: 'Name' },
        { key: 'description', label: 'Description' },
        { key: 'status', label: 'Status' },
      ]}
    />
  );
}
