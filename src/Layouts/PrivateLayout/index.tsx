import React, { useState } from "react";
import { Redirect, Route } from "react-router-dom";
import Header from "../../components/Header";

interface IAppProps {
  path: string;
  component: Function;
}

export default function PrivateLayout(props: IAppProps) {
  return (
    <Route
      path={props.path}
      render={(propsRoute) => {
        let ComponentRoute = props.component;
        let info = localStorage.getItem("user") || null;
        return info ? (
          <ComponentRoute {...props} {...propsRoute} />
        ) : (
          <Redirect to={{ pathname: "/login" }} />
        );
      }}
    />
  );
}
