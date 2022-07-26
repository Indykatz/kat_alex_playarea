import { Link } from "react-router-dom";
import { NavbarStyled, NavItemStyled } from "../styles/navbar.styles";

const Navbar = () => {
  const navbarList = ["Profile", "Events", "About", "Account"];

  return (
    <NavbarStyled>
      {navbarList.map((navbarItem, i) => {
        let path = "/" + navbarItem;
        return (
          <NavItemStyled key={i}>
            <Link to={path} >
              {navbarItem}
            </Link>
          </NavItemStyled>
        );
      })}
    </NavbarStyled>
  );
};

export default Navbar;
