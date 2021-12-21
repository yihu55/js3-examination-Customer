import React,{useState} from 'react'
//import { useNavigate } from 'react-router-dom'

export default function LoginPage() {
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    // const navigate=useNavigate()
    

    function handleOnSubmit(e){

        e.preventDefault()
        console.log("submit")
        const url="https://frebi.willandskill.eu/api-token-auth/"
        const payload={email,password}
        fetch(url,{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(payload)
        })
        .then(res=>res.json())
        .then(data=>{
            const token=data.token 
            localStorage.setItem("examination",token)
            console.log(token)
            //navigate("/home")
        })
       
    }
    return (
        <div>
            <h1>login</h1>
            <form onSubmit={handleOnSubmit}>
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
                <button type="submit">Login</button>

            </form>

        </div>
    )
}
