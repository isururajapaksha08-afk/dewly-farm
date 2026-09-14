import { useState } from "react";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

export default function PageLayout({ children }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="app-layout">
      <div className={mobileOpen ? "mobile-sidebar-open" : ""}>
        <Sidebar />
      </div>

      <main className="main-area">
        <Topbar
          onMenuClick={() => setMobileOpen(!mobileOpen)}
        />

        <section className="page-content">
          {children}
        </section>
      </main>
    </div>
  );
}