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
import AiSettingPage from "./pages/AiSettingPage";
import EvaluationIndicatorsPage from "./pages/EvaluationIndicatorsPage";
import FloatingPopulationRegisterPage from "./pages/FloatingPopulationRegisterPage";
import NoticePage from './pages/NoticePage'
import NoticeCreatePage from './pages/NoticeCreatePage';
import NoticeDetailPage from './pages/NoticeDetailPage';
import LandingPage from './components/landingpage/LandingPage';

function App() {
  return (
    <div className="App" style={{ overflow: 'hidden' }}>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<LandingPage />} />
        <Route path="/adminMain" element={<AdminMainPage />} />
        <Route path="/notice" element={<NoticePage />} />
        <Route path="/notice/:id" element={<NoticeDetailPage />} />
        <Route path="/noticeCreate" element={<NoticeCreatePage />} />
        <Route path="/adminUser" element={<AdminUserPage />} >
          <Route path="" element={<UserManagementPage />} />
          <Route path=":id" element={<MemberDetailPage />} />
        </Route>
        <Route path="/adminReport" element={<UserReportPage />} />
        <Route path="/adminReport/:id" element={<ReportDetailPage />} />
        <Route path="/mapDataManagement" element={<MapDataManagementPage />} />
        <Route path="/floatingPopulationManagement" element={<FloatingPopulationPage />} />
        <Route path="/floatingPopulationManagement/register" element={<FloatingPopulationRegisterPage />} />
        <Route path="/precipitationManagement" element={<PrecipitationPage />} />
        <Route path="/aiSetting" element={<AiSettingPage />} />
        <Route path="/evaluationIndicators" element={<EvaluationIndicatorsPage />} />
      </Routes>
    </div>
  );
}

export default App;