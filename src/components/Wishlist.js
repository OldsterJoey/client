import React from 'react'
import Wish from './Wish'

export default function Wishlist({wishlist,child}) {
	const wishes = wishlist.wishes
	console.log(wishes)
	if (!wishes) {
		return (
		<div>
			{wishlist.name}
			<p>No wishes have been saved yet</p>
			<button>Add wishes</button>
		</div>
		)}

	return (
		<>
		<p>{wishlist.name}</p>
		{wishes.map((wish, index) => {
			return (
				<Wish key={wish.id} index={index} wish={wish} />					
				)
		})}
		</>
	)
}
