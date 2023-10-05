import React from "react";
import { openModel } from "../../store/modelSlice";
import { useDispatch } from "react-redux";

const LoginRegister = () => {
  const dispatch = useDispatch();
  return (
    <div className="login-register">
      <button
        className="btn"
        onClick={() => dispatch(openModel({ name: "Login" }))}
      >
        Login
      </button>
      <div>OR</div>
      <button
        className="btn"
        onClick={() =>
          dispatch(openModel({ name: "Register", position: "bottom" }))
        }
      >
        Register
      </button>
    </div>
  );
};

export default LoginRegister;
