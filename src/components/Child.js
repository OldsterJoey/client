import React from 'react'

export default function Child({child, index}){
    if(!child) return null
    console.log(child)

    return(
        <div>
            <p>{child.name}</p>
        </div>
    )
}
