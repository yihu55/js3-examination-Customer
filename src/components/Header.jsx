import React from 'react'
import { HeaderStyled } from '../styles/HeaderStyled'
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <div>
          <HeaderStyled>
             <Link to="/login">Login</Link>
             <Link to="/home">Home</Link>
             
          </HeaderStyled>
               
            
        </div>
    )
}
