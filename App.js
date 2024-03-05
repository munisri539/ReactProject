import React, { useState } from "react";
import "./style.css";

function App() {
  const [errorMessage, setErrorMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validCredentials = {
    username: "admin",
    password: "pa@123"
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const { uname, pass } = event.target.elements;

    if (
      uname.value === validCredentials.username &&
      pass.value === validCredentials.password
    ) {
      setIsSubmitted(true);
      setErrorMessage("");
    } else {
      setIsSubmitted(false);
      setErrorMessage("Invalid username or password.");
    }
  };

  return (
    <div className="app">
      <div className="login-form">
        <div className="title">Sign In</div>
        {isSubmitted ? (
          <div>User is successfully logged in</div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="input-container">
              <label>Username</label>
              <input type="text" name="uname" required />
            </div>
            <div className="input-container">
              <label>Password</label>
              <input type="password" name="pass" required />
            </div>
            <div className="button-container">
              <button type="submit">Login</button>
            </div>
            {errorMessage && <div className="error">{errorMessage}</div>}
          </form>
        )}
      </div>
    </div>
  );
}

export default App;
