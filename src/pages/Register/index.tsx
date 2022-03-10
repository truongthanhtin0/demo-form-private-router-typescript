import Button from "@mui/material/Button";
import { Field, Form, Formik } from "formik";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import * as Yup from "yup";
import { RootReducer } from "../../store/reducer";
import { toastError } from "../../utils/toast";
import { createAccount, getListAccount } from "./../../store/action";
import "./style.scss";

interface IAppProps {
  fullName: string;
  userName: string;
  password: string;
  confirmPassword: string;
}

export function Register(props: IAppProps) {
  const history = useHistory();

  const dispatch = useDispatch();
  const { dataCreate, listAccount } = useSelector(
    (state: RootReducer) => state.accountReducer
  );

  useEffect(() => {
    dispatch(getListAccount());
  }, [dataCreate]);

  const initialValues: IAppProps = {
    fullName: "",
    userName: "",
    password: "",
    confirmPassword: "",
  };

  const registerSchema = Yup.object().shape({
    fullName: Yup.string()
      .min(3, "Too Short!")
      .max(40, "Too Long!")
      .required("Required!")
      .matches(/^[A-Za-z ]*$/, "Please enter valid name!"),
    userName: Yup.string()
      .min(3, "Too Short!")
      .max(20, "Too Long!")
      .required("Required!"),
    password: Yup.string()
      .min(8, "Too Short!")
      .max(16, "Too Long!")
      .required("Required!"),
    confirmPassword: Yup.string()
      .required("Required!")
      .oneOf([Yup.ref("password"), null], "Password must match!"),
  });

  const handleSubmitForm = (values: IAppProps) => {
    const findAccount = listAccount.find(
      (item) => item.userName === values.userName
    );
    if (!findAccount) {
      dispatch(
        createAccount({
          fullName: values.fullName,
          userName: values.userName,
          password: values.password,
        })
      );
      history.push("/login");
    } else {
      toastError("UserName already exists!");
    }
  };

  return (
    <section className="register">
      <div className="register__container">
        <div className="register__header">
          <h1 className="register__title">Register Form</h1>
          <p className="register__description">
            Please fill in this form to create an account!
          </p>
        </div>
        <div className="register__main">
          <Formik
            initialValues={initialValues}
            validationSchema={registerSchema}
            onSubmit={(values: IAppProps) => handleSubmitForm(values)}
          >
            {({ errors, touched }) => (
              <Form>
                <div className="register__wrapper">
                  <Field
                    id="fullName"
                    name="fullName"
                    type="text"
                    placeholder="Full Name"
                    variant="outlined"
                    className="register__input"
                  />
                  {errors.fullName && touched.fullName && (
                    <div className="register__error">{errors.fullName}</div>
                  )}
                </div>
                <div className="register__wrapper">
                  <Field
                    id="userName"
                    name="userName"
                    placeholder="User Name"
                    type="text"
                    className="register__input"
                  />
                  {errors.userName && touched.userName && (
                    <div className="register__error">{errors.userName}</div>
                  )}
                </div>
                <div className="register__wrapper">
                  <Field
                    id="password"
                    name="password"
                    placeholder="Password"
                    type="password"
                    className="register__input"
                  />
                  {errors.password && touched.password && (
                    <div className="register__error">{errors.password}</div>
                  )}
                </div>
                <div className="register__wrapper">
                  <Field
                    id="confirmPassword"
                    name="confirmPassword"
                    placeholder="Confirm Password"
                    type="password"
                    className="register__input"
                  />
                  {errors.confirmPassword && touched.confirmPassword && (
                    <div className="register__error">
                      {errors.confirmPassword}
                    </div>
                  )}
                </div>
                <div className="register__checkbox">
                  <input type="checkbox" className="register__checkbox--icon" />
                  <p className="register__checkbox--description">
                    I accept the{" "}
                    <span className="register__checkbox--color">
                      Terms of Use
                    </span>{" "}
                    &
                    <span className="register__checkbox--color">
                      {" "}
                      Privacy Policy
                    </span>
                  </p>
                </div>
                <Button type="submit" variant="contained">
                  Register
                </Button>
                <p>
                  Already have an account?{" "}
                  <span
                    className="register__checkbox--color"
                    onClick={() => history.push("./login")}
                  >
                    Log In
                  </span>
                </p>
                <p
                  className="register__checkbox--color"
                  onClick={() => history.push("/")}
                >
                  Back to Home?
                </p>
              </Form>
            )}
          </Formik>
        </div>
      </div>
      <ToastContainer />
    </section>
  );
}
