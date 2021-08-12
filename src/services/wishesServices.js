// import {children} from './childrenServices'
import server from '../config/api'

export async function getWishes() {
    const response = await server.get('/api/wishes');
    console.log(response);
	return response.data
	// return Promise.resolve(wishlists)
}
export async function deleteWishes() {
    const response = await server.delete('/api/wishes');
    console.log(response);
	return response.data
	// return Promise.resolve(wishlists)
}

export async function getWish(id) {
    const response = await server.get(`/api/wishes/${id}`);
    console.log(response)
    return response.data
}

export async function createWish(wish) {
	const response = await server.post('/api/wishes', wish)
    console.log(response)
    return response.data
}

export async function deleteWish(id) {
    const response = await server.delete(`/api/wishes/${id}`);
    console.log('wish has been removed')
    return response.data
}

export async function updateWish(data) {
	const response = await server.put(`/api/wishes/${data.id}`, {name: data.name});
    return response.data
}