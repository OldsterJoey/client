import React from 'react'

export default function Wish({wish, index}){
    if(!wish) return null
    console.log(wish)
    return(
        <div>
            <li>{wish.name}</li>
        </div>
    )
}
