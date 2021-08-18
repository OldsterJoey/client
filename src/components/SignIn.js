import React, {useState} from 'react'
// import {Button, Label, Input} from './Styled'
import {signIn} from '../services/authServices'
import {useGlobalState} from '../utils/stateContext'
import { Container, FormWrap, FormContent, Form, FormHeading, FormLabel, FormInput, FormButton } from './Styled'

export default function SignIn({history}) {
	const initialFormState = {
		email: '',
		password: ''
	}
	const [formState, setFormState] = useState(initialFormState)
	const {dispatch} = useGlobalState()
	function handleChange(event) {
		setFormState({
			...formState,
			[event.target.name]: event.target.value
		})
	}
	function handleSubmit(event) {
		event.preventDefault()
		signIn(formState)
		.then(({username,jwt}) => {
			console.log(username, jwt);
			sessionStorage.setItem("token", jwt);
			sessionStorage.setItem("user", username);
			dispatch({type: 'setLoggedInUser', data: username})
			dispatch({type: 'setToken', data: jwt})
			history.push('/main')
		})
		.catch((error) => console.log(error))

	}
	return (
		<Container id='signIn'>
			<FormWrap>
				<FormContent>
					<Form className='registration' >
						<FormHeading>Let's first check if you have an account already. Please, use your email and password to log in. If you haven't registered yet, you can Sign Up.</FormHeading>
						<FormLabel>Email:</FormLabel>
						<FormInput data-cy="signin-email" type='email' name='email' value={formState.username} onChange={handleChange}></FormInput>
						<FormLabel>Password:</FormLabel>
						<FormInput data-cy="signin-password" type='password' name='password' value={formState.password} onChange={handleChange}></FormInput>
						<FormButton data-cy="signin-button" onClick={handleSubmit}>Log In</FormButton>
						<FormButton onClick={() => history.push('/sign_up')}>Sign Up</FormButton>
					</Form>
				</FormContent>
			</FormWrap>
		</Container>
	)
}