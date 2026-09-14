import React from 'react';
import ManagementTable from '../common/ManagementTable';

export default function FeedUsage() {
  return (
    <ManagementTable
      title="Feed Usage"
      description="Track livestock feed consumption and usage."
      actionLabel="Add Feed Usage"
      columns={[
        { key: 'feed', label: 'Feed' },
        { key: 'animalGroup', label: 'Animal Group' },
        { key: 'quantity', label: 'Quantity' },
        { key: 'date', label: 'Date' },
      ]}
    />
  );
}
