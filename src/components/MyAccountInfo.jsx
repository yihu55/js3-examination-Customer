import React,{useState,useEffect} from 'react'

export default function MyAccountInfo() {

    const [myData,setMyData]=useState([])
    useEffect(()=>{
       getUserInfo()
    },[])

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
             {myData&&
           <>
           <p>{myData.firstName} {myData.lastName} is inlogged</p>
           <p>email: {myData.email} id:{myData.id}</p>
           </>}
        </div>
    )
}
