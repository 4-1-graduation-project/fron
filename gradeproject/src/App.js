import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import AdminMainPage from "./pages/AdminMainPage";
import UserManagementPage from "./pages/UserManagementPage";
import MemberDetailPage from "./pages/MemberDetailPage";
import AdminUserPage from "./pages/AdminUserPage";
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
      </Routes>
    </div>
  );
}

export default App;