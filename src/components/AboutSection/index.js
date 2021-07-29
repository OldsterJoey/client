import React from 'react'
// import Particle from '../Particle'
import { AboutContainer, AboutContent, AboutHeading, AboutHeading2, AboutText, AboutBtnWrapper, BtnLink } from './AboutElements'



const AboutSection = () => {
    return (
        <>
        <AboutContainer>
            {/* <AboutParticleStyle>
                 <Particle />
             </AboutParticleStyle> */}
            <AboutContent id="about">
                <AboutHeading>Find presents for your kids with 3 easy steps:</AboutHeading>
                <AboutHeading2>1</AboutHeading2>
                <AboutText>Create an account and save a child’s name or names of all children</AboutText>
                <AboutHeading2>2</AboutHeading2>
                <AboutText>Let your child personalise own page and save a wish list</AboutText>
                <AboutHeading2>3</AboutHeading2>
                <AboutText>Our app will find the closest matching present from the online shop - just save the shop link and price to your budget shopping list!</AboutText>
                <AboutBtnWrapper>
                    <BtnLink>Let's Go</BtnLink>
                </AboutBtnWrapper>
            </AboutContent> 

         </AboutContainer>

        </>
    )   
}


export default AboutSection;
