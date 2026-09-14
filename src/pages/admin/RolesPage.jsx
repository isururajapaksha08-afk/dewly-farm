import {
    ShieldCheck,
    Users,
    Tractor,
    Stethoscope,
    WalletCards,
    Eye,
  } from "lucide-react";
  
  const roles = [
    {
      name: "Super Admin",
      description:
        "Full access to every Dewly Farm module and system setting.",
      icon: ShieldCheck,
      permissions: [
        "All modules",
        "User management",
        "Roles & permissions",
        "System settings",
        "Activity logs",
      ],
    },
    {
      name: "Farm Manager",
      description:
        "Manage day-to-day farm operations and farm records.",
      icon: Tractor,
      permissions: [
        "Livestock",
        "Crops",
        "Inventory",
        "Employees",
        "Reports",
      ],
    },
    {
      name: "Veterinarian",
      description:
        "Manage animal health and veterinary records.",
      icon: Stethoscope,
      permissions: [
        "Livestock",
        "Health records",
        "Vaccinations",
        "Breeding",
      ],
    },
    {
      name: "Accountant",
      description:
        "Manage financial and sales information.",
      icon: WalletCards,
      permissions: [
        "Finance",
        "Sales",
        "Expenses",
        "Income",
        "Reports",
      ],
    },
    {
      name: "Employee",
      description:
        "Access operational modules assigned by management.",
      icon: Users,
      permissions: [
        "Assigned modules",
        "Work records",
        "Calendar",
      ],
    },
    {
      name: "Viewer",
      description:
        "Read-only access to permitted farm information.",
      icon: Eye,
      permissions: [
        "Dashboard",
        "Reports",
        "Read-only access",
      ],
    },
  ];
  
  export default function RolesPage() {
    return (
      <div className="admin-page">
        <div className="admin-header">
          <div>
            <div className="admin-eyebrow">
              <ShieldCheck size={15} />
              ACCESS CONTROL
            </div>
  
            <h1>Roles & Permissions</h1>
  
            <p>
              Control what each Dewly Farm user can access.
            </p>
          </div>
  
          <div className="admin-header-badge">
            <ShieldCheck size={18} />
            Permission Center
          </div>
        </div>
  
        <div className="roles-grid">
          {roles.map((role) => (
            <div className="role-card" key={role.name}>
              <div className="role-card-top">
                <div className="role-icon">
                  <role.icon size={23} />
                </div>
  
                <span className="role-count">
                  {role.permissions.length} permissions
                </span>
              </div>
  
              <h3>{role.name}</h3>
  
              <p>{role.description}</p>
  
              <div className="permission-list">
                {role.permissions.map((permission) => (
                  <div
                    className="permission-item"
                    key={permission}
                  >
                    <span>✓</span>
                    {permission}
                  </div>
                ))}
              </div>
  
              <button
                type="button"
                className="admin-secondary-btn role-edit-btn"
              >
                Configure Role
              </button>
            </div>
          ))}
        </div>
      </div>
    );
  }