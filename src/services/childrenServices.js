import {userPics} from '../utils/userPics'

const children = [
    {
        child_id: 1, 
        name: "Elizabeth", 
        userPic_id: 2, 
        wishlist_id: 1,
        created_at: "2021-01-11T01:33:50.019Z", 
        updated_at: "2021-01-11T01:33:50.019Z", 
        user_id: 1
    },
    {
        child_id: 2, 
        name: "Dylan", 
        userPic_id: 3,
        wishlist_id: 1,
        created_at: "2021-01-11T01:33:50.019Z", 
        updated_at: "2021-01-11T01:33:50.019Z", 
        user_id: 1
    },
]

function transformChildren(child){
    const userPic = userPics.find(userPic => userPic.id === children.userPic_id)
    return {
        name: child.name,
        wishlist: child.wishlist_id
        icon: userPic.icon
    }
}

export async function getChildren(){
    return children
}

export async function getChild(id){
    const child = child.find(child => child.id == id)
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