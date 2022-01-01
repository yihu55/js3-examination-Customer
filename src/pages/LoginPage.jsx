import React,{useState} from 'react'
import { ButtonStyled } from '../styles/ButtonStyled'
import { FormSectionStyled } from '../styles/FormSectionStyled'
import { FormStyled } from '../styles/FormStyled'
import { MainStyled } from '../styles/MainStyled'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'


export default function LoginPage() {
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const navigate=useNavigate()
    

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
            navigate("/home")
        })
       
    }
    return (
        <div>
        
        <MainStyled bg="#393e46" height="90vh">
        <FormSectionStyled bg="#f96d00" width="40%">
            <h1>login</h1>
            <FormStyled onSubmit={handleOnSubmit}>
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
                <p>If not customer<Link to="/user-create"> create a account</Link></p>
                <ButtonStyled type="submit" margin="true">Login</ButtonStyled>
            </FormStyled>
        </FormSectionStyled>
        </MainStyled>
        
        </div>
    )
}
