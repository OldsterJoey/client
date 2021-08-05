import React from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'
import Child from './Child'
import {useGlobalState} from '../utils/stateContext'
// import Wishlist from './Wishlist'

const StyledLink = styled(Link) `
	text-decoration: none;
`
export default function Children() {
	const {store} = useGlobalState()
	const {children} = store
	console.log(children)
	if(!children) return "No saved children. Please, add a new child"



	return  (
		<div>
			{children.map((child,index) => {
				return (
					<StyledLink key={child.id} to={`/children/${child.id}`}>
						<Child index={index} child={child}/>
					</StyledLink>
				)
			})}
		</div>
	)
}