import React,{useState,useEffect} from 'react'
import AddCustomer from '../components/AddCustomer'
import CustomerList from '../components/CustomerList'
import Header from '../components/Header'
import { CustomerInfoStyled } from '../styles/CustomerInfoStyled'

import { MainStyled } from '../styles/MainStyled'


export default function HomePage() {

    return (
      
        <div>
     
        <MainStyled bg="#393e46">
        {/* <CustomerList onSuccess={props.onSuccess}/>
        <AddCustomer onSuccess={props.onSuccess}/> */}
        <CustomerList />
        <AddCustomer />
        </MainStyled>
        </div>
        
    )
}
