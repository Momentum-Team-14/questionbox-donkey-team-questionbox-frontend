import { DisplayUser } from '../routes/display-user';
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
                <NavLink to="/about" >
                    About
                </NavLink>
                <NavLink to="/user/questions" >
                    Profile
                </NavLink>
                <NavLink to="/questions" >
                    Questions Search
                </NavLink>
            <NavBtn>
                <NavBtnLink to="/Login">Sign In</NavBtnLink>
            </NavBtn>
            </NavMenu>
            <Link 
            to = "/user/questions"
            style={{textDecoration:'none', color:'white'}}
            >
        <p style={{textAlign:'center', marginRight:'10px'}}>Hello <DisplayUser token={'2dc43cc797e571669d4ee81fb0fbbea3bb8de2c1'}/>
        </p></Link>
        </Nav>
        </>
    )
}

export default Navbar;