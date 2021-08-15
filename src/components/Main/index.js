import React, {useEffect, useState} from 'react'
import {useGlobalState} from '../../utils/stateContext'
import {getChildren} from '../../services/childrenServices';
import {getWishlists} from '../../services/wishlistsServices';
import {getWishes} from '../../services/wishesServices';
import {MainContainer, MainContent, MainH1, MainH2, MainWrapper, StyledButton, Wrapper} from './MainElements'
import Navbar from '../../components/Navbar'

export default function Main({history}) {
	const {store, dispatch} = useGlobalState()
    const {children, loggedInUser} = store
	// const {id} = useParams()

    useEffect(() => {
        getChildren()
        .then((children) => dispatch({type: 'setChildren', data: children}))
    .catch((error) => console.log(error))

    getWishlists()
        .then((wishlists) => dispatch({type: 'setWishlists', data: wishlists}))
        .catch((error) => console.log(error))

    getWishes()
        .then((wishes) => dispatch({type: 'setWishes', data: wishes}))
        .catch((error) => console.log(error))
    },[])

    const [isOpen, setIsOpen] = useState(false) 
    const toggle = () => {
        setIsOpen(!isOpen)
    }
    return (
        <>
            <Navbar toggle={toggle}/>
            <MainContainer>
                <MainContent>
                        <MainH1>Welcome to Wishfully, {loggedInUser}</MainH1>
                        <MainH2>Please, select who is using the app today?</MainH2>


                        <MainWrapper>
                            
                            {children.map((child,index) => {
                            return (
                                <Wrapper index={index} key={child.id} >
                                    <StyledButton key={child.id} onClick={() => history.push(`/child/${child.id}`)}>{child.name}</StyledButton>
                                </Wrapper>
                                    )
                                })}
                            <Wrapper>
                                <StyledButton onClick={() => history.push(`/admin-board`)}>Parent</StyledButton>
                            </Wrapper>
                        </MainWrapper>
                </MainContent>
            </MainContainer>
            </>
    )
}
