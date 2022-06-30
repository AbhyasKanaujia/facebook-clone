import React from "react";
import "./Login.sass";
import { Button } from "@mui/material";
import { auth, signInWithPopup, provider } from "../../firebase";

const Login = () => {
  const signIn = (e) => {
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => alert(error.message));
  };
  return (
    <div className="login">
      <div className="login__logo">
        <img
          src="https://img.icons8.com/fluency/240/000000/facebook-new.png"
          alt=""
        />
        <h1 className="login__logo--text">Facebook</h1>
      </div>
      <Button onClick={signIn} className="login__button" type="submit">
        Sign In
      </Button>
    </div>
  );
};

export default Login;
