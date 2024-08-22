import React from "react";
import CheckIn from "../components/CheckIn/CheckIn";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Muebles from "../pages/muebles/Muebles";

const GlobalRoutes = () => {
  return (
    <Routes>
      <Route path="/CheckIn" element={<CheckIn />} />
      {/* Agrega más rutas según sea necesario */}
      {/* <Route path="/muebles" element={<Muebles />} /> */}
      <Route path="/ofertas" element={<Home />} />
      <Route path="/" element={<Home />} />
      <Route path="/muebles" element={<Muebles />} />
    </Routes>
  );
};

export default GlobalRoutes;
