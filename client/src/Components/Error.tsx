import { Button } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";

const Error = () => {
  return (
    <div>
      <h1 style={{ color: "red" }}>
        The ID You enter was not Associated to any user
      </h1>
      <div
        style={{
          margin: "auto",
          width: "10%",
          padding: "10px",
          textDecoration: "none",
        }}
      >
        <Link to="/createPost">
          <Button color="primary">Try Again</Button>
        </Link>
        <Link to="/">
          <Button color="primary">Go Back to Home</Button>
        </Link>
      </div>
    </div>
  );
};

export default Error;
