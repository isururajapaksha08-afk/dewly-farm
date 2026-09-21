import React, { useState } from "react";
import AnimalList from "./AnimalList";
import AnimalForm from "./AnimalForm";

export default function Animals() {
  const [showForm, setShowForm] = useState(false);
  const [selectedAnimal, setSelectedAnimal] = useState(null);

  const handleAdd = () => {
    console.log("ADD ANIMAL CLICKED");
    setSelectedAnimal(null);
    setShowForm(true);
  };

  const handleEdit = (animal) => {
    console.log("EDIT ANIMAL:", animal);
    setSelectedAnimal(animal);
    setShowForm(true);
  };

  const handleClose = () => {
    setShowForm(false);
    setSelectedAnimal(null);
  };

  // Show Animal Form
  if (showForm) {
    return (
      <AnimalForm
        animal={selectedAnimal}
        onClose={handleClose}
      />
    );
  }

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

      <AnimalList
        onAdd={handleAdd}
        onEdit={handleEdit}
      />

    </div>
  );
}