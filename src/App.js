import "./App.css";
import LaunchList from "./components/LaunchList/LaunchList";
import Navbar from "./components/Navbar/Navbar";
import LaunchDetails from "./components/LaunchDetails/LaunchDetails";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useTheme } from "./contexts/ThemeContext";
function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<LaunchList />} />
          <Route path="/launchDetails/:id" element={<LaunchDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
