import React, { useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "../../components/Header";

interface IAppProps {}

export function Home(props: IAppProps) {
  const [info, setInfo] = useState(localStorage.getItem("user"));

  const handleLogout = () => {
    localStorage.removeItem("user");
    setInfo("");
  };

  return (
    <section>
      <Header handleLogout={handleLogout} info={info} />
      <h1>Home Page</h1>
      {info && <h1>Welcome to {JSON.parse(info).fullName}!</h1>}
      <ToastContainer />
    </section>
  );
}
