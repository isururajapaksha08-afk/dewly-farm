import React from 'react';
import AnimalList from './AnimalList';

export default function Animals() {
  return (
    <div className="space-y-5">
      <div>
        <h2 className="text-xl font-semibold text-slate-900">
          Farm Animals
        </h2>
        <p className="mt-1 text-sm text-slate-500">
          Manage animals, identification, ownership and current status.
        </p>
      </div>

      <AnimalList />
    </div>
  );
}
