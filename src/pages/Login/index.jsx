import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import style from "./style.module.css";

function Login() {
  const navigate = useNavigate();
  const [logindata, setLoginData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        logindata.email,
        logindata.password
      );
      navigate("/");
      // Signed in
      const user = userCredential.user;
      // ...
    } catch (error) {
      console.error("Error signing in with password and email", error);
    }
  };

  return (
    <div className={style.wrapper}>
      <h2 className={style.t}>Login</h2>
      <form className={style.box} onSubmit={handleSubmit}>
        <div className={style.emailDiv}>
          <p className={style.inputText}>Email</p>
          <input
            type="email"
            className={style.input}
            value={logindata.email}
            onChange={(e) =>
              setLoginData({ ...logindata, email: e.target.value })
            }
          />
        </div>
        <div className={style.passwordDiv}>
          <p className={style.inputText}>Password</p>
          <input
            type="password"
            className={style.input}
            value={logindata.password}
            onChange={(e) =>
              setLoginData({ ...logindata, password: e.target.value })
            }
          />
        </div>
        <button type="submit" className={style.btn}>
          LOGIN
        </button>
        <button type="button" className={style.btnn}>
          GUEST USER
        </button>
        <div className={style.lastDiv}>
          <p className={style.lastText}>Not a member yet?</p>
        </div>
      </form>
    </div>
  );
}

export default Login;
