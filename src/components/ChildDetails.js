
import React,{ useState,useEffect} from 'react'
import {useParams,useHistory} from 'react-router-dom'
import {getChild} from '../services/childrenServices'

import {Button, Panel} from './Styled'
import {useGlobalState} from '../utils/stateContext'
import {deleteChild} from '../services/childrenServices'

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
	console.log(id)

    if(!child) return null

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
			{loggedInUser === child.author &&
                <Panel>
					<Button onClick={() => history.push(`/child/update/${id}`)}>Update</Button>
					<Button onClick={handleDelete}>Delete</Button>
				</Panel>
			}
		</div>
	)
}