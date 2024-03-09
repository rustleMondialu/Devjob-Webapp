import Navbar from "../Navbar/Navbar";
import { useState } from "react";
import "./Login.scss";
// import email from "../../email.svg";
// import password from "../../password.svg";
// import user from "../../user.svg";
import { auth } from "../../firebase/config";
import {
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

function Login() {
  // const [isLoading, setIsLoading] = useState(false);
  const [loginType, setLoginType] = useState("login");
  const [userCredentials, setUserCredentials] = useState({});
  const [error, setError] = useState("");
  const userSignOutAfter = () => {
    signOut(auth)
      .then(() => {
        console.log("user signed on");
      })
      .catch((error) => console.log(error));
  };
  function handleCredentials(e) {
    setUserCredentials({ ...userCredentials, [e.target.name]: e.target.value });
    console.log(userCredentials);
  }
  function handleSignup(e) {
    e.preventDefault();
    setError("");
    createUserWithEmailAndPassword(
      auth,
      userCredentials.email,
      userCredentials.password
    )
      .then((userCredential) => {
        console.log(userCredential.user);
        userSignOutAfter();
      })
      .catch((error) => {
        setError(error.message);
      });
  }
  function handleLogin(e) {
    e.preventDefault();
    setError("");
    signInWithEmailAndPassword(
      auth,
      userCredentials.email,
      userCredentials.password
    )
      .then((userCredential) => {
        console.log(userCredential.user);
      })
      .catch((error) => {
        setError(error.message);
      });
  }
  function handlePasswordReset() {
    const email = prompt("Please enter your email");
    sendPasswordResetEmail(auth, email);
    alert("Email sent! Check your inbox for password reset instructions");
  }

  return (
    <>
      <Navbar />

      <div className="container_login">
        <section>
          <h1>Welcome to the DevJobs</h1>
          <p>Login or create an account</p>
          <div className="login-type">
            <button
              className={`btn ${loginType === "login" ? "selected" : ""}`}
              onClick={() => setLoginType("login")}
            >
              Login
            </button>
            <button
              className={`btn ${loginType === "signup" ? "selected" : ""}`}
              onClick={() => setLoginType("signup")}
            >
              Signup
            </button>
          </div>
          <form className="add-form login">
            <div className="form-control">
              <label>Email </label>
              <input
                onChange={(e) => {
                  handleCredentials(e);
                }}
                type="text"
                name="email"
                placeholder="Enter your email"
              />
            </div>
            <div className="form-control">
              <label>Password </label>
              <input
                onChange={(e) => {
                  handleCredentials(e);
                }}
                type="password"
                name="password"
                placeholder="Enter your password"
              />
            </div>
            {loginType === "login" ? (
              <button
                onClick={(e) => {
                  handleLogin(e);
                }}
                className="active btn btn-block"
              >
                Login
              </button>
            ) : (
              <button
                onClick={(e) => {
                  handleSignup(e);
                }}
                className="active btn btn-block"
              >
                Sign Up
              </button>
            )}
            {error && <div className="error">{error}</div>}

            <p onClick={handlePasswordReset} className="forgot-password">
              Forgot Password?
            </p>
          </form>
        </section>
      </div>
    </>
  );
}

export default Login;
