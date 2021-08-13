
import React,{ useState,useEffect} from 'react'
import {useParams, useHistory} from 'react-router-dom'
import {getChild} from '../services/childrenServices'

import {Button, Panel} from './Styled'
import {useGlobalState} from '../utils/stateContext'
import {deleteWishlist, getWishlist} from '../services/wishlistsServices'
import {getWish} from '../services/wishesServices'


export default function ChildDetails() {
	const {store,dispatch} = useGlobalState()
    const {children} = store
	const {id} = useParams()
	console.log(children)

	const child = children.find(child => child.id === parseInt(id))
	console.log(child)
	let history = useHistory()

	const wishlist = child && child.wish_list
	console.log(wishlist)
	const wishes = wishlist && wishlist.wishes 

    if(!child) return null


    if(!wishlist) return (
        <div>
            {child.name}
            <p>No wishlist has been saved yet</p>
		<Button onClick={() => history.push(`/wishlist/new/`)}>Add Wishlist</Button>
        </div>)

	if (!wishes) return null
	// return (
	// <div>
	// 	{wishlist.name}
	// 	<p>No wishes have been saved yet</p>
	// 	<Button onClick={() => history.push(`/wishlist/update/${wishlist.id}`)}>Update Wishlist</Button>
	// </div>
	// )
	function handleDelete() {
		deleteWishlist(id)
		// deleteWishes(wishlist[wishes]) - is this the right way to delete the dependent wishes?
		.then(() => {
			dispatch({type: 'deleteWishlist', data: id})
			history.push(`/main`) 
			// not sure if that is the right way to get back to the child who used to have that wishlist
		})
	}
	return (
		<div>
			<p>Name: {child.name}</p>			
			<p>Icon: </p>
			<p>Wishlist: {wishlist.name}</p>
			{wishes.map((wish) => {
				return(
					<li>{wish.name}</li>

				)
			})}
                <Panel>
					<Button onClick={() => history.push(`/wishlist/new`)}>Update Wishlist</Button>
					<Button onClick={handleDelete}>Delete Wishlist</Button>
				</Panel>
		</div>
	)
}