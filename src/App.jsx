import './index.css'
import Sidebar from './components/Sidebar'
import HealthyMenuPage from './View/HealthyMenuPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  

  return (
    <Router>
      <div className="flex">
        <Sidebar />
        <div className="flex-1">
          
          <Routes>
            <Route path="/HealthyMenu" element={<HealthyMenuPage />} />

          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App
