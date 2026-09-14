import React from "react";

export default function ManagementTable({
  title = "Management",
  columns = [],
  rows = [],
  onAdd,
}) {
  return (
    <div style={{ padding: "20px" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "20px",
        }}
      >
        <h2 style={{ margin: 0 }}>{title}</h2>

        {onAdd && (
          <button onClick={onAdd}>
            + Add
          </button>
        )}
      </div>

      <div
        style={{
          overflowX: "auto",
          background: "#fff",
          borderRadius: "12px",
          border: "1px solid #e5e7eb",
        }}
      >
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
          }}
        >
          <thead>
            <tr>
              {columns.map((column) => (
                <th
                  key={column}
                  style={{
                    textAlign: "left",
                    padding: "14px",
                    borderBottom: "1px solid #e5e7eb",
                  }}
                >
                  {column}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {rows.length === 0 ? (
              <tr>
                <td
                  colSpan={Math.max(columns.length, 1)}
                  style={{
                    padding: "30px",
                    textAlign: "center",
                    color: "#6b7280",
                  }}
                >
                  No records found
                </td>
              </tr>
            ) : (
              rows.map((row, index) => (
                <tr key={row.id || index}>
                  {columns.map((column) => (
                    <td
                      key={column}
                      style={{
                        padding: "14px",
                        borderBottom: "1px solid #f1f5f9",
                      }}
                    >
                      {row[column] ?? "-"}
                    </td>
                  ))}
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
