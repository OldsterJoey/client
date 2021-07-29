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
            <UseAnimations
            animationKey="arrowDown" 
            to="about"
            wrapperStyle={{ color: "#fff" }}
            strokeColor="#fff"
            animation="x-cross"
            duration={500}
            onMouseEnter={onHover}
            onMouseLeave={onHover} />
        </HeroContent>
        {/* <ArrowWrapper> */}

        {/* </ArrowWrapper> */}
        </>
    )   
}


export default HeroSection;
