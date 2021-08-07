import React from 'react'
// import {Link} from 'react-router-dom'
// import styled from 'styled-components'
// import Wish from './Wish'
// import {useGlobalState} from '../utils/stateContext'

// const StyledLink = styled(Link) `
// 	text-decoration: none;
// `
export default function Wishlist({child, index}) {
    if(!child) return null
    console.log(child)
    const wishlist = child.wish_list
    if(!wishlist) return "No saved wishlists. Please, add a new wishlist"
	const wishes = wishlist.wishes
    if(!wishes) return "No saved wishes. Please, add a new wish"
    console.log(wishes[1])
    console.log(wishes[0])

	return  (
		<div>
			<p>{child.wishlist && <p>{child.wishlist.name}</p>}</p>
			{/* {wishes.map((wish,index) => {
				return (
					<div key={wish.name} >
                        {wish.name}
					</div>
				)
			})} */}
		</div>
	)
}
