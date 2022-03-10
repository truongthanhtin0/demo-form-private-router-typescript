import Button from "@mui/material/Button";
import { Field, Form, Formik } from "formik";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import * as Yup from "yup";
import { RootReducer } from "../../store/reducer";
import { toastError, toastSuccess } from "../../utils/toast";
import { getListAccount } from "./../../store/action";
import "./style.scss";

interface IAppProps {
  userName: string;
  password: string;
}

export function Login(props: IAppProps) {
  const history = useHistory();

  const dispatch = useDispatch();
  const { listAccount } = useSelector(
    (state: RootReducer) => state.accountReducer
  );

  useEffect(() => {
    dispatch(getListAccount());
  }, []);

  const initialValues: IAppProps = {
    userName: "",
    password: "",
  };

  const loginSchema = Yup.object().shape({
    userName: Yup.string()
      .min(3, "Too Short!")
      .max(20, "Too Long!")
      .required("Required!"),
    password: Yup.string()
      .min(8, "Too Short!")
      .max(16, "Too Long!")
      .required("Required!"),
  });

  const handleSubmitForm = (values: IAppProps) => {
    const findAccount = listAccount.find(
      (item) =>
        item.userName === values.userName && item.password === values.password
    );
    if (findAccount) {
      localStorage.setItem(
        "user",
        JSON.stringify({
          fullName: findAccount.fullName,
          userName: findAccount.userName,
        })
      );
      toastSuccess("Login Successfully!");
      history.push("/");
    } else {
      toastError("Login failed!");
    }
  };

  return (
    <section className="register">
      <div className="register__container">
        <div className="register__header">
          <h1 className="register__title">Login Form</h1>
          <p className="register__description">
            Please fill in this form to login!
          </p>
        </div>
        <div className="register__main">
          <Formik
            initialValues={initialValues}
            validationSchema={loginSchema}
            onSubmit={(values: IAppProps) => handleSubmitForm(values)}
          >
            {({ errors, touched }) => (
              <Form>
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
                <p className="register__checkbox--color">Forgot Password?</p>
                <Button type="submit" variant="contained">
                  Login
                </Button>
                <p>
                  Don't have an account?{" "}
                  <span
                    className="register__checkbox--color"
                    onClick={() => history.push("./register")}
                  >
                    Register
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
