import React from 'react';
import ManagementTable from '../common/ManagementTable';

export default function Customers() {
  return (
    <ManagementTable
      title="Customers"
      description="Manage farm customers and contact information."
      actionLabel="Add Customer"
      columns={[
        { key: 'name', label: 'Customer' },
        { key: 'phone', label: 'Phone' },
        { key: 'email', label: 'Email' },
        { key: 'status', label: 'Status' },
      ]}
    />
  );
}
