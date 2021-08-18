import React, {useState} from 'react'
import {useGlobalState} from '../utils/stateContext'
import Children from '../components/Children'
import ParentNavbar from '../components/Navbar/ParentNavbar'
import {MainContainer, MainContent, MainH1, MainH2, MainWrapper} from './AdminBoardElements'

export default function Admin({history}) {

	const {store} = useGlobalState()
	const {loggedInUser} = store
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }
    return (
        <div>
            <ParentNavbar toggle={toggle}/>
            <MainContainer>
                <MainContent>
                        <MainH1>Welcome to Wishfully, {loggedInUser}</MainH1>
                        <MainH2>We have a few wishes saved:</MainH2>
                    <MainWrapper>
                            <Children />
                    </MainWrapper>
                </MainContent>
            </MainContainer>
        </div>
    )
}
