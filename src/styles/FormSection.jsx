import styled from "styled-components";

export const FormSectionStyled=styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    background-color:${props=>props.bg};
    width:${props=>props.width};
    height:${props=>props.height};
    margin: auto;
    padding:50px;
    
   
`