import React from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'
import Wish from './Wish'
import {useGlobalState} from '../utils/stateContext'

const StyledLink = styled(Link) `
	text-decoration: none;
`
export default function Wishlist() {
	const {store} = useGlobalState()
	const {wishlists} = store
	console.log(wishlists.wishes)
	if(!wishlists) return "No saved wishlists. Please, add a new wishlist"



	return  (
		<div>
			{wishlists.map((wishlist,index) => {
				return (
					<StyledLink key={wishlist.name} >
						<Wish index={index} />

					</StyledLink>
				)
			})}
		</div>
	)
}