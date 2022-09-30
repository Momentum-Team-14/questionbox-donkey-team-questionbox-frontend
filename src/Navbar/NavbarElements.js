import styled from 'styled-components'
import { NavLink as NavLinks } from 'react-router-dom'
import { FaBars } from 'react-icons/fa'

export const Nav = styled.nav`
background: green;
height: 80px;
display:flex;
justify-content: space-between;
padding: 0.5rem calc((100vw - 1000px) / 2);
z-index 10;`

export const NavLink = styled(NavLinks)`
color: white;
display: flex;
align-items: center;
text-decoration: none;
padding: 0 1rem;
height: 100%;
cursor: pointer;
font-style: italic;

&.active {
    color: white;
}

&:hover {
    transition: all 0.2s ease-in-out;
    color: yellow;
}
`

export const Bars = styled(FaBars)`
// display: none;

// @media screen and (max-width 768px) {
//     color: white;
//     display: block;
//     position: absolute;
//     top: 0;
//     right: 0;
//     transform: translate(-100%, 75%);
//     font-size: 1.8rem;
//     cursor: pointer;
// }
// `

export const NavMenu = styled.div`
display: flex;
align items: center;
margin: 0px;


// attemp at hamburger menu, will mess with later
// @media screen and (max-width: 768px) {
//     display: none;
// }
`

export const NavBtn = styled.nav`
display: flex;
align-items: center;
margin-right: 12px;

//attempt at hamburger menu, will mess with later
// @media screen and (max-width: 768px) {
//     display: none;
// }
`

export const NavBtnLink = styled(NavLinks)`
border-radius: 4px;
background: yellow;
padding: 10px 22px;
color: black;
border: none;
outline: none;
cursor: pointer;
transition: all 0.2s ease-in-out;
text-decoration: none;
margin-left: 5px;

&:hover {
    transition: all 0.2s ease-in-out;
    background: yellow;
    opacity: 0.85;
    color: black;
}
`

