import React from "react";
import { Link } from "react-router-dom";

const RegisterContainer = () => {
  return (
    <div>
      <h1> Register </h1>
      <Link to="/auth/login">Register</Link>
    </div>
  );
};

export default RegisterContainer;
