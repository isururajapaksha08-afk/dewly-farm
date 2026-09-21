import React, { useEffect, useState } from "react";
import {
  X,
  Save,
  Beef,
  CalendarDays,
  Tag,
  VenusAndMars,
  Activity,
  ShoppingCart,
} from "lucide-react";

const initialForm = {
  tagId: "",
  species: "",
  breed: "",
  gender: "",
  birthDate: "",
  purchaseDate: "",
  status: "Active",
};

export default function AnimalForm({
  animal,
  onSave,
  onClose,
}) {
  const [form, setForm] = useState(initialForm);

  const isEdit = Boolean(animal);

  useEffect(() => {
    if (animal) {
      setForm({
        tagId: animal.tagId || "",
        species: animal.species || "",
        breed: animal.breed || "",
        gender: animal.gender || "",
        birthDate: animal.birthDate
          ? String(animal.birthDate).slice(0, 10)
          : "",
        purchaseDate: animal.purchaseDate
          ? String(animal.purchaseDate).slice(0, 10)
          : "",
        status: animal.status || "Active",
      });
    } else {
      setForm(initialForm);
    }
  }, [animal]);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setForm((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!form.tagId.trim()) {
      alert("Please enter Animal Tag ID.");
      return;
    }

    if (!form.species) {
      alert("Please select animal species.");
      return;
    }

    if (!form.birthDate) {
      alert("Please select birth date.");
      return;
    }

    onSave({
      ...form,
      tagId: form.tagId.trim(),
      breed: form.breed.trim() || null,
      gender: form.gender || null,
      purchaseDate: form.purchaseDate || null,
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">

      <div className="w-full max-w-3xl overflow-hidden rounded-2xl bg-white shadow-2xl">

        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-200 px-6 py-5">

          <div className="flex items-center gap-3">

            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-green-100 text-green-600">
              <Beef size={22} />
            </div>

            <div>
              <h2 className="text-xl font-semibold text-slate-900">
                {isEdit ? "Edit Animal" : "Add New Animal"}
              </h2>

              <p className="text-sm text-slate-500">
                {isEdit
                  ? "Update animal information"
                  : "Enter the details of the new farm animal"}
              </p>
            </div>

          </div>

          <button
            type="button"
            onClick={onClose}
            className="rounded-lg p-2 text-slate-500 hover:bg-slate-100"
          >
            <X size={20} />
          </button>

        </div>

        {/* Form */}
        <form onSubmit={handleSubmit}>

          <div className="max-h-[70vh] overflow-y-auto px-6 py-6">

            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">

              {/* Tag ID */}
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  Animal Tag ID *
                </label>

                <div className="relative">
                  <Tag
                    size={18}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                  />

                  <input
                    type="text"
                    name="tagId"
                    value={form.tagId}
                    onChange={handleChange}
                    placeholder="e.g. COW-001"
                    className="w-full rounded-xl border border-slate-300 py-3 pl-10 pr-3 outline-none focus:border-green-500 focus:ring-2 focus:ring-green-100"
                  />
                </div>
              </div>

              {/* Species */}
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  Species *
                </label>

                <div className="relative">
                  <Beef
                    size={18}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                  />

                  <select
                    name="species"
                    value={form.species}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-slate-300 bg-white py-3 pl-10 pr-3 outline-none focus:border-green-500 focus:ring-2 focus:ring-green-100"
                  >
                    <option value="">
                      Select species
                    </option>

                    <option value="Cattle">
                      Cattle
                    </option>

                    <option value="Buffalo">
                      Buffalo
                    </option>

                    <option value="Goat">
                      Goat
                    </option>

                    <option value="Sheep">
                      Sheep
                    </option>

                    <option value="Pig">
                      Pig
                    </option>

                    <option value="Chicken">
                      Chicken
                    </option>

                    <option value="Other">
                      Other
                    </option>
                  </select>
                </div>
              </div>

              {/* Breed */}
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  Breed
                </label>

                <input
                  type="text"
                  name="breed"
                  value={form.breed}
                  onChange={handleChange}
                  placeholder="e.g. Jersey"
                  className="w-full rounded-xl border border-slate-300 px-3 py-3 outline-none focus:border-green-500 focus:ring-2 focus:ring-green-100"
                />
              </div>

              {/* Gender */}
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  Gender
                </label>

                <div className="relative">
                  <VenusAndMars
                    size={18}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                  />

                  <select
                    name="gender"
                    value={form.gender}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-slate-300 bg-white py-3 pl-10 pr-3 outline-none focus:border-green-500 focus:ring-2 focus:ring-green-100"
                  >
                    <option value="">
                      Select gender
                    </option>

                    <option value="Male">
                      Male
                    </option>

                    <option value="Female">
                      Female
                    </option>
                  </select>
                </div>
              </div>

              {/* Birth Date */}
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  Birth Date *
                </label>

                <div className="relative">
                  <CalendarDays
                    size={18}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                  />

                  <input
                    type="date"
                    name="birthDate"
                    value={form.birthDate}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-slate-300 py-3 pl-10 pr-3 outline-none focus:border-green-500 focus:ring-2 focus:ring-green-100"
                  />
                </div>
              </div>

              {/* Purchase Date */}
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  Purchase Date
                </label>

                <div className="relative">
                  <ShoppingCart
                    size={18}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                  />

                  <input
                    type="date"
                    name="purchaseDate"
                    value={form.purchaseDate}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-slate-300 py-3 pl-10 pr-3 outline-none focus:border-green-500 focus:ring-2 focus:ring-green-100"
                  />
                </div>
              </div>

              {/* Status */}
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  Status *
                </label>

                <div className="relative">
                  <Activity
                    size={18}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                  />

                  <select
                    name="status"
                    value={form.status}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-slate-300 bg-white py-3 pl-10 pr-3 outline-none focus:border-green-500 focus:ring-2 focus:ring-green-100"
                  >
                    <option value="Active">
                      Active
                    </option>

                    <option value="Sick">
                      Sick
                    </option>

                    <option value="Pregnant">
                      Pregnant
                    </option>

                    <option value="Quarantine">
                      Quarantine
                    </option>

                    <option value="Sold">
                      Sold
                    </option>

                    <option value="Deceased">
                      Deceased
                    </option>
                  </select>
                </div>
              </div>

            </div>
          </div>

          {/* Footer */}
          <div className="flex justify-end gap-3 border-t border-slate-200 bg-slate-50 px-6 py-4">

            <button
              type="button"
              onClick={onClose}
              className="rounded-xl border border-slate-300 bg-white px-5 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-100"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="flex items-center gap-2 rounded-xl bg-green-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-green-700"
            >
              <Save size={17} />

              {isEdit
                ? "Update Animal"
                : "Save Animal"}
            </button>

          </div>

        </form>
      </div>
    </div>
  );
}