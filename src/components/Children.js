import React from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'
import Child from './Child'
import {useGlobalState} from '../utils/stateContext'
import Wishlist from './Wishlist'
import Wish from './Wish'
// import Wishlist from './Wishlist'

// const StyledLink = styled(Link) `
// 	text-decoration: none;
// `
export default function Children() {
	const {store} = useGlobalState()
	const {children} = store
	console.log(children)
	if(!children) return "No saved children. Please, add a new child"
	


	return  (
		<div>
			{children.map((child,index) => {
				return (
					// <StyledLink key={child.id} to={`/children/${child.id}`}>
						<Child index={index} child={child}>
							{/* <Wishlist index={index} wishlist={child.wish_list}> */}
								{/* <Wish index={index} wishes={child.wish_list.wishes}>
									{child.wish_list.wishes[1].name}
								</Wish> */}
							{/* </Wishlist> */}
						</Child>						
					// </StyledLink>
				)
			})}
		</div>
	)
}