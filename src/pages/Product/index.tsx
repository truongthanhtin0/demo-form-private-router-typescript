import { Button } from "@mui/material";
import React from "react";
import { useHistory } from "react-router-dom";

interface IAppProps {}

export function Product(props: IAppProps) {
  const history = useHistory();

  return (
    <section>
      <h1>Product Page</h1>
      <Button variant="contained" onClick={() => history.push("/")}>
        Home
      </Button>
    </section>
  );
}
