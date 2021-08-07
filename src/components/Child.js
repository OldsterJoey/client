import React from 'react'
import Wishlist from './Wishlist'

export default function Child({child}){
    if(!child) return null
    console.log(child)
    const wishlist = child.wish_list
    console.log(wishlist)
    if(!wishlist) return (
        <div>
            {child.name}
            <p>No wishlist has been saved yet</p>
            <button>Add a wishlist</button>
        </div>)


    return(
        <div>
            <p>{child.name}</p>
            <Wishlist key={wishlist.id} child={child} wishlist={child.wish_list}/>
        </div>
    )
}
