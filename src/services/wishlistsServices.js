// import {children} from './childrenServices'
import server from '../config/api'

export async function getWishlists() {
    const response = await server.get('/api/wish_lists');
    console.log(response);
	return response.data
	// return Promise.resolve(wishlists)
}


export async function getWishlist(id) {
    const response = await server.get(`api/wish_lists/${id}`);
    console.log(response)
    return response.data
}

export async function createWishlist(wishlist) {
	const response = await server.post('/api/wish_lists', wishlist)
    console.log(response)
    return response.data
}

export async function deleteWishlist(id) {
    const response = await server.delete(`/api/wish_lists/${id}`);
    console.log('wishlist has been removed')
    return response.data
}

export async function updateWishlist(data) {
	const response = await server.put(`/api/wish_lists/${data.id}`, {name: data.name});
    return response.data
}