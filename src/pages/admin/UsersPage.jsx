import { useEffect, useState } from "react";
import {
  UserPlus,
  Search,
  UserCheck,
  UserX,
} from "lucide-react";

import {
  listUsers,
  createUser as createUserInDB,
  createUserAccess,
} from "../../dataconnect-generated/users/esm/index.esm.js";

// Temporary seed farm ID for development/testing
const FARM_ID = "10000000-0000-0000-0000-000000000001";

export default function UsersPage() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [showModal, setShowModal] = useState(false);

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  // ============================================================
  // LOAD USERS FROM DATABASE
  // ============================================================

  const loadUsers = async () => {
    try {
      setLoading(true);
      setError("");

      const result = await listUsers();

      console.log("ListUsers result:", result);

      setUsers(result.data?.users || []);
    } catch (err) {
      console.error("Failed to load users:", err);
      setError(err?.message || "Failed to load users.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadUsers();
  }, []);

  // ============================================================
  // SEARCH
  // ============================================================

  const filteredUsers = users.filter((user) => {
    const query = search.toLowerCase();

    return (
      (user.name || "").toLowerCase().includes(query) ||
      (user.email || "").toLowerCase().includes(query) ||
      (user.role || "").toLowerCase().includes(query)
    );
  });

  // ============================================================
  // CREATE USER
  // ============================================================

  const createUser = async (event) => {
    event.preventDefault();

    try {
      setSaving(true);
      setError("");

      const form = new FormData(event.currentTarget);

      const name = String(form.get("name") || "").trim();
      const email = String(form.get("email") || "").trim();
      const phoneNumber = String(
        form.get("phoneNumber") || ""
      ).trim();
      const role = String(form.get("role") || "").trim();

      if (!name || !role) {
        setError("Name and role are required.");
        return;
      }

      // Create User in Data Connect
      const result = await createUserInDB({
        name,
        email: email || null,
        phoneNumber: phoneNumber || null,
        role,
        status: "Active",
        farmId: FARM_ID,
      });

      console.log("Created user:", result);

      const newUserId = result.data?.user?.id;

      if (!newUserId) {
        throw new Error(
          "User was created but no user ID was returned."
        );
      }

      // Create permissions for the new user
      await createUserAccess({
        userId: newUserId,

        dashboard: true,
        animals: false,
        health: false,
        breeding: false,
        production: false,
        fields: false,
        crops: false,
        harvest: false,
        inventory: false,
        suppliers: false,
        equipment: false,
        employees: false,
        sales: false,
        customers: false,
        income: false,
        expenses: false,
        reports: false,
        notifications: false,
        users: false,
        settings: false,
      });

      console.log("User access created.");

      // Reload users from DB
      await loadUsers();

      // Close modal
      setShowModal(false);

      // Clear form
      event.currentTarget.reset();
    } catch (err) {
      console.error("Create user failed:", err);

      setError(
        err?.message || "Failed to create user."
      );
    } finally {
      setSaving(false);
    }
  };

  // ============================================================
  // TOGGLE USER
  // ============================================================

  const toggleUser = (id) => {
    setUsers((current) =>
      current.map((user) =>
        user.id === id
          ? {
              ...user,
              status:
                user.status === "Active"
                  ? "Inactive"
                  : "Active",
            }
          : user
      )
    );
  };

  return (
    <div className="admin-page">
      {/* ====================================================== */}
      {/* HEADER */}
      {/* ====================================================== */}

      <div className="admin-header">
        <div>
          <div className="admin-eyebrow">
            <UserCheck size={15} />
            USER MANAGEMENT
          </div>

          <h1>Users</h1>

          <p>
            Manage all Dewly Farm system accounts.
          </p>
        </div>

        <button
          className="admin-primary-btn"
          type="button"
          onClick={() => {
            setError("");
            setShowModal(true);
          }}
        >
          <UserPlus size={17} />
          Create User
        </button>
      </div>

      {/* ====================================================== */}
      {/* ERROR */}
      {/* ====================================================== */}

      {error && (
        <div
          style={{
            marginBottom: "16px",
            padding: "12px 16px",
            borderRadius: "8px",
            background: "#fee2e2",
            color: "#991b1b",
          }}
        >
          {error}
        </div>
      )}

      {/* ====================================================== */}
      {/* USERS TABLE */}
      {/* ====================================================== */}

      <div className="admin-panel">
        <div className="user-search-row">
          <div className="admin-search">
            <Search size={18} />

            <input
              value={search}
              onChange={(event) =>
                setSearch(event.target.value)
              }
              placeholder="Search users..."
            />
          </div>

          <div className="user-result-count">
            {filteredUsers.length} users
          </div>
        </div>

        <div className="admin-table-wrapper">
          <table className="admin-table">
            <thead>
              <tr>
                <th>User</th>
                <th>Role</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {loading ? (
                <tr>
                  <td colSpan="4">
                    Loading users...
                  </td>
                </tr>
              ) : filteredUsers.length === 0 ? (
                <tr>
                  <td colSpan="4">
                    No users found.
                  </td>
                </tr>
              ) : (
                filteredUsers.map((user) => (
                  <tr key={user.id}>
                    <td>
                      <div className="admin-user-cell">
                        <div className="admin-user-avatar">
                          {(user.name || "?")
                            .charAt(0)
                            .toUpperCase()}
                        </div>

                        <div>
                          <strong>{user.name}</strong>
                          <span>
                            {user.email || "No email"}
                          </span>
                        </div>
                      </div>
                    </td>

                    <td>
                      <span className="admin-role-badge">
                        {user.role}
                      </span>
                    </td>

                    <td>
                      <span
                        className={`admin-status ${
                          user.status === "Active"
                            ? "active"
                            : "inactive"
                        }`}
                      >
                        <span />
                        {user.status}
                      </span>
                    </td>

                    <td>
                      <button
                        className="admin-icon-action"
                        type="button"
                        onClick={() =>
                          toggleUser(user.id)
                        }
                      >
                        {user.status === "Active" ? (
                          <>
                            <UserX size={16} />
                            Disable
                          </>
                        ) : (
                          <>
                            <UserCheck size={16} />
                            Enable
                          </>
                        )}
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* ====================================================== */}
      {/* CREATE USER MODAL */}
      {/* ====================================================== */}

      {showModal && (
        <div className="admin-modal-backdrop">
          <div className="admin-modal">
            <div className="admin-modal-header">
              <div>
                <div className="admin-modal-icon">
                  <UserPlus size={21} />
                </div>

                <h3>Create User</h3>

                <p>
                  Add a new system account.
                </p>
              </div>

              <button
                className="admin-close-btn"
                type="button"
                onClick={() => setShowModal(false)}
              >
                ×
              </button>
            </div>

            <form onSubmit={createUser}>
              <div className="admin-form-grid">
                {/* NAME */}

                <label>
                  Full Name

                  <input
                    name="name"
                    required
                    placeholder="Full name"
                  />
                </label>

                {/* EMAIL */}

                <label>
                  Email

                  <input
                    name="email"
                    type="email"
                    required
                    placeholder="user@dewlyfarm.com"
                  />
                </label>

                {/* PHONE */}

                <label>
                  Phone Number

                  <input
                    name="phoneNumber"
                    type="tel"
                    placeholder="0712345678"
                  />
                </label>

                {/* ROLE */}

                <label>
                  Role

                  <select
                    name="role"
                    required
                  >
                    <option value="Farm Manager">
                      Farm Manager
                    </option>

                    <option value="Veterinarian">
                      Veterinarian
                    </option>

                    <option value="Accountant">
                      Accountant
                    </option>

                    <option value="Employee">
                      Employee
                    </option>

                    <option value="Viewer">
                      Viewer
                    </option>

                    <option value="Super Admin">
                      Super Admin
                    </option>
                  </select>
                </label>
              </div>

              <div className="admin-modal-footer">
                <button
                  type="button"
                  className="admin-secondary-btn"
                  onClick={() =>
                    setShowModal(false)
                  }
                  disabled={saving}
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="admin-primary-btn"
                  disabled={saving}
                >
                  <UserPlus size={17} />

                  {saving
                    ? "Creating..."
                    : "Create User"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
