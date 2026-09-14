import {
  LayoutDashboard,
  Beef,
  Sprout,
  Package,
  Hexagon,
  ShoppingCart,
  Users,
  Wallet,
  Settings,
  CalendarDays,
  ChevronLeft,
  ChevronRight,
  Leaf,
  ShieldCheck,
  UserCog,
  KeyRound,
} from "lucide-react";

import { NavLink } from "react-router-dom";
import { useState } from "react";

const mainMenuItems = [
  {
    title: "Dashboard",
    path: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Livestock",
    path: "/livestock",
    icon: Beef,
  },
  {
    title: "Crops",
    path: "/crops",
    icon: Sprout,
  },
  {
    title: "Inventory",
    path: "/inventory",
    icon: Package,
  },
  {
    title: "Beekeeping",
    path: "/beekeeping",
    icon: Hexagon,
  },
  {
    title: "Sales",
    path: "/sales",
    icon: ShoppingCart,
  },
  {
    title: "Employees",
    path: "/employees",
    icon: Users,
  },
  {
    title: "Finance",
    path: "/finance",
    icon: Wallet,
  },
  {
    title: "Calendar",
    path: "/calendar",
    icon: CalendarDays,
  },
];

const adminMenuItems = [
  {
    title: "Admin Dashboard",
    path: "/admin",
    icon: ShieldCheck,
  },
  {
    title: "Users",
    path: "/admin/users",
    icon: UserCog,
  },
  {
    title: "Roles & Permissions",
    path: "/admin/roles",
    icon: KeyRound,
  },
];

const systemMenuItems = [
  {
    title: "Settings",
    path: "/settings",
    icon: Settings,
  },
];

function SidebarLink({
  item,
  collapsed,
  onNavigate,
}) {
  const Icon = item.icon;

  return (
    <NavLink
      to={item.path}
      onClick={onNavigate}
      className={({ isActive }) =>
        `sidebar-link ${isActive ? "active" : ""}`
      }
      title={collapsed ? item.title : undefined}
    >
      <Icon size={20} />

      {!collapsed && (
        <span>{item.title}</span>
      )}
    </NavLink>
  );
}

function MenuGroup({
  title,
  items,
  collapsed,
  onNavigate,
}) {
  return (
    <div className="sidebar-group">
      {!collapsed && (
        <div className="menu-label">
          {title}
        </div>
      )}

      {items.map((item) => (
        <SidebarLink
          key={item.path}
          item={item}
          collapsed={collapsed}
          onNavigate={onNavigate}
        />
      ))}
    </div>
  );
}

export default function Sidebar({
  onNavigate,
}) {
  const [collapsed, setCollapsed] =
    useState(false);

  return (
    <aside
      className={`sidebar ${
        collapsed ? "collapsed" : ""
      }`}
    >
      {/* =====================================================
          SIDEBAR TOP
          ===================================================== */}

      <div className="sidebar-top">
        <div className="brand">
          <div className="brand-logo">
            <img
              src="/logo.png"
              alt="Dewly Farm"
              onError={(event) => {
                event.currentTarget.style.display =
                  "none";
              }}
            />

            <div className="logo-fallback">
              <Leaf size={24} />
            </div>
          </div>

          {!collapsed && (
            <div className="brand-text">
              <strong>Dewly Farm</strong>
              <span>
                Smart Farm Management
              </span>
            </div>
          )}
        </div>

        <button
          type="button"
          className="collapse-btn"
          onClick={() =>
            setCollapsed(
              (previous) => !previous
            )
          }
          title={
            collapsed
              ? "Expand sidebar"
              : "Collapse sidebar"
          }
        >
          {collapsed ? (
            <ChevronRight size={18} />
          ) : (
            <ChevronLeft size={18} />
          )}
        </button>
      </div>

      {/* =====================================================
          SIDEBAR MENU
          ===================================================== */}

      <div className="sidebar-menu">
        <MenuGroup
          title="MAIN MENU"
          items={mainMenuItems}
          collapsed={collapsed}
          onNavigate={onNavigate}
        />

        {/* =================================================
            ADMINISTRATION
            ================================================= */}

        <MenuGroup
          title="ADMINISTRATION"
          items={adminMenuItems}
          collapsed={collapsed}
          onNavigate={onNavigate}
        />

        {/* =================================================
            SYSTEM
            ================================================= */}

        <MenuGroup
          title="SYSTEM"
          items={systemMenuItems}
          collapsed={collapsed}
          onNavigate={onNavigate}
        />
      </div>

      {/* =====================================================
          SIDEBAR BOTTOM
          ===================================================== */}

      {!collapsed && (
        <div className="sidebar-bottom">
          <div className="farm-status">
            <div className="status-dot" />

            <div>
              <strong>Farm System</strong>

              <span>
                All systems operational
              </span>
            </div>
          </div>

          <div className="version">
            Dewly Farm v1.0
          </div>
        </div>
      )}
    </aside>
  );
}