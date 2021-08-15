import React from 'react'
import {useHistory, useParams} from 'react-router-dom'
import {LineWrapper,Btn, BtnWrapper, TextWrapper} from './Styled'
import {deleteWish} from '../services/wishesServices'
import {useGlobalState} from '../utils/stateContext'
import {Link} from 'react-router-dom'
import ListGroup from 'react-bootstrap/ListGroup'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Container from 'react-bootstrap/Container'

export default function WishesDetails(props) {

	const {dispatch} = useGlobalState()
	const {id} = useParams()
	const {wishlist} = props
	console.log(props)

	const wishes=wishlist.wishes
	let history = useHistory()

	if (wishes.length === 0) return (
	<div>
		<p>No wishes have been saved yet</p>
		<Link to={`/wishes/new?wish_list_id=${id}`}>Create Wishes</Link>
	</div>
	)	
	console.log(wishes)

    // const wishes = wishlist && wishlist.wishes //review

    const wish = wishes.find(wish => wish.id === parseInt(id))

	function handleDelete() {
		deleteWish(wish.id)
		// deleteWishes(wishlist[wishes]) - is this the right way to delete the dependent wishes?
		.then(() => {
			dispatch({type: 'deleteWish', data: id})
			history.push(`/wishlist/${id}}`) 
			// not sure if that is the right way to get back to the child who used to have that wishlist
		})
	}

    return (
		<Container>
        <ListGroup variant="flush">
			<ListGroup.Item>Wishes are:</ListGroup.Item>

			{wishes.map((wish, index) => {
				return(					
				<LineWrapper>
					<ListGroup.Item style={{alignContent: 'space-evenly'}}>
						<ul>
							<li key={index} wish={wish}>
								<div style={{display: 'inline-block'}}>{wish.name}</div>
									<ButtonGroup md={{ span: 3, offset: 3 }}>
										<BtnWrapper>
											<Btn onClick={() => history.push(`/wish/update/${wish.id}`)}>Update Wish</Btn>
										</BtnWrapper>

										<BtnWrapper>
											<Btn onClick={handleDelete}>Delete Wish</Btn>
										</BtnWrapper>
										
									</ButtonGroup>
							</li>
						</ul>
					</ListGroup.Item>
				</LineWrapper>
				)
			})}
				<ListGroup.Item variant="flush">
					If you want to add another wish    
					<ButtonGroup aria-label="">

					<BtnWrapper>
						<Btn onClick={() => history.push(`/wishes/new?wish_list_id=${id}`)}>Add New Wish</Btn>
					</BtnWrapper>
					</ButtonGroup>
				</ListGroup.Item>
        </ListGroup>
		</Container>
    )
}