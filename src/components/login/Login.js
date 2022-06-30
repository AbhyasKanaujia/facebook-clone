import React from "react";
import "./Login.sass";
import { Button } from "@mui/material";
import { auth, signInWithPopup, provider } from "../../firebase";
import { actionTypes } from "../../reducer";
import { useStateValue } from "../../StateProvider";

const Login = () => {
  const [dispatch] = useStateValue();

  const signIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });
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
