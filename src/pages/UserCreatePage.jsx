import React from 'react'
import UserCreate from '../components/UserCreate'
import { MainStyled } from '../styles/MainStyled'

export default function UserCreatePage() {
    return (
        <MainStyled bg="#393e46" height="100vh">
           <UserCreate/>
        </MainStyled>
    )
}
