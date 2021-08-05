import React from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'
// import {useGlobalState} from '../utils/stateContext'

const StyledLink = styled(Link) `
	text-decoration: none;
`

export default function Admin() {
	return  (
		<div>
			<StyledLink>
                Parent
			</StyledLink>
		</div>
	)
}