import React from 'react'
import {Button, Span} from '../Styled'
import {useGlobalState} from '../../utils/stateContext'
import {Link} from 'react-router-dom'
import styled from 'styled-components'
import { signOut } from '../../services/authServices'


export default function Main({history}) {
	const {store,dispatch} = useGlobalState()
	const {children, loggedInUser} = store
	console.log(children)

    const StyledLink = styled(Link) `
	text-decoration: none;
    `

    function handleSignOut(event){
        event.preventDefault()
        signOut(loggedInUser)
        .then(() => {
            dispatch({type: 'setLoggedInUser', data: null })
            dispatch({type: 'setToken', data: null })

        })
    }
    
    return (
        <div>
        <Span>{loggedInUser}</Span>

            <h1>Welcome to Wishfully</h1>
            <h2>Please, select who is using the app today?</h2>

            {children.map((child,index) => {
                return (
                    <StyledLink key={child.id} to={`/child/${child.id}`}>
                        <ul>{child.name}</ul>
                    </StyledLink>
                )
            })}
                <Button onClick={() => history.push('/admin-board') }>Parent</Button>
				<Button onClick={() => history.push('/children/new') }>Add Child</Button>	
				<Button onClick={(handleSignOut) => history.push('/')} >Sign Out</Button>	

        </div>
    )
}
