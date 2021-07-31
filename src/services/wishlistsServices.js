import {children} from '../childrenServices.js'

const wishlists =[

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

function transformWishlist(wishlist){
    const child = children.find(child => child.id === wishlist.child_id)
    return {
        mainUser: "Parent",
        name: child.name,
        posted: wishlist.created_at,
        updated: wishlist.updated_at,
        wishes: wishlist.wishes
    }

}
export async function getWishlists() {
    console.log(wishlists)
	return wishlists
	// return Promise.resolve(wishlists)
}


export async function getWishlist(id) {
	const wishlist = wishlists.find(wishlist => wishlist.id === id)
	return wishlist ? transformWishlist(wishlist) : null
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
