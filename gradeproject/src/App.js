import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import AdminMainPage from "./pages/AdminMainPage";

function App() {
  return (
    <div className="App" style={{overflow:'hidden'}}>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/adminMain" element={<AdminMainPage />} />
      </Routes>
    </div>
  );
}

export default App;