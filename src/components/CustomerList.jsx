import React,{useState,useEffect,useContext} from 'react'
import { Link } from 'react-router-dom'
import { CustomerListContext } from '../App'
import { ButtonStyled } from '../styles/ButtonStyled'
import { CustomerListStyled } from '../styles/CustomerListStyled'
import { LinkStyled } from '../styles/LinkStyled'



export default function CustomerList(props) {
    const {customerList,setCustomerList}=useContext(CustomerListContext)
    console.log(customerList)
   
    function handleOnDelete(id) {
        console.log(id)
        const url = `https://frebi.willandskill.eu/api/v1/customers/${id}/`;
        const token = localStorage.getItem("examination");
        const headers = {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        }
        fetch(url, {
          headers: headers,
          method: "DELETE"
        })
        .then((res) =>props.onSuccess())
        
      }

    return (
        
        <CustomerListStyled bg="#f96d00">
          <h2>Customers</h2>
          {/* <button onClick={customerList}>refresh</button> */}
          {customerList&&customerList.map((customer,id)=>{
            return (
            <div key={customer.id}>
            <LinkStyled to={`/customers/${id}`} color="#222831"><p>NAME: {customer.name} id:{customer.id}</p></LinkStyled>
            <ButtonStyled bg="#222831" color="#f96d00" onClick={(e)=>handleOnDelete(customer.id)}>Delete</ButtonStyled>
            </div>)
          })}
        </CustomerListStyled>
    
    )

}

