import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useTheme } from "./contexts/ThemeContext";
import { AuthProvider } from "./contexts/AuthContext";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import { ApolloProvider } from "@apollo/client";
import { client } from "./setupApolo";
import LoginComponent from "./components/Login/LoginComponent";
import SignInComponent from "./components/SignIn/SignUpComponent";
import LaunchDetails from "./components/LaunchDetails/LaunchDetails";
import LaunchDetailsSec from "./components/LaunchDetails/LaunchDetailsSec";
import ForgotPassword from "./components/ForgotPassword/ForgotPassword";
import LaunchList from "./components/LaunchList/LaunchList";
import LaunchListSecond from "./components/LaunchList/LaunchListSecond";
function App() {
  const { isDark } = useTheme();
  return (
    <ApolloProvider client={client}>
      <AuthProvider>
        <Router>
          <div className={isDark ? "darkTheme" : "lightTheme"}>
            <Navbar />
            <Routes>
              <Route path="/" element={<SignInComponent />} />
              <Route path="/login" element={<LoginComponent />} />
              <Route path="forgot-password" element={<ForgotPassword />} />
              {/* <Route element={<PrivateRoute />}> */}
              {/* <Route path="/launch-list" element={<LaunchList />} /> */}
              <Route path="/launch-list-sec" element={<LaunchListSecond />} />
              {/* <Route path="/launch-details/:id" element={<LaunchDetails />} /> */}
              <Route
                path="/launch-details-sec/:id"
                element={<LaunchDetailsSec />}
              />
              {/* </Route> */}
            </Routes>
          </div>
        </Router>
      </AuthProvider>
    </ApolloProvider>
  );
}

export default App;
