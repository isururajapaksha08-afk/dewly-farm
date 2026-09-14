import React from 'react';
import ManagementTable from '../common/ManagementTable';

export default function Sales() {
  return (
    <ManagementTable
      title="Sales Orders"
      description="Manage farm sales, customers and transaction records."
      actionLabel="Create Sale"
      columns={[
        { key: 'saleNumber', label: 'Sale No.' },
        { key: 'customer', label: 'Customer' },
        { key: 'date', label: 'Date' },
        { key: 'amount', label: 'Amount' },
        { key: 'status', label: 'Status' },
      ]}
    />
  );
}
