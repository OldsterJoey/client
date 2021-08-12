import React, {useState, useEffect} from 'react'
import {animateScroll as scroll} from 'react-scroll';
import {useHistory} from 'react-router-dom'
import {useGlobalState} from '../../utils/stateContext'
import {signOut} from '../../services/authServices'

import {
    Nav, 
    NavbarContainer, 
    NavLogo, 
    NavMenu, 
    NavItem, 
    Link, 
    Button, 
    Span} from '../Styled'



export default function Navbar({toggle}){
    let history = useHistory()

	const {store,dispatch} = useGlobalState()
	const {loggedInUser} = store

        const [scrollNav, setScrollNav] = useState(false)
    
        const changeNav = () => {
            if(window.scrollY >= 80) {
                setScrollNav(true)
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

        function handleSignOut(event) {
            event.preventDefault()
            signOut(loggedInUser)
            .then(() => {
                dispatch({type: 'setLoggedInUser', data: null})
                dispatch({type: 'setToken', data: null})
    
            } )
        }
    return (
        <>
            <Nav scrollNav={scrollNav}>
                <NavbarContainer>
                    <NavLogo to='/' onClick={toggleHome}>Wishfully</NavLogo>
                    <NavMenu>
                        {loggedInUser ?
                                <NavItem>
                                <Link to="/main" activeClass="active" offset={-80}
                                smooth={true} duration={500} spy={true} 
                                >Home</Link>
                                <Button onClick={() => history.push('/jokes/new') }>Add New Child</Button>	
                                <Button onClick={handleSignOut}>Sign Out</Button>	

                                <Span>{loggedInUser}</Span>
                                </NavItem> 
			                :
                                <NavItem>
                                <Link to="/sign-in" activeClass="active" offset={-80}
                                    smooth={true} duration={500} spy={true}
                                        >Sign In</Link>                                    
                                    <Button onClick={() => history.push('/sign_in')}>Sign In</Button>
                                </NavItem> 
                        }
                    </NavMenu>
                </NavbarContainer>
            </Nav>
        </>
    )
}
