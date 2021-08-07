import {wishlists} from './wishlistsServices.js'
import{userPics} from '../utils/userPics'
export const children = [
        {
          "id": 1,
          "name": "Joey",
          "created_at": "2021-08-07T04:28:12.187Z",
          "updated_at": "2021-08-07T04:28:12.187Z",
          "user_id": 1,
          "wish_list": {
            "name": "joeyswishlist",
            "wishes": [
              {
                "name": "I wish for a pink bicycle"
              },
              {
                "name": "I wish for a nintendo"
              }
            ]
          }
        },
        {
          "id": 2,
          "name": "Irina",
          "created_at": "2021-08-07T04:28:12.193Z",
          "updated_at": "2021-08-07T04:28:12.193Z",
          "user_id": 2
          
        }
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