import React from 'react';
import ManagementTable from '../common/ManagementTable';

export default function Suppliers() {
  return (
    <ManagementTable
      title="Suppliers"
      description="Manage farm suppliers and purchasing contacts."
      actionLabel="Add Supplier"
      columns={[
        { key: 'name', label: 'Supplier' },
        { key: 'phone', label: 'Phone' },
        { key: 'email', label: 'Email' },
        { key: 'status', label: 'Status' },
      ]}
    />
  );
}
