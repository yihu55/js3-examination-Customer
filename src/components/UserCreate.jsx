import React,{useState} from 'react'
import { Link} from 'react-router-dom'
import { ButtonStyled } from '../styles/ButtonStyled'
import { FormSectionStyled } from '../styles/FormSectionStyled'
import { FormStyled } from '../styles/FormStyled'

export default function UserCreate() {
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const [organisationKind,setOrganisationKind]=useState("")
    const [response,setResponse]=useState("")
   


    function handleOnSubmit(e){
        e.preventDefault()
        const payload={
            email,
            password,
            organisationKind
        }
        const url="https://frebi.willandskill.eu/auth/users/"
        fetch(url,{
            method:"POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(payload)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setResponse(data)})
    }

    return (
        <div>
            {response}
        <FormSectionStyled>
            <h1>Create user</h1>
            <FormStyled>
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
                <input
                type="text"
                value={organisationKind}
                placeholder="organisationKind"
                onChange={e=>setOrganisationKind(e.target.value)}
                />
              
                <ButtonStyled onSubmit={handleOnSubmit}>Create User</ButtonStyled>
                <p>Already have account<Link to="/login"> Go to Login Page</Link></p>
            </FormStyled>
        </FormSectionStyled>
     
        </div>
    )
}
