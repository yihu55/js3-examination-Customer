import React, { useEffect,useState } from 'react'
import { useParams } from 'react-router-dom'
import {CustomerInfoStyled} from '../styles/CustomerInfoStyled'



export default function CustomerDetail() {
    const {id}=useParams()
    console.log(id)
    
  const [customer,setCustomer]=useState(null)
  
  
 
    
    useEffect(()=>{
        const url=`https://frebi.willandskill.eu/api/v1/customers/${id}`
        const token=localStorage.getItem("examination")
        fetch(url,{
            headers:{
                "Content-Type":"application/json",
                "Authorization":`Bearer ${token}`
            }

        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data.results[id])
            setCustomer(data.results[id])})


    },[])
    
    return (

     <CustomerInfoStyled bg="#f96d00">
        {customer&&
        <div>
            <h2>Customer detail-{id}</h2>
            {customer.name}
            {customer.id}
             customer id : {id}
             <p>ORGANISATION NUMBER:{customer.name}</p>
            <p>VAT: </p> 
            <p>REFERENCE: {customer.reference}</p>
            <p>PAYMENTTERM :{customer.paymentTerm}</p>
            <p>WEBSITE : {customer.website}</p>
            <p>EMAIL : {customer.email}</p>
            <p>PHONE : {customer.phoneNumber}</p>     
        </div>}
        </CustomerInfoStyled>
    )
}
