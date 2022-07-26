import styled  from "styled-components";
import { BreakpointSize, breakAt } from "../../styles/responsive";

const Separator = styled.div`
    
    blockquote{
        margin-bottom: 140px !important;
        ${breakAt(BreakpointSize.md)} {
            margin-bottom: 70px;
        }
        ${breakAt(BreakpointSize.sm)} {
            margin-bottom: 35px;
        }
    }
   
`;

export {Separator};