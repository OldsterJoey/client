import React, {useState} from 'react'
import Particle from '../Particle'
import {ParticleStyle, HeroContainer,  HeroContent, HeroImg, HeroHeading} from './HeroElements'
import Image from '../../components/images/logo.svg'
import UseAnimations from 'react-useanimations';


const HeroSection = () => {
    const[hover, setHover] = useState(false)

    const onHover=() => {
        setHover(!hover)
    }
    return (
        <>
        <HeroContainer>
            <ParticleStyle>
                <Particle />
            </ParticleStyle>
        </HeroContainer>
        <HeroContent>
            <HeroImg src={Image} alt={"logo"}/>
            <HeroHeading>Kids Presents Search Made Easy!</HeroHeading>

            <UseAnimations animation="arrowDown" size={100} strokeColor={"#fff"} wrapperStyle={{color: "#fff"}} autoplay={true}

            onMouseEnter={onHover}
            onMouseLeave={onHover} />
        </HeroContent>
        {/* <ArrowWrapper> */}

        {/* </ArrowWrapper> */}
        </>
    )   
}


export default HeroSection;
