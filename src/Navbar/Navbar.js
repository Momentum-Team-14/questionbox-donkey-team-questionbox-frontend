import { DisplayUser } from '../routes/display-user';
import {Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink} from './NavbarElements'
import {Link, useNavigate} from 'react-router-dom'
import { useState } from 'react';


const Navbar = ({ handleLogout, token}) => {
    const navigate = useState()

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
                <NavLink to="/searchquestion" >
                    Questions Search
                </NavLink>
            <NavBtn>
                <NavBtnLink to="/Login">Sign In</NavBtnLink>
            </NavBtn>
            <NavBtn>
            <NavBtnLink to="/"
            className="button is-primary is-light"
            onClick={handleLogout}
            >
            Log Out</NavBtnLink>
            </NavBtn>
            </NavMenu>
            <Link 
            to = "/user/questions"
            style={{textDecoration:'none', color:'white'}}
            >
        <p style={{textAlign:'center', marginRight:'10px'}}>Logged in as: </p> <DisplayUser token={token} /></Link>
        </Nav>
        </>
    )
}

export default Navbar;