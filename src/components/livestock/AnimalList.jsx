import React from 'react';
import { Search, Plus, MoreVertical, HeartPulse } from "lucide-react";

export default function AnimalList({
  animals = [],
  onAdd,
}) {
  return (
    <div className="card">

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
          className="primary-button"
          onClick={onAdd}
        >
          <Plus size={17} />
          Add Animal
        </button>
      </div>

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
            placeholder="Search animal..."
            style={{
              border: "none",
              outline: "none",
              background: "transparent",
              width: "100%",
            }}
          />
        </div>
      </div>

      {animals.length === 0 ? (
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

          <h3>No animals found</h3>

          <p>
            Add your first farm animal.
          </p>
        </div>
      ) : (
        <div
          style={{
            display: "grid",
            gap: "12px",
          }}
        >
          {animals.map((animal) => (
            <div
              key={animal.id}
              className="important-day"
            >
              <div className="important-day-icon">
                🐄
              </div>

              <div className="important-day-content">
                <div className="important-day-title">
                  {animal.name}
                </div>

                <div className="important-day-description">
                  Tag: {animal.tagNumber}
                  {" • "}
                  {animal.status}
                </div>
              </div>

              <button className="icon-button">
                <MoreVertical size={18} />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

