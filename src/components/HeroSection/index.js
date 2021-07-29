import React from 'react'
import Particle from '../Particle'
import {ParticleStyle, HeroContainer,  HeroContent, HeroImg, HeroText} from './HeroElements'
import Image from '../../components/images/logo.svg'

const HeroSection = () => {
    return (
        <>
        <HeroContainer>
            <ParticleStyle>
                <Particle />
            </ParticleStyle>
        </HeroContainer>
        <HeroContent>
            <HeroImg src={Image} alt={"logo"}/>
            <HeroText>Kids Presents Search Made Easy!</HeroText>
        </HeroContent>
        </>
    )   
}


export default HeroSection;
