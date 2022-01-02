import React,{useState,useEffect} from 'react'
import { AsideStyled } from '../styles/AsideStyled'

export default function MyAccountInfo() {

    const [myData,setMyData]=useState(null)
    useEffect(()=>{
       getUserInfo()
    },[])//myData in [] will get api infinitly

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
       
        <AsideStyled>
             {myData&&
           <>
           <p>{myData.firstName} {myData.lastName} is inlogged</p>
           <p>email: {myData.email}</p>
           </>}
        </AsideStyled>
        
    )
}
