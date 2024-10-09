import React from "react";
import LoginForm from "../components/LoginForm";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="auth-page">
      <LoginForm />
      <p>
        Don't have an account? <Link to="/signup">Signup here</Link>
      </p>
    </div>
  );
}

export default Login;
