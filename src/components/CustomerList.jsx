import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
import { CustomerListStyled } from '../styles/CustomerListStyled'
import { LinkStyled } from '../styles/LinkStyled'

export default function CustomerList() {
    const [customerList,setCustomerList]=useState(null)
    useEffect(()=>{
        fetchData()
        
    },[])
    
function fetchData(){
    
        const url="https://frebi.willandskill.eu/api/v1/customers/"
        const token=localStorage.getItem("examination")
        fetch(url,{

            method:"GET",
            headers:{
                "Content-Type":"application/json",
                "Authorization":`Bearer ${token}`
            }
        })
        .then(res=>res.json())
        .then(data=>{console.log(data)
        return setCustomerList(data.results)})
        
}

    return (
        <CustomerListStyled bg="#f96d00">
          <h2>Customers</h2>
          <button onClick={fetchData}>refresh</button>
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
