import React from 'react'
import AddCustomer from '../components/AddCustomer'
import CustomerList from '../components/CustomerList'
import MyAccountInfo from '../components/MyAccountInfo'
import { MainStyled } from '../styles/MainStyled'


export default function HomePage() {

    return (
      
        <div>
        <MyAccountInfo/>
        <MainStyled bg="#393e46">
        {/* <CustomerList onSuccess={props.onSuccess}/>
        <AddCustomer onSuccess={props.onSuccess}/> */}
        <CustomerList />
        <AddCustomer />
        </MainStyled>
        </div>
        
    )
}
