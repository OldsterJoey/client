import server from '../config/api'


// helper methpod to descructure data of children
function transformChildren(child){
    return{
        author: "test",
        id: child.id,
        name: child.name,
        wishlist: child.wish_list.name
    }
}

export async function getChildren(){
    const response = await server.get('/api/child_profiles');
    console.log(response);
    return response.data
}

export async function getChild(id){
    const response = await server.get(`/api/child_profiles/${id}`);
    console.log(response);
    return response.data
}

export async function createChild(child){
    const response = await server.post('/api/child_profiles', child)
    console.log(response)
    return response.data
}
export async function deleteChild(id){
    const response = await server.delete(`/api/child_profiles/${id}`);
    console.log('child has been removed')
    return response.data
}
export async function updateChild(data){
    const response = await server.put(`/api/child_profiles/${data.id}`, {name: data.name});
    return response.data
}