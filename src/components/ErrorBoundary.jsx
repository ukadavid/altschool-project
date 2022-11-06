import React from "react";
import "../styles/ErrorPage.css";

function ErrorFallback({ error }) {
  return (
    <div className="center">
      <div className="error__boundary" role="alert">
        <h3>Things will always go wrong:</h3>
        <p>{error.message}</p>
      </div>
    </div>
  );
}

export default ErrorFallback;
