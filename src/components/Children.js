import React from 'react'
// import {Link} from 'react-router-dom'
// import styled from 'styled-components'
import Child from './Child'
import {useGlobalState} from '../utils/stateContext'
import {ChildrenCardsWrapper, Button, ChildCard, ChildCardWrapper} from './Styled'

export default function Children(history) {
	const {store} = useGlobalState()
	const {children} = store
	console.log(children)
	if(!children) return (
        <div>
            <p>No children have been saved yet</p>
			<Button onClick={() => history.push('/children/new') }>Add Child</Button>	
        </div>)


	return  (
		<>
		<div>
			<ChildrenCardsWrapper>



			{children.map((child,index) => {
				return (
				<>
				<ChildCard>
					<ChildCardWrapper>
						<Child key={child.id} index={index} child={child} wishlist={child.wish_list}>
							{child.name}
						</Child>
					</ChildCardWrapper>
				</ChildCard>
				</>
				)
			})}


			</ChildrenCardsWrapper>
		</div>
		</>
	)
}