import React, {useState, useEffect} from 'react'
import {useHistory, useParams} from 'react-router-dom'
import {Label, BigTextInput, Button} from './Styled'
import {useGlobalState} from '../utils/stateContext'
import {getWish, createWish, updateWish} from '../services/wishesServices'

export default function NewChild() {
	const initialFormState = {
		name:  "",
	}
	const [formState,setFormState] = useState(initialFormState)
	let history = useHistory()
	let {id} = useParams()
	const {dispatch} = useGlobalState()

	useEffect(() => {
		if(id) {
			getWish(id)
			.then((wish) => {
				console.log(wish)
				setFormState({
					wish_id: wish.id,
					name: wish.name 
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
			updateWish( {id: id, ...formState})
			.then(() => {
				dispatch({type: 'updateWish', data: {id: id, ...formState}})
				history.push(`/wish/${id}`) //review
			})
		}
		else {
			createWish({...formState})
			.then((wish) => {
				dispatch({type: 'createWish', data: {wish, ...formState}})
				history.push(`/wish/${id}`) //review
			})
			.catch((error) => console.log(error))
		}
	}
	return (
		<div>
			<Label>Wish:</Label>
			<BigTextInput type='text' name='name' value={formState.name} onChange={handleChange}></BigTextInput>
			<Button onClick={handleClick}>{id ? 'Update' : 'Create'}</Button>
		</div>
	)
}