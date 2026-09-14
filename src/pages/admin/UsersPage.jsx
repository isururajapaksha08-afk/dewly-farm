import { useState } from "react";
import {
  UserPlus,
  Search,
  UserCheck,
  UserX,
} from "lucide-react";

const defaultUsers = [
  {
    id: 1,
    name: "Farm Administrator",
    email: "admin@dewlyfarm.com",
    role: "Super Admin",
    status: "Active",
  },
  {
    id: 2,
    name: "Kasun Perera",
    email: "kasun@dewlyfarm.com",
    role: "Farm Manager",
    status: "Active",
  },
  {
    id: 3,
    name: "Nimal Silva",
    email: "nimal@dewlyfarm.com",
    role: "Veterinarian",
    status: "Active",
  },
  {
    id: 4,
    name: "Amal Fernando",
    email: "amal@dewlyfarm.com",
    role: "Accountant",
    status: "Inactive",
  },
];

export default function UsersPage() {
  const [users, setUsers] = useState(defaultUsers);
  const [search, setSearch] = useState("");
  const [showModal, setShowModal] = useState(false);

  const filteredUsers = users.filter((user) => {
    const query = search.toLowerCase();

    return (
      user.name.toLowerCase().includes(query) ||
      user.email.toLowerCase().includes(query) ||
      user.role.toLowerCase().includes(query)
    );
  });

  const createUser = (event) => {
    event.preventDefault();

    const form = new FormData(event.currentTarget);

    const newUser = {
      id: Date.now(),
      name: form.get("name"),
      email: form.get("email"),
      role: form.get("role"),
      status: "Active",
    };

    setUsers((current) => [...current, newUser]);
    setShowModal(false);
  };

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
          onClick={() => setShowModal(true)}
        >
          <UserPlus size={17} />
          Create User
        </button>
      </div>

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
              {filteredUsers.map((user) => (
                <tr key={user.id}>
                  <td>
                    <div className="admin-user-cell">
                      <div className="admin-user-avatar">
                        {user.name
                          .charAt(0)
                          .toUpperCase()}
                      </div>

                      <div>
                        <strong>{user.name}</strong>
                        <span>{user.email}</span>
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
              ))}
            </tbody>
          </table>
        </div>
      </div>

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
                <label>
                  Full Name
                  <input
                    name="name"
                    required
                    placeholder="Full name"
                  />
                </label>

                <label>
                  Email
                  <input
                    name="email"
                    type="email"
                    required
                    placeholder="user@dewlyfarm.com"
                  />
                </label>

                <label>
                  Role
                  <select name="role">
                    <option>Farm Manager</option>
                    <option>Veterinarian</option>
                    <option>Accountant</option>
                    <option>Employee</option>
                    <option>Viewer</option>
                    <option>Super Admin</option>
                  </select>
                </label>
              </div>

              <div className="admin-modal-footer">
                <button
                  type="button"
                  className="admin-secondary-btn"
                  onClick={() => setShowModal(false)}
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="admin-primary-btn"
                >
                  <UserPlus size={17} />
                  Create User
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}