import styled from "styled-components";

export const CustomerInfoStyled=styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    background-color:${props=>props.bg};
    // width:${props=>props.width};
    // height:${props=>props.height};
    margin-top:50px;
    padding:50px 100px 50px;
`