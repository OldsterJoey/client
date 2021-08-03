import React from 'react'
import Children from '../Children'
import Admin from '../Admin'


export default function Main({history}) {
    return (
        <div>
            <h1>Welcome to Wishfully</h1>
            <h2>Please, select who is using the app today?</h2>
                <Children />
                <Admin />

        </div>
    )
}
