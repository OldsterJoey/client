import React, {useState} from 'react'
import {useHistory} from 'react-router-dom'
import {signUp} from '../services/authServices'
import {useGlobalState} from '../utils/stateContext'
import { Container, FormWrap, FormContent, Form, FormHeading, FormLabel, FormInput, FormButton } from './Styled'
import SmallNavbar from '../components/Navbar/SmallNavbar'

export default function SignUp() {
	const initialFormState = {
		username: '', 
		email: '', 
		password: '', 
		password_confirmation: ''
	}
	const [formState, setFormState] = useState(initialFormState)
	const {dispatch} = useGlobalState()
	let history = useHistory()
	function handleChange(event) {
		setFormState({
			...formState,
			[event.target.name]: event.target.value
		})
	}
	function handleRegister(event) {
		event.preventDefault()
		signUp(formState)
		.then((data) => {
			console.log(data)
			sessionStorage.setItem("token", data.jwt)
			sessionStorage.setItem("user", data.username)

			dispatch({type: 'setLoggedInUser', data: data.username})
			history.push('/main')
		})
		.catch((error) => console.log(error))

	}
	return (
		<Container id='signUp'>
			<FormWrap>
				<FormContent>
					<Form className='registration' >
					<FormHeading>Sign UP</FormHeading>
								<FormLabel>Username:</FormLabel>
								<FormInput type="text" name='username' value={formState.username} onChange={handleChange}></FormInput>
								<FormLabel>Email:</FormLabel>
								<FormInput type='email' name='email' value={formState.email} onChange={handleChange}></FormInput>
								<FormLabel>Password:</FormLabel>
								<FormInput type='password' name='password' value={formState.password} onChange={handleChange}></FormInput>
								<FormLabel>Password Confirmation:</FormLabel>
								<FormInput type='password' name='password_confirmation' value={formState.password_confirmation} onChange={handleChange}></FormInput>
								<FormButton onClick={handleRegister}>Sign Up</FormButton>
					</Form>
				</FormContent>
			</FormWrap>
		</Container>
	)
}