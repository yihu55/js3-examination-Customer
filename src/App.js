import React, { useState, useEffect, createContext } from "react";
import LoginPage from "./pages/LoginPage";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CustomerDetailPage from "./pages/CustomerDetailPage";
import Header from "./components/Header";
import UserCreatePage from "./pages/UserCreatePage";

//const CustomerListContext = createContext({});
function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/home" element={<HomePage />} />
        {/* //onSuccess={fetchData} />} /> */}
        <Route path="/customers/:id" element={<CustomerDetailPage />} />
        <Route path="/user-create" element={<UserCreatePage />} />
      </Routes>
    </div>
    // <CustomerListContext.Provider value={{ customerList, setCustomerList }}>

    // </CustomerListContext.Provider>
  );
}
//export { CustomerListContext };
export default App;
