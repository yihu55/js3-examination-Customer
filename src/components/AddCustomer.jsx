import React,{ useState} from 'react'
import { ButtonStyled } from '../styles/ButtonStyled'
import { FormSectionStyled } from '../styles/FormSection'
import { FormStyled } from '../styles/FormStyled'

export default function AddCustomer(props) {
    const [name,setName]=useState("")
    const [organisationNr,setOrganisationNr]=useState("SExxx")
    const [vatNr,setVatNr]=useState("")
    const [reference,setReference]=useState("")
    const [paymentTerm,setPaymentTerm]=useState(0)
    const [website,setWebsite]=useState("")
    const [email,setEmail]=useState("user@example.com")
    const [phoneNumber,setPhoneNumber]=useState("076-")

    function renderInput(type,placeholder,value,setValue){
        return(
            <input 
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={e=>setValue(e.target.value)}
            />
        )
    }
  
    function handleOnSubmit(e){
        e.preventDefault()
        const url="https://frebi.willandskill.eu/api/v1/customers/"
        const token=localStorage.getItem("examination")
        const payload={name,organisationNr,vatNr,reference,paymentTerm,website,email,phoneNumber}
        fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization":`Bearer ${token}`

            },
            body: JSON.stringify(payload),
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data) 
            return props.onSuccess()})
    
    }
   
    return (
        <div>
            <FormSectionStyled>
            <h3>add customer</h3>
            <FormStyled onSubmit={handleOnSubmit}>
            
            {renderInput("text","NAME",name,setName)}
            {renderInput("text","ORGANISATION NUMBER",organisationNr,setOrganisationNr)}
            {renderInput("text","VAT NUMBER",vatNr,setVatNr)}
            {renderInput("text","REFERENCE",reference,setReference)}
            {renderInput("number","PAYMENT TERM",paymentTerm,setPaymentTerm)}
            {renderInput("text","WEBSITE",website,setWebsite)}
            {renderInput("email","EMAIL",email,setEmail)}
            {renderInput("tel","PHONE NUMBER",phoneNumber,setPhoneNumber)}
            <ButtonStyled bg="#222831" color="#f96d00" type="submit">create customer</ButtonStyled>
            </FormStyled>
            </FormSectionStyled>
        </div>
    )
      
}

       