import { Button } from "@mui/material";
import React from "react";
import { useHistory } from "react-router-dom";

interface IAppProps {}

export function Profile(props: IAppProps) {
  const history = useHistory();
  return (
    <section>
      <h1>Profile Page</h1>
      <Button variant="contained" onClick={() => history.push("/")}>
        Home
      </Button>
    </section>
  );
}
