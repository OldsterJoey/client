import server from '../config/api'

export async function signUp(data) {
	const response = await server.post('/api/auth/sign_up', data)
	console.log(response)
	return response.data
}

export async function signIn(data) {
	const response = await server.post('/api/auth/sign_in', data)
	console.log(response)
	return response.data
}
export async function signOut(data) {
	sessionStorage.clear()
	return "logged out"
}