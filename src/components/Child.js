import React from 'react'
import Wishlist from './Wishlist'

export default function Child({child, index}){
    if(!child) return null
    console.log(child)
    const wishlist = child.wish_list
    if(!wishlist) return "No saved wishlists"
    // console.log(child.wish_list.name)
    // const wishes = wishlist.wishes
    // if(!wishes) return "No saved wishes. Please, add a new wish"
    // console.log(wishes[1])
    // console.log(wishes[0])



    return(
        <div>
            <p>{child.name}</p>
            <Wishlist />
        </div>
    )
}
