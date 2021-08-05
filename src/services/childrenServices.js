import {wishlists} from './wishlistsServices.js'
import{userPics} from '../utils/userPics'
export const children = [
    {
        id: 1, 
        name: "Elizabeth", 
        img_id: 1, 
        wishlist_id: 1,
        created_at: "2021-01-11T01:33:50.019Z", 
        updated_at: "2021-01-11T01:33:50.019Z", 
        user_id: 1
    },
    {
        id: 2, 
        name: "Dylan", 
        img_id: 2, 
        wishlist_id: 2,
        created_at: "2021-01-11T01:33:50.019Z", 
        updated_at: "2021-01-11T01:33:50.019Z", 
        user_id: 1
    },
]

// helper methpod to descructure data of children
function transformChildren(child){
    const wishlist = wishlists.find(wishlist => wishlist.id === child.id)
    const icon = userPics.find(icon=> icon.id === child.img_id )
    return{
        id: child.id,
        name: child.name,
        wishlist: wishlist.name,
        icon: icon.src
    }

}

export async function getChildren(){
    return children
}

export async function getChild(id){
    const child = children.find(child => child.id === id)
    return child ? transformChildren(child) : null
}

export async function createChild(child){
    return child
}
export async function deleteChild(id){
    console.log('child has been removed')
    return id
}
export async function updateChild(child){
    return child
}