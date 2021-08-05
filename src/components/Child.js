import React from 'react'
import Wishlist from './Wishlist'

export default function Child({child, index}){
    if(!child) return null
    console.log(child)

    return(
        <div>
            <p>{child.name}</p>
            <Wishlist />
        </div>
    )
}
