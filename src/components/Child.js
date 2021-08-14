import React from 'react'
import Wishlist from './Wishlist'
import {useHistory} from 'react-router-dom'

import {deleteChild} from '../services/childrenServices'
import {Button, Panel} from './Styled'
import {useGlobalState} from '../utils/stateContext'



export default function Child({child,index, id}){
    let history = useHistory()

    const {store, dispatch} = useGlobalState()
	const {loggedInUser} = store

    if(!child) return null
    const wishlist = child.wish_list
    console.log(wishlist)
    if(!wishlist) return (
        <>
        <div>
            {child.name}
            <p>No wishlist has been saved yet</p>
        </div>
      </>
      )

      function handleDelete(id) {
        deleteChild(id)
        .then(() => {
            dispatch({type: 'deleteChild', data: id})
            history.push('/admin-board')
        })
    }

    return(
        <>
        <div>


            <p>{child.name}</p>	
            <Wishlist key={wishlist.id} child={child} index={index} wishlist={wishlist}/>

            {loggedInUser && 
            <Panel>
                <Button value={child.id} onClick={() => history.push(`/child/update/${id}`)}>Update Child Name</Button>

                <Button onClick={handleDelete}>Delete Child name</Button>
            </Panel>
            }


            
        </div>
        </>
    )
}
