import {Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink} from './NavbarElements'

const Navbar = () => {
    return (  
        <>
        <Nav>
            <NavLink to="/">
                <h1>EXTRA POINTERS</h1>
            </NavLink>
            <NavMenu>
                <NavLink to="/about" activeStyle>
                    About
                </NavLink>
                <NavLink to="/search" activeStyle>
                    Search
                </NavLink>
            <NavBtn>
                <NavBtnLink to="/Login">Sign In</NavBtnLink>
            </NavBtn>   
            </NavMenu>

        </Nav>
        </>
    )
}

export default Navbar;