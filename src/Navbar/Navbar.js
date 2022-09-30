import { DisplayUser } from '../routes/display-user';
import {Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink} from './NavbarElements'
import {Link, useNavigate} from 'react-router-dom'
import { useState } from 'react';


const Navbar = ({ handleLogout, token, isLoggedIn}) => {
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
            {!isLoggedIn && <NavBtnLink to="/Login">Sign In</NavBtnLink>}
            </NavBtn>

            <NavBtn>
            {isLoggedIn && <NavBtnLink to="/"
            onClick={handleLogout}
            > 
            Log Out</NavBtnLink>}
            </NavBtn>

            </NavMenu>           
            <Link 
            to = "/user/questions"
            style={{textDecoration:'none', color:'white'}}
            >
        <p style={{textAlign:'center', marginRight:'10px'}}>
            {isLoggedIn
                ? <DisplayUser token={token}  />
                : <></>
            }
            </p>
            </Link>
        </Nav>
        </>
    )
}



export default Navbar;