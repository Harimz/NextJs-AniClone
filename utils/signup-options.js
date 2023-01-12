import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

const formSchema = Yup.object({
  username: Yup.string()
    .required("Username is required")
    .min(5, "Username must exceed 5 characters")
    .max(15, "Username must not exceed 15 characters"),
  email: Yup.string().required("Email is required").email("Email is invalid"),
  password: Yup.string()
    .required("Password is required")
    .min(5, "Must be over 5 characters")
    .max(25, "Must be less than 25 characters!"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match!")
    .required("Confirm password is required"),
});
const formOptions = { resolver: yupResolver(formSchema) };

export default formOptions;
