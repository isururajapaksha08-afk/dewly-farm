import React, { useState } from "react";
import {
  Search,
  Plus,
  MoreVertical,
  HeartPulse,
  Pencil,
  Eye,
} from "lucide-react";

export default function AnimalList({
  animals = [],
  onAdd,
  onEdit,
  onView,
}) {
  const [search, setSearch] = useState("");
  const [menuId, setMenuId] = useState(null);

  const filteredAnimals = animals.filter((animal) => {
    const value = search.toLowerCase();

    return (
      animal.tagId?.toLowerCase().includes(value) ||
      animal.species?.toLowerCase().includes(value) ||
      animal.breed?.toLowerCase().includes(value) ||
      animal.gender?.toLowerCase().includes(value)
    );
  });

  return (
    <div className="card">

      {/* Header */}
      <div className="card-header">
        <div>
          <div className="card-title">
            Livestock
          </div>

          <div className="card-subtitle">
            Manage all farm animals
          </div>
        </div>

        <button
  type="button"
  onClick={onAdd}
  className="primary-button"
>
  <Plus size={17} />
  Add Animal
</button>
      </div>

      {/* Search */}
      <div
        style={{
          display: "flex",
          gap: "12px",
          marginBottom: "20px",
        }}
      >
        <div
          style={{
            flex: 1,
            display: "flex",
            alignItems: "center",
            gap: "10px",
            background: "#f8fafc",
            padding: "12px 14px",
            borderRadius: "12px",
          }}
        >
          <Search size={18} />

          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search animal by tag, species, breed..."
            style={{
              border: "none",
              outline: "none",
              background: "transparent",
              width: "100%",
            }}
          />
        </div>
      </div>

      {/* Empty */}
      {filteredAnimals.length === 0 ? (
        <div
          style={{
            textAlign: "center",
            padding: "50px",
            color: "#718096",
          }}
        >
          <HeartPulse
            size={40}
            style={{ marginBottom: "10px" }}
          />

          <h3>
            No animals found
          </h3>

          <p>
            {search
              ? "No animals match your search."
              : "Add your first farm animal."}
          </p>
        </div>
      ) : (

        /* Animal List */
        <div
          style={{
            display: "grid",
            gap: "12px",
          }}
        >
          {filteredAnimals.map((animal) => (

            <div
              key={animal.id}
              className="important-day"
              style={{
                position: "relative",
              }}
            >

              <div className="important-day-icon">
                🐄
              </div>

              <div
                className="important-day-content"
                style={{ cursor: "pointer" }}
                onClick={() => onView?.(animal)}
              >
                <div className="important-day-title">
                  {animal.tagId}
                </div>

                <div className="important-day-description">
                  {animal.species}
                  {" • "}
                  {animal.breed || "No breed"}
                  {" • "}
                  {animal.gender || "Unknown"}
                  {" • "}
                  {animal.status}
                </div>
              </div>

              <button
                className="icon-button"
                onClick={() =>
                  setMenuId(
                    menuId === animal.id
                      ? null
                      : animal.id
                  )
                }
              >
                <MoreVertical size={18} />
              </button>

              {/* Action Menu */}
              {menuId === animal.id && (
                <div
                  style={{
                    position: "absolute",
                    right: "15px",
                    top: "52px",
                    zIndex: 20,
                    background: "white",
                    border: "1px solid #e2e8f0",
                    borderRadius: "12px",
                    boxShadow:
                      "0 10px 25px rgba(0,0,0,0.10)",
                    minWidth: "160px",
                    overflow: "hidden",
                  }}
                >
                  <button
                    onClick={() => {
                      setMenuId(null);
                      onView?.(animal);
                    }}
                    style={{
                      width: "100%",
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                      padding: "11px 14px",
                      border: "none",
                      background: "white",
                      cursor: "pointer",
                      textAlign: "left",
                    }}
                  >
                    <Eye size={16} />
                    View Details
                  </button>

                  <button
                    onClick={() => {
                      setMenuId(null);
                      onEdit?.(animal);
                    }}
                    style={{
                      width: "100%",
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                      padding: "11px 14px",
                      border: "none",
                      background: "white",
                      cursor: "pointer",
                      textAlign: "left",
                    }}
                  >
                    <Pencil size={16} />
                    Edit Animal
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}