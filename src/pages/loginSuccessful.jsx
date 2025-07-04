/*import React from "react";

export default function LoginSuccesful() {
    return (
        <div>
            LoginSuccesful
        </div>
    )
}*/

import React from "react";
import "./loginSuccessful.css";
import { Link } from "react-router-dom";

export default function LoginSuccessful() {
  return (
    <div className="success-container">
      <div className="success-box">
        <h1>Welcome!</h1>
        <p>You have successfully logged in to <strong>FreshTrack</strong>.</p>
        <p>Start managing shelf life and contributing to a zero-waste future.</p>
        <Link to="/" className="back-home">Go to Homepage</Link>
      </div>
    </div>
  );
}
