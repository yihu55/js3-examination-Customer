import styled,{css} from "styled-components";
import { Link } from "react-router-dom";

export const LinkStyled = styled(Link)`
    text-decoration: none;
    color:${props=>props.color};

    ${props => props.padding && css `padding:50px;`};
    ${props=>props.fontSize && css `font-size:1.5rem;`};
    
    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`;