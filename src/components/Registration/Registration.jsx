import React, { useState } from "react";
import { Form, Alert } from "react-bootstrap";
import Login from "../Login/Login";

function Registration() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [flag, setFlag] = useState(false);
  const [login, setLogin] = useState(true);
  const [info, setInfo] = useState(true);

  // on form submit...
  function handleFormSubmit(e) {
    e.preventDefault();

    if (!name || !email || !password) {
      setFlag(true);
    } else {
      setFlag(false);
      localStorage.setItem("puneethSubmissonEmail", JSON.stringify(email));
      localStorage.setItem(
        "puneethSubmissonPassword",
        JSON.stringify(password)
      );
      console.log("Saved in Local Storage");

      setLogin(!login);
    }
  }

  // Directly to the login page
  function handleClick() {
    setLogin(!login);
  }

  return (
    <>
      {info ? (
        <div>
          {" "}
          {login ? (
            <form onSubmit={handleFormSubmit}>
              <h3>Sign Up</h3>
              <div className="form-group">
                <label> First Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="First Name"
                  name="name"
                  onChange={(event) => setName(event.target.value)}
                />
              </div>

              <div className="form-group">
                <label> Last Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Last Name"
                  name="name"
                  onChange={(event) => setName(event.target.value)}
                />
              </div>

              <div className="form-group">
                <label>Email address</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter email"
                  onChange={(event) => setEmail(event.target.value)}
                />
              </div>
              <div className="form-group">
                <label>Password</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Enter password"
                  onChange={(event) => setPassword(event.target.value)}
                />
              </div>

              <button
                type="submit"
                className="btn btn-primary btn-lg btn-block"
              >
                Sign up
              </button>
              <p className="forgot-password text-right">
                Already registered{" "}
                <a href="#" onClick={handleClick}>
                  log in?
                </a>
              </p>
              {flag && (
                <Alert color="primary" variant="danger">
                  I got it you are in hurry! But every Field is important!
                </Alert>
              )}
            </form>
          ) : (
            <Login />
          )}
        </div>
      ) : (
        <div></div>
      )}
    </>
  );
}

export default Registration;
