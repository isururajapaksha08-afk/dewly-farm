import { useState } from "react";
import {
  Users,
  ShieldCheck,
  Activity,
  UserPlus,
  UserCheck,
  UserX,
  TrendingUp,
  Clock3,
} from "lucide-react";

const initialUsers = [
  {
    id: 1,
    name: "Farm Administrator",
    email: "admin@dewlyfarm.com",
    role: "Super Admin",
    status: "Active",
    lastLogin: "Today, 09:42 AM",
  },
  {
    id: 2,
    name: "Kasun Perera",
    email: "kasun@dewlyfarm.com",
    role: "Farm Manager",
    status: "Active",
    lastLogin: "Today, 08:15 AM",
  },
  {
    id: 3,
    name: "Nimal Silva",
    email: "nimal@dewlyfarm.com",
    role: "Veterinarian",
    status: "Active",
    lastLogin: "Yesterday, 05:31 PM",
  },
  {
    id: 4,
    name: "Amal Fernando",
    email: "amal@dewlyfarm.com",
    role: "Accountant",
    status: "Inactive",
    lastLogin: "Sep 10, 2026",
  },
];

export default function AdminPage() {
  const [users, setUsers] = useState(initialUsers);

  const activeUsers = users.filter(
    (user) => user.status === "Active"
  ).length;

  const inactiveUsers = users.filter(
    (user) => user.status === "Inactive"
  ).length;

  const roles = new Set(users.map((user) => user.role)).size;

  const handleToggleStatus = (id) => {
    setUsers((currentUsers) =>
      currentUsers.map((user) =>
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

  const handleDelete = (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this user?"
    );

    if (!confirmed) return;

    setUsers((currentUsers) =>
      currentUsers.filter((user) => user.id !== id)
    );
  };

  const handleAddUser = (newUser) => {
    setUsers((currentUsers) => [
      ...currentUsers,
      {
        ...newUser,
        id: Date.now(),
        lastLogin: "Never",
      },
    ]);
  };

  return (
    <div className="admin-page">
      {/* HEADER */}
      <div className="admin-header">
        <div>
          <div className="admin-eyebrow">
            <ShieldCheck size={15} />
            ADMINISTRATION
          </div>

          <h1>Admin Control Center</h1>

          <p>
            Manage Dewly Farm users, roles, permissions and
            system activity.
          </p>
        </div>

        <div className="admin-header-badge">
          <ShieldCheck size={18} />
          Admin Access
        </div>
      </div>

      {/* STATS */}
      <div className="admin-stats-grid">
        <AdminStat
          title="Total Users"
          value={users.length}
          label="Registered accounts"
          icon={<Users size={22} />}
        />

        <AdminStat
          title="Active Users"
          value={activeUsers}
          label="Currently enabled"
          icon={<UserCheck size={22} />}
        />

        <AdminStat
          title="Inactive Users"
          value={inactiveUsers}
          label="Disabled accounts"
          icon={<UserX size={22} />}
        />

        <AdminStat
          title="Roles"
          value={roles}
          label="Configured roles"
          icon={<ShieldCheck size={22} />}
        />
      </div>

      {/* QUICK ACTIONS */}
      <div className="admin-section-title">
        <div>
          <h2>Quick Actions</h2>
          <p>Common administration tasks</p>
        </div>
      </div>

      <div className="admin-action-grid">
        <AdminAction
          icon={<UserPlus size={24} />}
          title="Create User"
          description="Add a new Dewly Farm user"
          onClick={() =>
            document
              .getElementById("admin-users-section")
              ?.scrollIntoView({ behavior: "smooth" })
          }
        />

        <AdminAction
          icon={<ShieldCheck size={24} />}
          title="Manage Roles"
          description="Configure access permissions"
        />

        <AdminAction
          icon={<Activity size={24} />}
          title="Activity Logs"
          description="Review recent system activity"
        />

        <AdminAction
          icon={<TrendingUp size={24} />}
          title="System Overview"
          description="View administration statistics"
        />
      </div>

      {/* USER MANAGEMENT */}
      <div id="admin-users-section">
        <AdminUsersSection
          users={users}
          onAddUser={handleAddUser}
          onToggleStatus={handleToggleStatus}
          onDelete={handleDelete}
        />
      </div>

      {/* RECENT ACTIVITY */}
      <div className="admin-bottom-grid">
        <div className="admin-panel">
          <div className="admin-panel-header">
            <div>
              <h3>Recent Activity</h3>
              <p>Latest administration events</p>
            </div>

            <Activity size={20} />
          </div>

          <div className="admin-activity-list">
            <ActivityRow
              title="User account created"
              description="Kasun Perera account was created"
              time="12 minutes ago"
            />

            <ActivityRow
              title="Role updated"
              description="Nimal Silva assigned Veterinarian role"
              time="1 hour ago"
            />

            <ActivityRow
              title="User login"
              description="Farm Administrator signed in"
              time="2 hours ago"
            />

            <ActivityRow
              title="Account disabled"
              description="Amal Fernando account disabled"
              time="Yesterday"
            />
          </div>
        </div>

        <div className="admin-panel">
          <div className="admin-panel-header">
            <div>
              <h3>System Status</h3>
              <p>Current platform status</p>
            </div>

            <Clock3 size={20} />
          </div>

          <div className="system-status-list">
            <SystemStatus
              title="Authentication"
              status="Operational"
            />

            <SystemStatus
              title="Database"
              status="Operational"
            />

            <SystemStatus
              title="Data Connect"
              status="Operational"
            />

            <SystemStatus
              title="Notifications"
              status="Operational"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function AdminStat({
  title,
  value,
  label,
  icon,
}) {
  return (
    <div className="admin-stat-card">
      <div className="admin-stat-icon">
        {icon}
      </div>

      <div className="admin-stat-content">
        <span>{title}</span>
        <strong>{value}</strong>
        <small>{label}</small>
      </div>
    </div>
  );
}

function AdminAction({
  icon,
  title,
  description,
  onClick,
}) {
  return (
    <button
      className="admin-action-card"
      type="button"
      onClick={onClick}
    >
      <div className="admin-action-icon">
        {icon}
      </div>

      <div>
        <strong>{title}</strong>
        <span>{description}</span>
      </div>
    </button>
  );
}

function AdminUsersSection({
  users,
  onAddUser,
  onToggleStatus,
  onDelete,
}) {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="admin-panel admin-users-panel">
      <div className="admin-panel-header">
        <div>
          <h3>User Management</h3>
          <p>Create and manage Dewly Farm user accounts</p>
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

      <div className="admin-table-wrapper">
        <table className="admin-table">
          <thead>
            <tr>
              <th>User</th>
              <th>Role</th>
              <th>Status</th>
              <th>Last Login</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {users.map((user) => (
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

                <td>{user.lastLogin}</td>

                <td>
                  <div className="admin-table-actions">
                    <button
                      type="button"
                      title={
                        user.status === "Active"
                          ? "Disable user"
                          : "Enable user"
                      }
                      onClick={() =>
                        onToggleStatus(user.id)
                      }
                    >
                      {user.status === "Active" ? (
                        <UserX size={16} />
                      ) : (
                        <UserCheck size={16} />
                      )}
                    </button>

                    <button
                      type="button"
                      title="Delete user"
                      onClick={() =>
                        onDelete(user.id)
                      }
                    >
                      <UserX size={16} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {showModal && (
        <CreateUserModal
          onClose={() => setShowModal(false)}
          onCreate={(user) => {
            onAddUser(user);
            setShowModal(false);
          }}
        />
      )}
    </div>
  );
}

function CreateUserModal({
  onClose,
  onCreate,
}) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    role: "Farm Manager",
    status: "Active",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setForm((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!form.name || !form.email) {
      alert("Please enter name and email.");
      return;
    }

    onCreate(form);
  };

  return (
    <div className="admin-modal-backdrop">
      <div className="admin-modal">
        <div className="admin-modal-header">
          <div>
            <div className="admin-modal-icon">
              <UserPlus size={21} />
            </div>

            <h3>Create New User</h3>

            <p>
              Add a new user to the Dewly Farm system.
            </p>
          </div>

          <button
            type="button"
            className="admin-close-btn"
            onClick={onClose}
          >
            ×
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="admin-form-grid">
            <label>
              Full Name
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Enter full name"
              />
            </label>

            <label>
              Email Address
              <input
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                placeholder="user@dewlyfarm.com"
              />
            </label>

            <label>
              Role
              <select
                name="role"
                value={form.role}
                onChange={handleChange}
              >
                <option>Super Admin</option>
                <option>Farm Manager</option>
                <option>Veterinarian</option>
                <option>Accountant</option>
                <option>Employee</option>
                <option>Viewer</option>
              </select>
            </label>

            <label>
              Status
              <select
                name="status"
                value={form.status}
                onChange={handleChange}
              >
                <option>Active</option>
                <option>Inactive</option>
              </select>
            </label>
          </div>

          <div className="admin-modal-footer">
            <button
              type="button"
              className="admin-secondary-btn"
              onClick={onClose}
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
  );
}

function ActivityRow({
  title,
  description,
  time,
}) {
  return (
    <div className="admin-activity-row">
      <div className="admin-activity-dot" />

      <div>
        <strong>{title}</strong>
        <span>{description}</span>
      </div>

      <time>{time}</time>
    </div>
  );
}

function SystemStatus({
  title,
  status,
}) {
  return (
    <div className="system-status-row">
      <div>
        <span className="system-status-dot" />
        <strong>{title}</strong>
      </div>

      <span>{status}</span>
    </div>
  );
}