import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "../src/pages/landing";
import Home from "./pages/Home";
import Diagnose from "../src/pages/DiagnosisPage";
 

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/landing" element={<LandingPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/diagnosisPage" element={<Diagnose />} />
      </Routes>
    </Router>
  );
}

export default App;
