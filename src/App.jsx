import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import NavBarLargeScreen from "./components/NavBar/NavBarLargeScreen";
import GlobalRoutes from "./routes/GlobalRoutes";
import "./App.css";
import Footer from "./pages/Footer/Footer";

const App = () => {
  return (
    <Router>
      <NavBar />
      <NavBarLargeScreen />
      <GlobalRoutes />
      <Footer />
    </Router>
  );
};

export default App;
