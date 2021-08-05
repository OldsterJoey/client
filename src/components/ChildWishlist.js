import React from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'
import Child from './Child'
import Wishlist from './Wishlist'
import {useGlobalState} from '../utils/stateContext'
import { wishlists } from '../services/wishlistsServices'
// import Wishlist from './Wishlist'

export default function ChildWishlist() {
	const {store} = useGlobalState()
	const {children} = store
	console.log(children)
	if(!children) return "No saved children. Please, add a new child"



	return  (
		<div>
			{wishlists.map((child,index) => {
				return (
					<div key={child.id} >
						<Wishlist index={index} wishlists={wishlists}/>
					</div>
				)
			})}
		</div>
	)
}