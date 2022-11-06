import "./App.css";
import React from "react";
import { AllRoutes, ErrorFallback } from "./exports/Exports";
import { ErrorBoundary } from "react-error-boundary";
import { HelmetProvider } from "react-helmet-async";

function App() {
  const helmetContext = {};

  return (
    <HelmetProvider context={helmetContext}>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <AllRoutes />
      </ErrorBoundary>
    </HelmetProvider>
  );
}

export default App;
