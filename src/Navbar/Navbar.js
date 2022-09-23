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
                <NavLink to="/browse" activeStyle>
                    Browse
                </NavLink>
            <NavBtn>
                <NavBtnLink to="sign-in">Sign In</NavBtnLink>
            </NavBtn>   
            </NavMenu>

        </Nav>
        </>
    )
}

export default Navbar;