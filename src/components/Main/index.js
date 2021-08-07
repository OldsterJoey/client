import React from 'react'
import {Button} from '../Styled'
import {useGlobalState} from '../../utils/stateContext'
import {Link} from 'react-router-dom'
import styled from 'styled-components'


export default function Main({history}) {
    const {store} = useGlobalState()
	const {children} = store
	console.log(children)

    const StyledLink = styled(Link) `
	text-decoration: none;
    `
    
    return (
        <div>
            <h1>Welcome to Wishfully</h1>
            <h2>Please, select who is using the app today?</h2>

            {children.map((child,index) => {
                return (
                    <StyledLink key={child.id} to={`/children/${child.id}`}>
                        <ul>{child.name}</ul>
                    </StyledLink>
                )
            })}
                <Button onClick={() => history.push('/admin-board') }>Parent</Button>
				<Button onClick={() => history.push('/children/new') }>Add Child</Button>	

        </div>
    )
}
