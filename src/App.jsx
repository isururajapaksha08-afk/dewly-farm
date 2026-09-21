import { Navigate, Route, Routes } from "react-router-dom";

import PageLayout from "./components/common/PageLayout";
import ProtectedRoute from "./components/auth/ProtectedRoute";

import LoginPage from "./pages/LoginPage";

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

function ProtectedLayout({ children }) {
  return (
    <ProtectedRoute>
      <PageLayout>
        {children}
      </PageLayout>
    </ProtectedRoute>
  );
}

function App() {
  return (
    <Routes>
      {/* LOGIN */}
      <Route
        path="/login"
        element={<LoginPage />}
      />

      {/* HOME */}
      <Route
        path="/"
        element={<Navigate to="/dashboard" replace />}
      />

      {/* DASHBOARD */}
      <Route
        path="/dashboard"
        element={
          <ProtectedLayout>
            <DashboardPage />
          </ProtectedLayout>
        }
      />

      {/* LIVESTOCK */}
      <Route
        path="/livestock"
        element={
          <ProtectedLayout>
            <LivestockPage />
          </ProtectedLayout>
        }
      />

      {/* CROPS */}
      <Route
        path="/crops"
        element={
          <ProtectedLayout>
            <CropsPage />
          </ProtectedLayout>
        }
      />

      {/* INVENTORY */}
      <Route
        path="/inventory"
        element={
          <ProtectedLayout>
            <InventoryPage />
          </ProtectedLayout>
        }
      />

      {/* BEEKEEPING */}
      <Route
        path="/beekeeping"
        element={
          <ProtectedLayout>
            <BeekeepingPage />
          </ProtectedLayout>
        }
      />

      {/* SALES */}
      <Route
        path="/sales"
        element={
          <ProtectedLayout>
            <SalesPage />
          </ProtectedLayout>
        }
      />

      {/* EMPLOYEES */}
      <Route
        path="/employees"
        element={
          <ProtectedLayout>
            <EmployeesPage />
          </ProtectedLayout>
        }
      />

      {/* FINANCE */}
      <Route
        path="/finance"
        element={
          <ProtectedLayout>
            <FinancePage />
          </ProtectedLayout>
        }
      />

      {/* CALENDAR */}
      <Route
        path="/calendar"
        element={
          <ProtectedLayout>
            <CalendarPage />
          </ProtectedLayout>
        }
      />

      {/* SETTINGS */}
      <Route
        path="/settings"
        element={
          <ProtectedLayout>
            <SettingsPage />
          </ProtectedLayout>
        }
      />

      {/* ADMIN */}
      <Route
        path="/admin"
        element={
          <ProtectedLayout>
            <AdminPage />
          </ProtectedLayout>
        }
      />

      {/* ADMIN - USERS */}
      <Route
        path="/admin/users"
        element={
          <ProtectedLayout>
            <UsersPage />
          </ProtectedLayout>
        }
      />

      {/* ADMIN - ROLES */}
      <Route
        path="/admin/roles"
        element={
          <ProtectedLayout>
            <RolesPage />
          </ProtectedLayout>
        }
      />

      {/* UNKNOWN */}
      <Route
        path="*"
        element={<Navigate to="/dashboard" replace />}
      />
    </Routes>
  );
}

export default App;