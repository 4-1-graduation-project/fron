import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import AdminMainPage from "./pages/AdminMainPage";
import UserManagementPage from "./pages/UserManagementPage";
import MemberDetailPage from "./pages/MemberDetailPage";
import AdminUserPage from "./pages/AdminUserPage";
import UserReportPage from "./pages/UserReportPage";
import ReportDetailPage from "./pages/ReportDetailPage";
import MapDataManagementPage from "./pages/MapDataManagementPage";
import FloatingPopulationPage from "./pages/FloatingPopulationPage";
import PrecipitationPage from './pages/PrecipitationPage';

function App() {
  return (
    <div className="App" style={{ overflow: 'hidden' }}>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/adminMain" element={<AdminMainPage />} />
        <Route path="/adminUser" element={<AdminUserPage />}>
          <Route path="" element={<UserManagementPage />} />
          <Route path=":id" element={<MemberDetailPage />} />
        </Route>
        <Route path="/adminReport" element={<UserReportPage />} />
        <Route path="/adminReport/:id" element={<ReportDetailPage />} />
        <Route path="/mapDataManagement" element={<MapDataManagementPage />} />
        <Route path="/floatingPopulationManagement" element={<FloatingPopulationPage />} />
        <Route path="/precipitationManagement" element={<PrecipitationPage />} />
      </Routes>
    </div>
  );
}

export default App;