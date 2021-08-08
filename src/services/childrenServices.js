import {wishlists} from './wishlistsServices.js'
import server from '../config/api';

// helper methpod to descructure data of children
function transformChildren(child){
    const wishlist = wishlists.find(wishlist => wishlist.id === child.id)
    return{
        id: child.id,
        name: child.name,
        wishlist: wishlist.name,
    }

}

export async function getChildren(){
    const response = await server.get('/api/child_profiles');
    console.log(response);
    return response.data
}

export async function getChild(id){
    const response = await server.get('/api/child_profiles/${id}');
    console.log(response);
    return response.data
}

// export async function createChild(child){
//     return child
// }
// export async function deleteChild(id){
//     console.log('child has been removed')
//     return id
// }
// export async function updateChild(child){
//     return child
// }