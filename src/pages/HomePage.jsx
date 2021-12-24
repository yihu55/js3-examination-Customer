import React,{useState,useEffect} from 'react'
import AddCustomer from '../components/AddCustomer'
import CustomerList from '../components/CustomerList'
import Header from '../components/Header'
import { MainStyled } from '../styles/MainStyled'


export default function HomePage(props) {
   
//     const [customerList,setCustomerList]=useState(null)
    
    
    
//     useEffect(()=>{
//         fetchData()
//         //getUserInfo()
//     },[])
    
// function fetchData(){
    
//         const url="https://frebi.willandskill.eu/api/v1/customers/"
//         const token=localStorage.getItem("examination")
//         fetch(url,{

//             method:"GET",
//             headers:{
//                 "Content-Type":"application/json",
//                 "Authorization":`Bearer ${token}`
//             }
//         })
//         .then(res=>res.json())
//         .then(data=>{console.log(data)
//         return setCustomerList(data.results)})     
// }
    return (
        <div>
     
        <MainStyled bg="#393e46">
        <CustomerList/> {/*onSuccess={fetchData}/>*/}
        <AddCustomer />  {/*onSuccess={fetchData}/>*/}
        </MainStyled>
        </div>
    )
}
