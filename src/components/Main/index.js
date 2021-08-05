import React from 'react'
import Children from '../Children'
import {Button} from '../Styled'


export default function Main({history}) {
    
    return (
        <div>
            <h1>Welcome to Wishfully</h1>
            <h2>Please, select who is using the app today?</h2>
                <Children />
                <Button onClick={() => history.push('/admin-board') }>Parent</Button>	
				<Button onClick={() => history.push('/children/new') }>Add Child</Button>	

        </div>
    )
}
