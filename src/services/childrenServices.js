export const children = [
        {
          "id": 1,
          "name": "Joey",
          "created_at": "2021-08-07T04:28:12.187Z",
          "updated_at": "2021-08-07T04:28:12.187Z",
          "user_id": 1,
          "wish_list": {
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
          }
        },
        {
          "id": 2,
          "name": "Irina",
          "created_at": "2021-08-07T04:28:12.193Z",
          "updated_at": "2021-08-07T04:28:12.193Z",
          "user_id": 2,
          "wish_list": {
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
        }
      ]

// helper methpod to descructure data of children
function transformChildren(child){
    return{
        id: child.id,
        name: child.name,
        wishlist: child.wish_list.name
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