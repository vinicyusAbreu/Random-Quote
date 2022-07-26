import styled from 'styled-components';
import { BreakpointSize, breakAt } from '../../styles/responsive';

const Menu = styled.header`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 30px 0;
`;

const MenuItem = styled.nav`
    margin-right: 100px;
    ${breakAt(BreakpointSize.md)} {
        margin-right: 50px;
    }
    ${breakAt(BreakpointSize.sm)} {
        margin-right: 25px;
    }
     a{
        display: flex;
        align-items: center;
        gap: 10px;
        span{
            font-style: normal;
            font-weight: 500;
            font-size: 18px;
            color: #4F4F4F;
        }
     }

`;

export { Menu, MenuItem };