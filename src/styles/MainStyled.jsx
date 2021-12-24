import styled from "styled-components";

export const MainStyled=styled.main`
   background-color:${props=>props.bg};
   width:100%;
   display:flex;
   justify-content:space-around;
   height:${props=>props.height};
`