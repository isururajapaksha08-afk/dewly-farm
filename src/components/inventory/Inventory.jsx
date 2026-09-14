import React from 'react';
import ManagementTable from '../common/ManagementTable';

export default function Inventory() {
  return (
    <ManagementTable
      title="Inventory Stock"
      description="Manage feed, medicine, supplies and farm stock."
      actionLabel="Add Item"
      columns={[
        { key: 'name', label: 'Item' },
        { key: 'category', label: 'Category' },
        { key: 'quantity', label: 'Quantity' },
        { key: 'unit', label: 'Unit' },
        { key: 'status', label: 'Status' },
      ]}
    />
  );
}
