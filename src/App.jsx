import { Navigate, Route, Routes } from "react-router-dom";

import PageLayout from "./components/common/PageLayout";

import DashboardPage from "./pages/DashboardPage";
import LivestockPage from "./pages/LivestockPage";
import CropsPage from "./pages/CropsPage";
import InventoryPage from "./pages/InventoryPage";
import BeekeepingPage from "./pages/BeekeepingPage";
import SalesPage from "./pages/SalesPage";
import EmployeesPage from "./pages/EmployeesPage";
import FinancePage from "./pages/FinancePage";
import CalendarPage from "./pages/CalendarPage";
import SettingsPage from "./pages/SettingsPage";

import AdminPage from "./pages/admin/AdminPage";
import UsersPage from "./pages/admin/UsersPage";
import RolesPage from "./pages/admin/RolesPage";

function App() {
  return (
    <Routes>
      {/* HOME */}
      <Route
        path="/"
        element={<Navigate to="/dashboard" replace />}
      />

      {/* DASHBOARD */}
      <Route
        path="/dashboard"
        element={
          <PageLayout>
            <DashboardPage />
          </PageLayout>
        }
      />

      {/* LIVESTOCK */}
      <Route
        path="/livestock"
        element={
          <PageLayout>
            <LivestockPage />
          </PageLayout>
        }
      />

      {/* CROPS */}
      <Route
        path="/crops"
        element={
          <PageLayout>
            <CropsPage />
          </PageLayout>
        }
      />

      {/* INVENTORY */}
      <Route
        path="/inventory"
        element={
          <PageLayout>
            <InventoryPage />
          </PageLayout>
        }
      />

      {/* BEEKEEPING */}
      <Route
        path="/beekeeping"
        element={
          <PageLayout>
            <BeekeepingPage />
          </PageLayout>
        }
      />

      {/* SALES */}
      <Route
        path="/sales"
        element={
          <PageLayout>
            <SalesPage />
          </PageLayout>
        }
      />

      {/* EMPLOYEES */}
      <Route
        path="/employees"
        element={
          <PageLayout>
            <EmployeesPage />
          </PageLayout>
        }
      />

      {/* FINANCE */}
      <Route
        path="/finance"
        element={
          <PageLayout>
            <FinancePage />
          </PageLayout>
        }
      />

      {/* CALENDAR */}
      <Route
        path="/calendar"
        element={
          <PageLayout>
            <CalendarPage />
          </PageLayout>
        }
      />

      {/* SETTINGS */}
      <Route
        path="/settings"
        element={
          <PageLayout>
            <SettingsPage />
          </PageLayout>
        }
      />

      {/* ADMIN */}
      <Route
        path="/admin"
        element={
          <PageLayout>
            <AdminPage />
          </PageLayout>
        }
      />

      {/* ADMIN - USERS */}
      <Route
        path="/admin/users"
        element={
          <PageLayout>
            <UsersPage />
          </PageLayout>
        }
      />

      {/* ADMIN - ROLES */}
      <Route
        path="/admin/roles"
        element={
          <PageLayout>
            <RolesPage />
          </PageLayout>
        }
      />

      {/* UNKNOWN ROUTES */}
      <Route
        path="*"
        element={<Navigate to="/dashboard" replace />}
      />
    </Routes>
  );
}

export default App;