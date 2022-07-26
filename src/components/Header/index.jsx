import { Link } from "react-router-dom";
import { useContext } from "react";
import { Menu, MenuItem } from "./style";
import { TbRefresh } from 'react-icons/tb'
import { QuoteContext } from "../../contexts/quote";

const Header = () => {
    const { randomQuote } = useContext(QuoteContext);
    return (
        <Menu>
            <MenuItem>
                <Link to="/"
                    onClick={randomQuote}
                ><span>random</span>
                    <TbRefresh size={18} color="#4F4F4F" />
                </Link>

            </MenuItem>
        </Menu>
    )

}
export default Header;