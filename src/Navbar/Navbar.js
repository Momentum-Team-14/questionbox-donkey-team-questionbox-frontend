import {Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink} from './NavbarElements'

const Navbar = () => {
    return (  
        <>
        <Nav>
            <NavLink to="/">
                <h1>EXTRA POINTERS</h1>
            </NavLink>
            <NavMenu>
                <NavLink to="/about" >
                    About
                </NavLink>
                <NavLink to="/user/questions" >
                    Profile
                </NavLink>
                <NavLink to="/search" >
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