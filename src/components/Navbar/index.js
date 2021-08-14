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
    NavBtnLink, NavBtn
} from './NavbarElements'

export default function Navbar(){
	const {store,dispatch} = useGlobalState()
	const {loggedInUser} = store
    let history = useHistory()

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

        function handleSignOut(event) {
            event.preventDefault()
            signOut(loggedInUser)
            .then(() => {
                dispatch({type: 'setLoggedInUser', data: null})
                dispatch({type: 'setToken', data: null})
    			history.push(`/`) 

            })
			.catch((error) => console.log(error))
        }
    return (
        <>
            <Nav scrollNav={scrollNav}>
                <NavbarContainer>
                    <NavLogo to='/' onClick={toggleHome}>Wishfully</NavLogo>
                    <NavMenu>
                        <NavBtn>
                            <NavBtnLink to="/main" >Home</NavBtnLink>
                        </NavBtn>
                        <NavBtn>
                            <NavBtnLink to="/children/new" >Add New Child</NavBtnLink>
                        </NavBtn>
                        <NavBtn>
                            <NavBtnLink onClick={handleSignOut}>Sign out</NavBtnLink>
                        </NavBtn>
                                {/* <NavItem>
                                <Link to="/sign-in" activeClass="active" offset={-80}
                                    smooth={true} duration={500} spy={true}
                                        >Sign In</Link>                                    
                                    <Button onClick={() => history.push('/sign_in')}>Sign In</Button>
                                </NavItem> 
                        } */}
                    </NavMenu>
                </NavbarContainer>
            </Nav>
        </>
    )
}
