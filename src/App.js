import "./App.css";
import LaunchList from "./components/LaunchList/LaunchList";
import Navbar from "./components/Navbar/Navbar";
import LaunchDetails from "./components/LaunchDetails/LaunchDetails";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useTheme } from "./contexts/ThemeContext";
import LoginComponent from "./components/Login/LoginComponent";
import SignInComponent from "./components/SignIn/SignUpComponent";
import { AuthProvider } from "./contexts/AuthContext";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import ForgotPassword from "./components/ForgotPassword/ForgotPassword";

function App() {
  const { isDark } = useTheme();
  return (
    <AuthProvider>
      <Router>
        <div className={isDark ? "darkTheme" : "lightTheme"}>
          <Navbar />
          <Routes>
            <Route path="/" element={<SignInComponent />} />
            <Route path="/login" element={<LoginComponent />} />
            <Route path="forgot-password" element={<ForgotPassword />} />
            <Route element={<PrivateRoute />}>
              <Route path="/launch-list" element={<LaunchList />} />
              <Route path="/launch-details/:id" element={<LaunchDetails />} />
            </Route>
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
