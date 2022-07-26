import styled from "styled-components";
import { BreakpointSize, breakAt } from "../../styles/responsive";
import {Link} from "react-router-dom";

const Button = styled(Link)`
    width: min(672px, 100%);
    padding:0 30px;
    height: 151px;
    margin-top: 30px;
    border: none;
    background-color: #FFF;
    display: flex;
    align-items: center;
    justify-content: space-between;
    transition: all .3s ease-in-out ;
    ${breakAt(BreakpointSize.sm)} {
        height: 80px;
    }

    .flex{
        display: flex;
        align-items: flex-start;
        flex-direction: column;
        gap: 8px;
        color: #4F4F4F;

        .autor{
            font-weight: 700;
            font-size: 2.4rem;
            transition: all .3s ease-in-out ;
            color: #4F4F4F;
            ${breakAt(BreakpointSize.sm)} {
                font-size: 1.6rem;
            }
        }
        
        .genero{
                font-size: 1.4rem;
                color: #828282;
                font-weight: 500;
                ${breakAt(BreakpointSize.sm)} {
                font-size: 1.2rem;
            }
        }

    }

    &:hover{
        background-color: #333333;
        .flex{
        .autor{
            color: #F2F2F2;
        }
        .genero{
            color: #828282;
                
        }
    }}
    
`;

export default Button;