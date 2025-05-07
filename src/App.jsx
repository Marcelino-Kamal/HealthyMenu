import "./index.css";
import Sidebar from "./components/Sidebar";
import HealthyMenuPage from "./View/HealthyMenuPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="w-full flex">
      <Router>
        <Sidebar />
        <Routes>
          <Route path="/HealthyMenu" element={<HealthyMenuPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
