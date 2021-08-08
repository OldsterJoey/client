import {children} from './childrenServices'
export const wishlists =
    [
        {
          "id": 1,
          "name": "joeyswishlist",
          "child_profile_id": 1,
          "created_at": "2021-08-07T04:28:12.229Z",
          "updated_at": "2021-08-07T04:28:12.229Z",
          "wishes": [
            {
              "id": 1,
              "name": "I wish for a pink bicycle",
              "wish_list_id": 1,
              "created_at": "2021-08-07T04:28:12.243Z",
              "updated_at": "2021-08-07T04:28:12.243Z"
            },
            {
              "id": 2,
              "name": "I wish for a nintendo",
              "wish_list_id": 1,
              "created_at": "2021-08-07T04:28:12.248Z",
              "updated_at": "2021-08-07T04:28:12.248Z"
            }
          ]
        },
        {
          "id": 2,
          "name": "Wishlist",
          "child_profile_id": 2,
          "created_at": "2021-08-08T02:04:33.419Z",
          "updated_at": "2021-08-08T02:04:33.419Z",
          "wishes": [
            {
              "id": 3,
              "name": "doll",
              "wish_list_id": 2,
              "created_at": "2021-08-08T02:04:48.559Z",
              "updated_at": "2021-08-08T02:04:48.559Z"
            }
        ]
    }
]

// helper method to descructure data in wishlist
function transformWishlist(wishlist){
    const child = children.find(child => child.id === wishlist.id)
    const wishes = wishlist.wishes
    console.log(wishes)

    return {
        child: child.name,
        name: wishlist.name,
        posted: wishlist.created_at,
        updated: wishlist.updated_at,
        wishes: []
}}
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

