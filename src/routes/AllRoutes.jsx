import React from "react";
import { Routes, Route } from "react-router-dom";
import { Counter, Home, ErrorPage } from "../exports/Exports";

function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/counter" element={<Counter />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  )
}

export default AllRoutes;
