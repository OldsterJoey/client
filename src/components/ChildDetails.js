import React,{ useState,useEffect} from 'react'
import {useParams,useHistory} from 'react-router-dom'
import {getChild} from '../services/childrenServices'
import {Button, Card, CardWrapper, Text, Container, ContentWrapper} from './Styled'
import {useGlobalState} from '../utils/stateContext'
import {deleteChild} from '../services/childrenServices'
import WishlistDetails from './WishlistDetails'
import ChildrenNavbar from '../components/Navbar/ChildrenNavbar'

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
		console.log(id)
		deleteChild(id)
		.then(() => {
			dispatch({type: 'deleteChild', data: id})
			history.push('/main')
		})
	}
	return (
		<div>
			<Container>
				<ChildrenNavbar />
				<Card>
					<CardWrapper>
						<ContentWrapper>
						<Text>Author: {child.name}</Text>	

						{loggedInUser  &&
						<div>
							<Button onClick={handleDelete}>Delete</Button>
							<Button onClick={() => history.push(`/child/update/${id}`)}>Update</Button>
						</div>
						}
						</ContentWrapper>


					<WishlistDetails child={child} childId={child.id} wishlist={child.wish_list}/>

					</CardWrapper>

				</Card>

			</Container>

		</div>
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