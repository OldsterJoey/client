import React, {useState, useEffect} from 'react'
import {useHistory, useParams} from 'react-router-dom'
import {Label, BigTextInput, Button} from './Styled'
import {createChild, getChild, updateChild} from '../services/childrenServices'
import {useGlobalState} from '../utils/stateContext'

export default function NewChild() {
	const initialFormState = {
		name: ''
	}
	const [formState,setFormState] = useState(initialFormState)
	let history = useHistory()
	let {id} = useParams()
	const {dispatch} = useGlobalState()

	useEffect(() => {
		if(id) {
			getChild(id)
			.then((child) => {
				console.log(child)
				setFormState({
					name: child.name
				})
			})
		}
	},[id])

	function handleChange(event) {
		setFormState({
			...formState,
			[event.target.name]: event.target.value
		})
		
	}
	function handleClick(event) {
		event.preventDefault()
		if(id) {
			updateChild( {id: id, ...formState})
			.then(() => {
				dispatch({type: 'updateChild', data: {id: id, ...formState}})
				history.push(`/child/${id}`)
			})
			.catch((error) => console.log(error))
		}
		else {
			console.log(formState)
			createChild({...formState})
			
			.then((child) => {
				console.log(child)
				dispatch({type: 'addChild', data: child})
				history.push(`/main`)
			})
			.catch((error) => console.log(error))
		}
	}
	return (
		<div>
			<Label>Child:</Label>
			<BigTextInput type='text' name='name' value={formState.name} onChange={handleChange}></BigTextInput>
			<Button onClick={handleClick}>{id ? 'Update' : 'Create'}</Button>
		</div>
	)
}
