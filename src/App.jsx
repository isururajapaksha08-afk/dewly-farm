import React, { useState } from "react";
import {
  LayoutDashboard,
  Sprout,
  Package,
  Hexagon,
  ShoppingCart,
  Users,
  Wallet,
  Settings,
  ChevronLeft,
  ChevronRight,
  Bell,
  Search,
  Menu,
  X,
  Leaf,
  Activity,
  HeartPulse,
  CalendarDays,
  MapPin,
  LogOut
} from "lucide-react";

import DashboardPage from "./pages/DashboardPage";
import LivestockPage from "./pages/LivestockPage";
import CropsPage from "./pages/CropsPage";
import BeekeepingPage from "./pages/BeekeepingPage";
import InventoryPage from "./pages/InventoryPage";
import SalesPage from "./pages/SalesPage";
import FinancePage from "./pages/FinancePage";
import EmployeesPage from "./pages/EmployeesPage";

const navigation = [
  { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
  { id: "livestock", label: "Livestock", icon: HeartPulse },
  { id: "crops", label: "Crops & Fields", icon: Sprout },
  { id: "beekeeping", label: "Beekeeping", icon: Hexagon },
  { id: "inventory", label: "Inventory", icon: Package },
  { id: "sales", label: "Sales", icon: ShoppingCart },
  { id: "finance", label: "Finance", icon: Wallet },
  { id: "employees", label: "Employees", icon: Users },
];

function PageView({ page }) {
  switch (page) {
    case "livestock":
      return <LivestockPage />;
    case "crops":
      return <CropsPage />;
    case "beekeeping":
      return <BeekeepingPage />;
    case "inventory":
      return <InventoryPage />;
    case "sales":
      return <SalesPage />;
    case "finance":
      return <FinancePage />;
    case "employees":
      return <EmployeesPage />;
    default:
      return <DashboardPage />;
  }
}

export default function App() {
  const [activePage, setActivePage] = useState("dashboard");
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const activeItem =
    navigation.find((item) => item.id === activePage) || navigation[0];

  return (
    <div className={`app-shell ${collapsed ? "sidebar-collapsed" : ""}`}>

      {/* MOBILE OVERLAY */}
      {mobileOpen && (
        <div
          className="mobile-overlay"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* SIDEBAR */}
      <aside className={`modern-sidebar ${mobileOpen ? "mobile-open" : ""}`}>

        <div className="brand-area">
          <div className="brand-mark">
            <Leaf size={25} strokeWidth={2.5} />
          </div>

          {!collapsed && (
            <div className="brand-text">
              <strong>Dewly Farm</strong>
              <span>Smart Farm Management</span>
            </div>
          )}

          <button
            className="mobile-close"
            onClick={() => setMobileOpen(false)}
          >
            <X size={20} />
          </button>
        </div>

        <div className="farm-status">
          <div className="status-dot" />
          {!collapsed && (
            <>
              <span>Farm System Online</span>
              <Activity size={15} />
            </>
          )}
        </div>

        <nav className="sidebar-nav">
          <div className="nav-section-title">
            {!collapsed && "MAIN MENU"}
          </div>

          {navigation.map((item) => {
            const Icon = item.icon;
            const active = activePage === item.id;

            return (
              <button
                key={item.id}
                className={`nav-item ${active ? "active" : ""}`}
                onClick={() => {
                  setActivePage(item.id);
                  setMobileOpen(false);
                }}
                title={collapsed ? item.label : ""}
              >
                <Icon size={20} strokeWidth={active ? 2.4 : 2} />
                {!collapsed && <span>{item.label}</span>}
                {active && <div className="active-line" />}
              </button>
            );
          })}

          <div className="nav-section-title settings-title">
            {!collapsed && "SYSTEM"}
          </div>

          <button className="nav-item">
            <Settings size={20} />
            {!collapsed && <span>Settings</span>}
          </button>
        </nav>

        <div className="sidebar-bottom">
          <div className="farm-mini-card">
            <div className="mini-icon">
              <MapPin size={17} />
            </div>

            {!collapsed && (
              <div>
                <strong>Main Farm</strong>
                <span>Active Location</span>
              </div>
            )}
          </div>

          <button
            className="collapse-button"
            onClick={() => setCollapsed(!collapsed)}
          >
            {collapsed ? (
              <ChevronRight size={19} />
            ) : (
              <ChevronLeft size={19} />
            )}
            {!collapsed && <span>Collapse sidebar</span>}
          </button>
        </div>
      </aside>

      {/* MAIN */}
      <main className="main-area">

        {/* TOPBAR */}
        <header className="modern-topbar">

          <div className="topbar-left">
            <button
              className="mobile-menu-button"
              onClick={() => setMobileOpen(true)}
            >
              <Menu size={22} />
            </button>

            <div>
              <div className="breadcrumb">
                Farm Management / <strong>{activeItem.label}</strong>
              </div>
              <h1>{activeItem.label}</h1>
            </div>
          </div>

          <div className="topbar-actions">

            <div className="search-box">
              <Search size={18} />
              <input
                placeholder="Search farm data..."
                type="text"
              />
              <kbd>⌘ K</kbd>
            </div>

            <button className="icon-button notification-button">
              <Bell size={20} />
              <span className="notification-dot" />
            </button>

            <div className="profile">
              <div className="avatar">
                A
              </div>

              <div className="profile-info">
                <strong>Admin</strong>
                <span>Farm Manager</span>
              </div>
            </div>

          </div>
        </header>

        {/* CONTENT */}
        <section className="page-content">
          <PageView page={activePage} />
        </section>

        {/* FOOTER */}
        <footer className="modern-footer">
          <span>© 2026 Dewly Farm</span>
          <span>Smart Agriculture Management Platform</span>
        </footer>

      </main>
    </div>
  );
}
