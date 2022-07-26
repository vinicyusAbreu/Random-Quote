import styled from "styled-components";
import { BreakpointSize, breakAt } from '../../styles/responsive';

const Citacao = styled.blockquote`
        font-weight: 500;
        font-style: normal;
        font-size: 3.5rem;
        width: 614px;
        position: relative;
        &::before {
            content: "";
            width: 8px;
            height: 100%;
            background: #F7DF94;
            display: block;
            position: absolute;
            left: -100px;
        }
        ${breakAt(BreakpointSize.lg)} {
            &::before{
                left: -50px;
            }
        }
        ${breakAt(BreakpointSize.md)} {
            width: 100%;
            padding-left: 30px;
            font-size: 2.5rem;
            &::before {
                left: 0px;
            }
        }

        ${breakAt(BreakpointSize.sm)} {
            font-size: 1.8rem;
        }

`;
export {Citacao};