import React from "react";
import LoginPage from "./pages/LoginPage";
import { Routes, Route, Link } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CustomerDetailPage from "./pages/CustomerDetailPage";
import Header from "./components/Header";

function App() {
  return (
    <div>
      {/* <Link to="/login">Login</Link>
      <Link to="/home">Home</Link> */}
      <Header />

      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/customers/:id" element={<CustomerDetailPage />} />
      </Routes>
    </div>
  );
}

export default App;
