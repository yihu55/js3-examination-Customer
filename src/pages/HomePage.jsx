import React,{useState,useEffect} from 'react'
import AddCustomer from '../components/AddCustomer'
import { Link } from 'react-router-dom'



export default function HomePage() {
   
    const [customerList,setCustomerList]=useState(null)
    const [myData,setMyData]=useState([])
    
    
    useEffect(()=>{
        fetchData()
        getUserInfo()
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

function getUserInfo(){
    const token=localStorage.getItem("examination")
    fetch("https://frebi.willandskill.eu/api/v1/me",{
       
        method:"GET",
        headers:{
            "Content-Type":"application/json",
            "Authorization":`Bearer ${token}`
        }
    })
    .then(res=>res.json())
    .then(data=>setMyData(data))
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
            
            <h2>end</h2>
           {myData&&
           <>
           <p>{myData.firstName} {myData.lastName} is inlogged</p>
           <p>email: {myData.email} id:{myData.id}</p>
           </>}
           <AddCustomer  onSuccess={fetchData}/>
         
        </div>
    )
}
