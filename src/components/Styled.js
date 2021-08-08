import styled from 'styled-components' 


export const Span = styled.span`
	padding: .5em;
	margin: 1em;
	font-family: Arial, sans-serif;
`
    
export const Button = styled(Span)`
	cursor: pointer;
    color: #008080;
`
export const Label = styled.span `
	font-family: Arial,sans-serif;
`

export const Input = styled.input `
	height: 1em;
	margin: .5em;
`

export const Panel = styled.div `
	display: flex;
	align-items: center;
	flex-wrap: wrap;
`
export const BigTextInput = styled(Input) `
	height: 100px;
	width: 50%;
`

