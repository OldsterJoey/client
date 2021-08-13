import React, {useEffect, useParams} from 'react'
import {Button} from '../Styled'
import {useGlobalState} from '../../utils/stateContext'
import {getChildren} from '../../services/childrenServices';
import {getWishlists} from '../../services/wishlistsServices';
import {getWishes} from '../../services/wishesServices';

import { signOut } from '../../services/authServices'
import {MainContainer, MainContent, MainH1, MainH2, MainWrapper, StyledButton, Wrapper} from './MainElements'
// import Navbar from '../../components/Navbar'

export default function Main({history}) {
	const {store,dispatch} = useGlobalState()
    const {children, loggedInUser} = store
	// const {id} = useParams()
	console.log(children)

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


    function handleSignOut(event){
        event.preventDefault()
        signOut(loggedInUser)
        .then(() => {
            dispatch({type: 'setLoggedInUser', data: null })
            dispatch({type: 'setToken', data: null })
			history.push(`/`) 
        })
    }
    
    return (
            <MainContainer>
                <MainContent>
                    {/* <Navbar /> */}
                        <MainH1>Welcome to Wishfully, {loggedInUser}</MainH1>
                        {/* <p>{child.user_id}</p> */}
                        <MainH2>Please, select who is using the app today?</MainH2>

                        {/* {loggedInUser === child.user_id &&  */}

                        <MainWrapper>
                            
                            {children.map((child,index) => {
                            return (
                                <Wrapper>
                                    <StyledButton index={index} key={child.id} onClick={() => history.push(`/child/${child.id}`)}>{child.name}</StyledButton>
                                </Wrapper>

                                    )
                                })}
                            <Wrapper>
                                <StyledButton onClick={() => history.push(`/admin-board`)}>Parent</StyledButton>

                            </Wrapper>
                        </MainWrapper>

                        {/* these buttons need to go to Navbar */}
                        <Button onClick={() => history.push('/children/new') }>Add Child</Button>
                        <Button onClick={(handleSignOut) => history.push('/')} >Sign Out</Button>	
                </MainContent>
            </MainContainer>
    )
}
