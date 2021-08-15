import React,{ useState,useEffect} from 'react'
import {useParams,useHistory} from 'react-router-dom'
import {getChild} from '../services/childrenServices'
import {MainContainer, FormContent, LineWrapper, Btn, BtnWrapper} from './Styled'
import {useGlobalState} from '../utils/stateContext'
import {deleteChild} from '../services/childrenServices'
import WishlistDetails from './WishlistDetails'
import ListGroup from 'react-bootstrap/ListGroup'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import Navbar from './Navbar'

export default function ChildDetails() {
	const [child,setChild] = useState(null)

	const {id} = useParams()
	let history = useHistory()
	const {store,dispatch} = useGlobalState()
	const {loggedInUser} = store
	useEffect(() => {
		getChild(id)
		.then((child) => setChild(child))
		.catch((error) => console.log(error))
	},[id])
	console.log(child)

	if (!child) return null
	function handleDelete() {
		deleteChild(id)
		.then(() => {
			dispatch({type: 'deleteChild', data: id})
			history.push('/main')
		})
	}
	return (
		<>
		<Navbar />
		<MainContainer >
			<FormContent>
				<Container style={{ alignContent: 'center', alignItems: 'flex-end' }}>
			<Card style={{ width: '45rem'}}>
				<ListGroup style={{ padding: '40px'}} >
					<LineWrapper>
						<ListGroup.Item>Author: {child.name}

						{loggedInUser  &&
						<ButtonGroup>
							<BtnWrapper>
								<Btn onClick={() => history.push(`/child/update/${id}`)}>Update</Btn>
							</BtnWrapper>

							<BtnWrapper>
								<Btn onClick={handleDelete}>Delete</Btn>
							</BtnWrapper>
						</ButtonGroup>
						}
						</ListGroup.Item>
					</LineWrapper>

					<WishlistDetails child={child} wishlist={child.wish_list}/>
				</ListGroup>
		</Card>
		</Container>
		</FormContent>
		</MainContainer>

		</>
	)
}

























// import React,{ useState, useEffect}  from 'react'
// import {useParams, useHistory} from 'react-router-dom'
// // import {getChild} from '../services/childrenServices'
// import {Button, Panel} from './Styled'
// import {useGlobalState} from '../utils/stateContext'

// import {getChild} from '../services/childrenServices'
// import {getWishlist} from '../services/wishlistsServices'
// import Child from '../components/Child'
// import WishlistDetails from '../components/WishlistDetails'
// import { getWishes } from '../services/wishesServices'

// export default function ChildDetails() {
// 	const [child,setChild] = useState(null)
// 	// const [wishlist,setWishlist] = useState(null)

// 	const {store} = useGlobalState()
//     const {children} = store
// 	const {id} = useParams()
// 	let history = useHistory()

// 	console.log(children)

// 	// const child = children.find(child => child.id === parseInt(id))

// 	useEffect(() => {
// 		getChild(id)
// 		.then((child) => setChild(child))
// 		.then((child) => console.log(child))
// 		.catch((error) => console.log(error))
// 	},[id])	

// 	const wishlist = child && child.wish_list
// 	// console.log(wishlist)
// 	// const wishes = wishlist && wishlist.wishes 

//     if(!child) return null


//     if(!wishlist) return (
//         <div>
//             {child.name}
//             <p>No wishlist has been saved yet</p>
// 		<Button onClick={() => history.push(`/wishlist/new/`)}>Add Wishlist</Button>
//         </div>)

// 	// if (!wishes) return (
// 	// <div>
// 	// 	{wishlist.name}
// 	// 	<p>No wishes have been saved yet</p>
// 	// 	<Button onClick={() => history.push(`/wishlist/update/${wishlist.id}`)}>Update Wishlist</Button>
// 	// </div>
// 	// )
// 	// function handleDelete() {
// 	// 	deleteWishlist(id)
// 	// 	// deleteWishes(wishlist[wishes]) - is this the right way to delete the dependent wishes?
// 	// 	.then(() => {
// 	// 		dispatch({type: 'deleteWishlist', data: id})
// 	// 		history.push(`/main`) 
// 	// 		// not sure if that is the right way to get back to the child who used to have that wishlist
// 	// 	})
// 	// }
// 	return (
// 		<div>			
// 			<p>Name: {child.name}</p>			
// 			<Button onClick={() => history.push(`/child/update/${id}`)}>update Name</Button>
// 			<Button onClick={() => history.push(`/wishlist/`)}>update Name</Button>

// 			{/* <p>Icon: </p>
// 			<p>Wishlist: {wishlist.name}</p>  */}
			
// 			{/* {wishes.map((wish) => {
// 				return(
// 					<li>{wish.name}</li>

// 				)
// 			})}
//                 <Panel>
// 					<Button onClick={() => history.push(`/wishlist/update/${id}`)}>Update Wishlist</Button>
// 					<Button onClick={handleDelete}>Delete Wishlist</Button>
// 				</Panel> */}
// 		</div>
// 	)
// }