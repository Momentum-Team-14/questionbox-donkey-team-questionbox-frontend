import {Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink} from './NavbarElements'
import {Link} from 'react-router-dom'


const Navbar = () => {
    

    return (  
        <>
        <Nav>
            <NavLink to="/">
                <h1>EXTRA POINTERS</h1>
            </NavLink>
            <NavMenu>
                <NavLink to="/about">
                    About
                </NavLink>
                <NavLink to="/search">
                    Search
                </NavLink>
            <NavBtn>
                <NavBtnLink to="/Login">Log In</NavBtnLink>
            </NavBtn>

            </NavMenu>
        </Nav>
        </>
    )
}

export default Navbar;