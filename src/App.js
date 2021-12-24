import React, { useState, useEffect, createContext } from "react";
import LoginPage from "./pages/LoginPage";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CustomerDetailPage from "./pages/CustomerDetailPage";
import Header from "./components/Header";
import UserCreatePage from "./pages/UserCreatePage";

const CustomerListContext = createContext({});
function App() {
  const [customerList, setCustomerList] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  function fetchData() {
    const url = "https://frebi.willandskill.eu/api/v1/customers/";
    const token = localStorage.getItem("examination");
    fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        return setCustomerList(data.results);
      });
  }

  return (
    <CustomerListContext.Provider value={{ customerList }}>
      {/* <Link to="/login">Login</Link>
      <Link to="/home">Home</Link> */}
      <Header />

      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/customers/:id" element={<CustomerDetailPage />} />
        <Route path="/user-create" element={<UserCreatePage />} />
      </Routes>
    </CustomerListContext.Provider>
  );
}
export { CustomerListContext };
export default App;
