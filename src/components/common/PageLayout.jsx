import { useState } from "react";

import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

export default function PageLayout({ children }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const closeMobileSidebar = () => {
    setMobileOpen(false);
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
        />
      </div>

      <main className="main-area">
        <Topbar
          onMenuClick={() =>
            setMobileOpen((previous) => !previous)
          }
        />

        <section className="page-content">
          {children}
        </section>
      </main>
    </div>
  );
}