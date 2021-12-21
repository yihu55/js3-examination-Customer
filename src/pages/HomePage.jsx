import React,{useState,useEffect} from 'react'
import AddCustomer from '../components/AddCustomer'

export default function HomePage() {
   
    const [data,setData]=useState(null)
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
        return setData(data.results)})
        //console.log(Object.entries(data))
        //   setData(Object.entries(data))}) 
        //.catch(err=>console.log("err: "+err))
}

// useEffect(()=>{
//     const token=localStorage.getItem("examination")
//     fetch("https://frebi.willandskill.eu/api/v1/me",{
       
//         method:"GET",
//         headers:{
//             "Content-Type":"application/json",
//             "Authorization":`Bearer ${token}`
//         }
//     })
//     .then(res=>res.json())
//     .then(data=>setMyData(data))
// },[])
 

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
          {data&&data.map((item,id)=>{
            return <p key={id}>{item.name}</p>
          })}
            {/* {data&&data.map((custom,id)=>{
                
                <p key={id}>{custom}</p>
                
            })} */}
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
