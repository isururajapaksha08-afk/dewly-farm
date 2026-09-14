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
      <Route
        path="/"
        element={<Navigate to="/dashboard" replace />}
      />

      <Route
        path="/dashboard"
        element={
          <PageLayout>
            <DashboardPage />
          </PageLayout>
        }
      />

      <Route
        path="/livestock"
        element={
          <PageLayout>
            <LivestockPage />
          </PageLayout>
        }
      />

      <Route
        path="/crops"
        element={
          <PageLayout>
            <CropsPage />
          </PageLayout>
        }
      />

      <Route
        path="/inventory"
        element={
          <PageLayout>
            <InventoryPage />
          </PageLayout>
        }
      />

      <Route
        path="/beekeeping"
        element={
          <PageLayout>
            <BeekeepingPage />
          </PageLayout>
        }
      />

      <Route
        path="/sales"
        element={
          <PageLayout>
            <SalesPage />
          </PageLayout>
        }
      />

      <Route
        path="/employees"
        element={
          <PageLayout>
            <EmployeesPage />
          </PageLayout>
        }
      />

      <Route
        path="/finance"
        element={
          <PageLayout>
            <FinancePage />
          </PageLayout>
        }
      />

      <Route
        path="/calendar"
        element={
          <PageLayout>
            <CalendarPage />
          </PageLayout>
        }
      />

      <Route
        path="/settings"
        element={
          <PageLayout>
            <SettingsPage />
          </PageLayout>
        }
      />

      <Route
        path="*"
        element={<Navigate to="/dashboard" replace />}
      />
<Route
  path="/admin"
  element={
    <PageLayout>
      <AdminPage />
    </PageLayout>
  }
/>

<Route
  path="/admin/users"
  element={
    <PageLayout>
      <UsersPage />
    </PageLayout>
  }
/>

<Route
  path="/admin/roles"
  element={
    <PageLayout>
      <RolesPage />
    </PageLayout>
  }
/>

    </Routes>
  );
}

export default App;