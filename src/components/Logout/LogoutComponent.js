import { useAuth } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const LogoutComponent = () => {
  const { currentUser, logout } = useAuth();
  const [error, setError] = useState("");
  const navigate = useNavigate();
  async function handleLogout() {
    try {
      await logout();
      navigate("/");
    } catch {
      setError("Failed to logout!");
    }
  }
  return (
    <div className="card text-center bg-transparent w-25 mt-3">
      <strong>User email : {currentUser?.email}</strong>
      {error ? <div style={{ color: "red" }}>{error}</div> : null}
      <button
        className="btn btn-primary rounded"
        onClick={handleLogout}
        type="button"
      >
        Logout
      </button>
    </div>
  );
};
export default LogoutComponent;
