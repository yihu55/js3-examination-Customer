import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom'

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
        <div>
             <h2>Customers</h2>
          <button onClick={fetchData}>refresh</button>
          {customerList&&customerList.map((customer,id)=>{
            return (
            <section key={customer.id}>
            <Link to={`/customers/${id}`}><p>NAME: {customer.name} id:{customer.id}</p></Link>
           {/* {`/customers/${customer.id}`} get id value of customer */}
            </section>)
          })}
        </div>
    )
}
