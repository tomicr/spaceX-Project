import * as Yup from "yup";

const validationSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email address!")
    .required("Email is required!"),
  password: Yup.string()
    .matches(
      /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/,
      "Password has to be at least 7 characters long and contain at least one numeric digit and a special character!"
    )
    .required("Password is required!"),
  confirmationPassword: Yup.string()
    .matches(
      /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/,
      "Password has to be at least 7 characters long and contain at least one numeric digit and a special character!"
    )
    .oneOf([Yup.ref("password"), null], "Passwords must match!")
    .required("Confirmation password is required!"),
});

export default validationSchema;
