import React from "react";
import dummyUser from "../dummyuser";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();
  const [isShown, setIsSHown] = useState(false);
  const [alert, setAlert] = useState(false);
  const [alertText, setAlertText] = useState("");
  const initialValues = {
    username: "",
    password: "",
  };
  const handleClick = () => {
    const a = dummyUser.find((item) => item.username === credentials.username);
    if (a) {
      if (a.password === credentials.password) {
        localStorage.setItem("username", credentials.username);
        localStorage.setItem("password", credentials.password);
        navigate("/");
        return;
      }

      setAlert(true);
      setTimeout(() => {
        setAlert(false);
      }, 2000);

      setAlertText("Incorrect Username or Password");
      return;
    }
    setAlert(true);
    setTimeout(() => {
      setAlert(false);
    }, 2000);
    setAlertText("Please Provide all details");
  };
  const [credentials, setCredentials] = useState(initialValues);

  return (
    <main>
      <div className="login-container">
        <h1>Login</h1>
        <div className="main-form">
          <div>
            <div className="username">
              <label>Username</label>
              <input
                type="text"
                value={credentials.username}
                onChange={(e) =>
                  setCredentials({ ...credentials, username: e.target.value })
                }
              />
            </div>
            <div className="password">
              <label>Password</label>
              <input
                type={isShown ? "text" : "password"}
                placeholder="Password"
                className="input"
                value={credentials.password}
                onChange={(e) =>
                  setCredentials({ ...credentials, password: e.target.value })
                }
              />
              <div className="show-password">
                <input
                  id="checkbox"
                  type="checkbox"
                  checked={isShown}
                  onChange={() => setIsSHown(!isShown)}
                />
                <p>Show Password</p>
              </div>
            </div>
          </div>
          <div className="button-div">
            <button onClick={() => handleClick()}>Login</button>
          </div>
          {alert && (
            <div className="alert-text">
              <p>{alertText}</p>
            </div>
          )}
        </div>
      </div>
    </main>
  );
};

export default Login;
