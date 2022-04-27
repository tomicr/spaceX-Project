import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import ButtonComponent from "../Button/Button";
import InputComponent from "../Input/InputComponent";
import validationSchema from "../../validation/ValidationSchema";
import { Link } from "react-router-dom";

const LoginComponent = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      confirmationPassword: "",
    },
    validationSchema,
    onSubmit: async (values) => {
      await login(values.email, values.password);
      navigate("/launch-list");
    },
  });
  return (
    <div className="card m-auto mt-5 bg-transparent p-3 w-25">
      <div className="card-body text-center">
        <form onSubmit={formik.handleSubmit}>
          <h1 className=" pb-3">Log in</h1>
          <div className="form-group p-1">
            <label htmlFor="email">Email</label>
            <InputComponent
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter email..."
              values={formik.values.email}
              onChange={formik.handleChange}
            />
            {formik.errors.email ? (
              <div id="error-email" style={{ color: "red" }}>
                {formik.errors.email}
              </div>
            ) : null}
          </div>
          <div className="form-group p-1">
            <label htmlFor="password">Password</label>
            <InputComponent
              type="password"
              className="form-control"
              id="password"
              placeholder="Enter password..."
              values={formik.values.password}
              onChange={formik.handleChange}
            />
            {formik.errors.password ? (
              <div id="error-password" style={{ color: "red" }}>
                {formik.errors.password}
              </div>
            ) : null}
          </div>
          <div className="form-group p-1">
            <label htmlFor="confirmationPassword">Confirmation Password</label>
            <InputComponent
              type="password"
              className="form-control"
              id="confirmationPassword"
              placeholder="Enter confirmation password..."
              values={formik.values.confirmationPassword}
              onChange={formik.handleChange}
            />
            {formik.errors.confirmationPassword ? (
              <div id="error-confirmationPassword" style={{ color: "red" }}>
                {formik.errors.confirmationPassword}
              </div>
            ) : null}
          </div>
          <ButtonComponent type="submit" title="Submit" />
          <div>
            <Link to="/forgot-password">Forgot password?</Link>
          </div>
          <div>
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
export default LoginComponent;
