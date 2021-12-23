import React from 'react'
import { HeaderStyled } from '../styles/HeaderStyled'
import MyAccountInfo from './MyAccountInfo'
import { LinkStyled } from '../styles/LinkStyled'

export default function Header() {
    return (
        <div>
          <HeaderStyled>
            <div>
             <LinkStyled to="/login" color="#f2f2f2" padding="true" fontSize="true">Login</LinkStyled>
             <LinkStyled to="/home" color="#f2f2f2" padding="true" fontSize="true">Home</LinkStyled>
             </div>
             <div>
             <MyAccountInfo />
             </div>
          </HeaderStyled>
               
            
        </div>
    )
}
