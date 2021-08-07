import React from 'react'
import Children from '../components/Children'

export default function Admin({history}) {
    
    return (
        <div>
            <h1>Welcome to Wishfully</h1>
            <h2>We have a few wishes saved:</h2>
                <Children />
        </div>
    )
}
