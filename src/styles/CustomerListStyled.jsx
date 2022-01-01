import styled from "styled-components";

export const CustomerListStyled=styled.div`

display:flex;
flex-direction:column;
align-items:center;
background-color:${props=>props.bg};
margin-top:50px;
padding:50px 100px 50px;
height:75vh;
overflow:scroll;

div{
    display:flex;
    flex-direction:row;
    align-items:center;
    
}

`
