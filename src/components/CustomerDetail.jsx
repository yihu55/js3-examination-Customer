import React, { useEffect,useState,useContext } from 'react'
import { useParams } from 'react-router-dom'
import {CustomerInfoStyled} from '../styles/CustomerInfoStyled'
//import {CustomerListContext} from '../App'


export default function CustomerDetail() {
     //const {id}=useParams()
     const params=useParams()
     const id=params.id
    
    //const {customerList}=useContext(CustomerListContext)
    const [customer, setCustomer] = useState(null);

    useEffect(()=>{
        const url=`https://frebi.willandskill.eu/api/v1/customers/`
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
            setCustomer(data.results[id]);
          });
    },[])
  
   
    return (

     <CustomerInfoStyled bg="#f96d00">
        {customer&&
        <div>
            <h1>Customer detail</h1>
            <h3>NAME:{customer.name}</h3>
            <p>ORGANISATION NUMBER:{customer.name}</p>
            <p>VAT:{customer.vatNr} </p> 
            <p>REFERENCE: {customer.reference}</p>
            <p>PAYMENTTERM :{customer.paymentTerm}</p>
            <p>WEBSITE : {customer.website}</p>
            <p>EMAIL : {customer.email}</p>
            <p>PHONE : {customer.phoneNumber}</p>     
        </div>}
        </CustomerInfoStyled>
    )
}
