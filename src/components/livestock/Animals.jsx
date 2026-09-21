import React, { useState } from "react";
import AnimalList from "./AnimalList";
import AnimalForm from "./AnimalForm";

export default function Animals() {
  const [animals, setAnimals] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [selectedAnimal, setSelectedAnimal] = useState(null);

  // ==============================
  // ADD ANIMAL
  // ==============================
  const handleAdd = () => {
    console.log("Add Animal clicked");

    setSelectedAnimal(null);
    setShowForm(true);
  };

  // ==============================
  // EDIT ANIMAL
  // ==============================
  const handleEdit = (animal) => {
    setSelectedAnimal(animal);
    setShowForm(true);
  };

  // ==============================
  // SAVE / UPDATE ANIMAL
  // ==============================
  const handleSave = (animalData) => {
    if (selectedAnimal) {
      // UPDATE
      setAnimals((prev) =>
        prev.map((animal) =>
          animal.id === selectedAnimal.id
            ? {
                ...animal,
                ...animalData,
              }
            : animal
        )
      );
    } else {
      // ADD
      const newAnimal = {
        id: crypto.randomUUID(),
        ...animalData,
      };

      setAnimals((prev) => [
        ...prev,
        newAnimal,
      ]);
    }

    setShowForm(false);
    setSelectedAnimal(null);
  };

  return (
    <div className="space-y-5">

      {/* PAGE HEADER */}
      <div>
        <h2 className="text-xl font-semibold text-slate-900">
          Farm Animals
        </h2>

        <p className="mt-1 text-sm text-slate-500">
          Manage animals, identification, ownership and current status.
        </p>
      </div>

      {/* ANIMAL LIST */}
      <AnimalList
        animals={animals}
        onAdd={handleAdd}
        onEdit={handleEdit}
      />

      {/* ADD / EDIT FORM */}
      {showForm && (
        <AnimalForm
          animal={selectedAnimal}
          onSave={handleSave}
          onClose={() => {
            setShowForm(false);
            setSelectedAnimal(null);
          }}
        />
      )}

    </div>
  );
}