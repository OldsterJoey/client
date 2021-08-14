import React, {useState, useEffect} from 'react'
import {animateScroll as scroll} from 'react-scroll';

import {
    Nav, 
    NavbarContainer, 
    NavLogo, 
    NavMenu, 
    NavBtn, NavBtnLink
} from './NavbarElements'

// import {Button, Span} from '../../components/Styled'

export default function SmallNavbar(){

    const [scrollNav, setScrollNav] = useState(false)

    const changeNav = () => {
    if(window.scrollY >= 0) {
        return setScrollNav(true)
    } else{
        setScrollNav(false)
        }
    }
    
    useEffect(() => {
            window.addEventListener('scroll', changeNav)
        })
    
        const toggleHome = () => {
            scroll.scrollToTop();
        }

    return (
        <>
            <Nav scrollNav={scrollNav}>
                <NavbarContainer>
                    <NavLogo to='/' onClick={toggleHome}>Wishfully</NavLogo>
                    <NavMenu>

                        <NavBtn>
                            <NavBtnLink to="/sign_in" >Sign In</NavBtnLink>
                        </NavBtn>
                        <NavBtn>
                            <NavBtnLink to="/sign_up" >Sign Up</NavBtnLink>
                        </NavBtn>
                    </NavMenu>
                </NavbarContainer>
            </Nav>
        </>
    )
}
