import React,{useState,useEffect} from 'react'

export default function UserCreate() {
    const [email,setEmail]=useState("")
    cosnt [password,setPassword]=useState("")

    useEffect(()=>{
        const url="https://frebi.willandskill.eu/auth/users/"
        
    },[])


    return (
        <div>
            <h1>Create user</h1>
            <h2>create</h2>
            <input 
                type="text" 
                value={email} 
                placeholder="Email"
                onChange={e=>setEmail(e.target.value)}
                />
                 <input 
                type="text" 
                value={password} 
                placeholder="Password"
                onChange={e=>setPassword(e.target.value)}
                />
        </div>
    )
}
