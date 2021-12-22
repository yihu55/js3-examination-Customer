import React from "react";
import LoginPage from "./pages/LoginPage";
import { Routes, Route, Link } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CustomDetailPage from "./components/CustomDetail";
import Header from "./components/Header";
import { HeaderStyled } from "./styles/HeaderStyled";

function App() {
  return (
    <div>
      {/* <Link to="/login">Login</Link>
      <Link to="/home">Home</Link> */}

      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/customers/:id" element={<CustomDetailPage />} />
      </Routes>
    </div>
  );
}

export default App;
