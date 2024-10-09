import React from "react";
import SignupForm from "../components/SignupForm";
import { Link } from "react-router-dom";

function Signup() {
  return (
    <div className="auth-page">
      <SignupForm />
      <p>
        Already have an account? <Link to="/login">Login here</Link>
      </p>
    </div>
  );
}

export default Signup;
