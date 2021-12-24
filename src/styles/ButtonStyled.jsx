import styled,{css} from "styled-components";


export const ButtonStyled=styled.button`
    background-color:${props=>props.bg};
    color:${props=>props.color};
    border-radius:5px;
    height:40px;
    ${props=>props.margin && css `margin:20px 0;`}
    font-size:1rem;

    &:hover{
        transform:scale(0.95);
        opacity:0.9;
        cursor:pointer;
    }

`