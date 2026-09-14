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
    ChevronLeft,
    ChevronRight,
    Leaf,
  } from "lucide-react";
  
  import { NavLink } from "react-router-dom";
  import { useState } from "react";
  
  const menuItems = [
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
      title: "Settings",
      path: "/settings",
      icon: Settings,
    },
  ];
  
  export default function Sidebar() {
    const [collapsed, setCollapsed] = useState(false);
  
    return (
      <aside className={`sidebar ${collapsed ? "collapsed" : ""}`}>
        <div className="sidebar-top">
          <div className="brand">
            <div className="brand-logo">
              <img
                src="/logo.png"
                alt="Dewly Farm"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                }}
              />
  
              <div className="logo-fallback">
                <Leaf size={24} />
              </div>
            </div>
  
            {!collapsed && (
              <div className="brand-text">
                <strong>Dewly Farm</strong>
                <span>Smart Farm Management</span>
              </div>
            )}
          </div>
  
          <button
            className="collapse-btn"
            onClick={() => setCollapsed(!collapsed)}
          >
            {collapsed ? (
              <ChevronRight size={18} />
            ) : (
              <ChevronLeft size={18} />
            )}
          </button>
        </div>
  
        <div className="sidebar-menu">
          <div className="menu-label">
            {!collapsed && "MAIN MENU"}
          </div>
  
          {menuItems.map((item) => {
            const Icon = item.icon;
  
            return (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `sidebar-link ${isActive ? "active" : ""}`
                }
              >
                <Icon size={20} />
  
                {!collapsed && (
                  <span>{item.title}</span>
                )}
              </NavLink>
            );
          })}
        </div>
  
        {!collapsed && (
          <div className="sidebar-bottom">
            <div className="farm-status">
              <div className="status-dot"></div>
  
              <div>
                <strong>Farm System</strong>
                <span>All systems operational</span>
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
