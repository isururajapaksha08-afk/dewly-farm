import { useState } from "react";

import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import { useAuth } from "../../context/AuthContext";

export default function PageLayout({ children }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  
  // Auth context එකෙන් logout function එක ලබා ගැනීම
  const { user, logout } = useAuth();

  const closeMobileSidebar = () => {
    setMobileOpen(false);
  };

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <div className="app-layout">
      <div
        className={
          mobileOpen
            ? "mobile-sidebar-open"
            : ""
        }
        onClick={(event) => {
          if (
            event.target === event.currentTarget
          ) {
            closeMobileSidebar();
          }
        }}
      >
        <Sidebar
          onNavigate={closeMobileSidebar}
          user={user}
          onLogout={handleLogout}
        />
      </div>

      <main className="main-area">
        <Topbar
          onMenuClick={() =>
            setMobileOpen((previous) => !previous)
          }
          user={user}
          onLogout={handleLogout}
        />

        <section className="page-content">
          {children}
        </section>
      </main>
    </div>
  );
}