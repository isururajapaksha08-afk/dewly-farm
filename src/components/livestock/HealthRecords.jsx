import React from 'react';
import ManagementTable from '../common/ManagementTable';

export default function HealthRecords() {
  return (
    <ManagementTable
      title="Animal Health Records"
      description="Track veterinary visits, diagnoses and treatments."
      actionLabel="Add Health Record"
      columns={[
        { key: 'animal', label: 'Animal' },
        { key: 'date', label: 'Date' },
        { key: 'condition', label: 'Condition' },
        { key: 'status', label: 'Status' },
      ]}
    />
  );
}
