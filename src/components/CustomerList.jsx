import React,{useState,useEffect,useContext} from 'react'
import { Link } from 'react-router-dom'
import { CustomerListContext } from '../App'
import { CustomerListStyled } from '../styles/CustomerListStyled'
import { LinkStyled } from '../styles/LinkStyled'



export default function CustomerList() {
    const {customerList}=useContext(CustomerListContext)
    console.log(customerList)

    return (
        
        <CustomerListStyled bg="#f96d00">
          <h2>Customers</h2>
          {/* <button onClick={fetchData}>refresh</button> */}
          {customerList&&customerList.map((customer,id)=>{
            return (
            <section key={customer.id}>
            <LinkStyled to={`/customers/${id}`} color="#222831"><p>NAME: {customer.name} id:{customer.id}</p></LinkStyled>
           {/* {`/customers/${customer.id}`} get id value of customer */}
            </section>)
          })}
        </CustomerListStyled>
    
    )

}

