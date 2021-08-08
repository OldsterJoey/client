
import React,{ useState,useEffect} from 'react'
import {useParams,useHistory} from 'react-router-dom'
import {getChild, deleteChild} from '../services/childrenServices'

import {Button, Panel} from './Styled'
import {useGlobalState} from '../utils/stateContext'

export default function ChildDetails() {
	const [child,setChild] = useState(null)
	const {id} = useParams()
	let history = useHistory()
	const {store,dispatch} = useGlobalState()
    const {loggedInUser} = store

    useEffect(() => {
		getChild(id)
		.then((child) => setChild(child))
		.catch((error) => console.log(error))
	},[id])

    if(!child) return 'no saved child'

	function handleDelete() {
		deleteChild(id)
		.then(() => {
			dispatch({type: 'deleteChild', data: id})
			history.push('/main')
		})
	}
	return (
		<div>
			<p>Name: {child.name}</p>			
			<p>Icon: </p>
                <Panel>
					<Button onClick={() => history.push(`/child/update/${id}`)}>Update</Button>
					<Button onClick={handleDelete}>Delete</Button>
				</Panel>
				
		</div>
	)
}