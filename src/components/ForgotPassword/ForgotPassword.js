import ButtonComponent from "../Button/Button";
import InputComponent from "../Input/InputComponent";
import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import { useState } from "react";

const ForgotPassword = () => {
  const { resetPassword } = useAuth();
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      setMessage("");
      setError("");
      await resetPassword(email);
      setMessage(
        "Email sent sucessfully. Check your inbox for further instructions!"
      );
    } catch {
      setError("The email address is badly formatted!");
    }
  }
  return (
    <div className="card m-auto mt-5 bg-transparent p-3 w-25">
      <div className="card-body text-center">
        <form onSubmit={handleSubmit}>
          <h1 className=" pb-3">Password reset</h1>
          <div className="form-group p-1">
            <label htmlFor="email">Email</label>
            <InputComponent
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter email..."
              value={email}
              onChange={handleChange}
            />
            {error && <div style={{ color: "red" }}>{error}</div>}
            {message && <div style={{ color: "green" }}>{message}</div>}
          </div>
          <ButtonComponent type="submit" title="Reset password" />
          <div>
            <Link to="/login">Login</Link>
          </div>
          <div className="mt-3">
            Need an account?{" "}
            <Link to="/">
              <strong>Sign Up</strong>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
