import server from '../config/api';
export const wishlists =[

    {
        id: 1, 
        name: "My wishlist",
        child_id: 1, 
        wishes: [
            {id: 1, name: "Pink Bike"},
            {id: 2, name: "Doll"},
            {id: 3, name: "Paw Patrol Skye"}
        ],
        created_at: "2021-01-11T01:33:50.019Z", 
        updated_at: "2021-01-11T01:33:50.019Z" 
    },
    {
        id:2,
        name: " ",
        child_id: 2,
        wishes: [],
        created_at: " ", 
        updated_at: " " 
    }
]

// helper method to descructure data in wishlist
// function transformWishlist(wishlist){
//     const child = children.find(child => child.id === wishlist.id)
//     const wishes = wishlist.wishes
//     console.log(wishes)

//     return {
//         child: child.name,
//         name: wishlist.name,
//         posted: wishlist.created_at,
//         updated: wishlist.updated_at,
//         wishes: []
// }}
export async function getWishlists() {
    const response = await server.get('/api/wish_lists');
    console.log(response);
	return response.data
	// return Promise.resolve(wishlists)
}


export async function getWishlist(id) {
    const response = await server.get('/api/wish_lists');
    console.log(response)
    return response.data
}

export async function createWishlist(wishlist) {
	return wishlist
}

export async function deleteWishlist(id) {
	console.log("wishlist was deleted")
	return id
}

export async function updateWishlist(wishlist) {
	return wishlist
}

//  retrieving wishes from the database

export async function getWishes(){
    const wishes = wishlists.wishes
    console.log(wishes)
    return wishes
}
export async function getWish(id){
    const wish = wishlists.find(wish => wish.id === id)
    return wish
}

