import React, { useContext, useState } from "react";
import "./login.css";
import * as authService from "../../services/authService";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

<<<<<<< HEAD
const Login = () => {
=======
const Login =  () => {
>>>>>>> origin/main
  const navigate = useNavigate();
  const { userLogin } = useContext(AuthContext);
  const [error, setError] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { email, password } = Object.fromEntries(new FormData(e.target));

    try {
      authService.login(email, password).then((authData) => {
        console.log(authData);
        userLogin(authData);
        if (authData.message) {
          console.log(authData.message);
          setError(authData.message);
          return;
        }
        navigate("/");
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="loginForm">
      <div>
        <label htmlFor="email">Email:</label>
        <input className="loginInput" type="email" id="email" name="email" />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          className="loginInput"
          type="password"
          id="password"
          name="password"
        />
      </div>
      {error && <p>{error}</p>}
      <button type="submit" className="btn">
        Login
      </button>
    </form>
  );
};

export default Login;
