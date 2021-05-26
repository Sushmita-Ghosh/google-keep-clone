import React from "react";
import "./login.styles.scss";

const Login = (props) => {
  const {
    email,
    setEmail,
    password,
    setPassword,
    loginHandler,
    signUpHandler,
    hasAccount,
    sethasAccount,
    emailError,
    passwordError,
  } = props;

  return (
    <div className="login">
      <div className="login-container">
        <label>Username</label>
        <input
          type="text"
          name=""
          id=""
          required
          autoFocus
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <p className="err-message">{emailError}</p>

        <label>Password</label>
        <input
          type="password"
          className="password"
          required
          autoFocus
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <p className="err-message">{passwordError}</p>

        <div className="btn-container">
          {hasAccount ? (
            <>
              <button onClick={loginHandler}>Sign In</button>
              <p>
                Don't have an account{" "}
                <span onClick={() => sethasAccount(!hasAccount)}>Sign Up</span>
              </p>
            </>
          ) : (
            <>
              <button onClick={signUpHandler}>Sign Up</button>
              <p>
                Have an account{" "}
                <span onClick={() => sethasAccount(!hasAccount)}>Sign In</span>
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
