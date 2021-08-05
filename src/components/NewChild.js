import React, {useState, useEffect} from 'react'
import {useHistory, useParams} from 'react-router-dom'
import {Label, BigTextInput, Button} from './Styled'
import {createChild, getChild, updateChild} from '../services/childrenServices'
import{userPics} from '../utils/userPics'
import {useGlobalState} from '../utils/stateContext'

export default function NewChild() {
	const initialFormState = {
        id: "",
		name:  "",
        icon: "",
	}
	const [formState,setFormState] = useState(initialFormState)
	let history = useHistory()
	let {id} = useParams()
	const {dispatch, store} = useGlobalState()
	const {children} = store;
    console.log()

	useEffect(() => {
		if(id) {
			getChild(id)
			.then((child) => {
				console.log(child)
				setFormState({
					child_id: child.id,
					name: child.name, 
                    icon: child.img_id
				})
			})
		}
	},[id])

	function getLastId() {
		console.log(children)
		const ids = children.map(child => child.id)
		console.log(ids)
		return Math.max(...ids)
	}

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
				history.push(`/children/${id}`)
			})
		}
		else {
			const nextId = getLastId() + 1;
			createChild({...formState, id: nextId})
			.then((child) => {
				dispatch({type: 'createChild', data: child})
				history.push('/main')
			})
			.catch((error) => console.log(error))
		}
	}
	return (
		<div>
			<Label>User Picture:</Label>
			<select name='userPic_id' value={formState.userPic.src} onChange={handleChange}>
				{userPics.map((userPic) => <option key={userPic.id} value={userPic.id}>{userPic.src}</option>)}
			</select>
			<Label>Child:</Label>
			<BigTextInput type='text' name='name' value={formState.name} onChange={handleChange}></BigTextInput>
			<Button onClick={handleClick}>{id ? 'Update' : 'Create'}</Button>
		</div>
	)
}