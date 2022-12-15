import React, { useContext, useState } from "react";
import styles from "./index.module.scss";
import amzonLogo from "../../assets/logo/Amazon_logo.png";
import { useNavigate } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../../firebase";
import { AuthContext } from "../../context/StateProvider";
import { toast } from "react-toastify";

const Login = () => {
  const { dispatch, currentUser } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleOnLogo = () => {
    if (currentUser) {
      navigate("/");
    } else {
      navigate("/login");
    }
  };

  const handleOnLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        dispatch({ type: "LOGIN", payload: user });
        toast.success("sign in success");
        navigate("/");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };
  const handleOnRegister = (e) => {
    e.preventDefault();
    try {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          dispatch({ type: "LOGIN", payload: user });
          toast.success("create success");
          navigate("/");
        })
        .catch((error) => {
          toast.error(error.message);
        });
    } catch (err) {
      toast.error(err);
    }
  };
  return (
    <div className={styles.login}>
      <div className={styles.logoDiv} onClick={handleOnLogo}>
        <img className={styles.logo} src={amzonLogo} alt="logo" />
      </div>
      <div className={styles.logInBox}>
        <div className={styles.signInDiv}>
          <h1>Sign In</h1>
          <form>
            <h5>E-mail</h5>
            <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" />
            <h5>Password</h5>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
            />
            <button onClick={handleOnLogin} type="submit">
              Sign In
            </button>
          </form>
          <p>
            By signing-in you agree to the AMOZON-FAKE-CLONE Conditions of the
            use & Sale. Please see our Privacy Notice, our Cookies Notice and
            our Intrest-Based Ads Notice.
          </p>
          <button onClick={handleOnRegister}>Create your amazon account</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
