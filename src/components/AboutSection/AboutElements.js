import styled from 'styled-components';
import {Link as LinkRouter } from 'react-router-dom';


export const AboutContainer = styled.section`
    display: flex;
    vertical-align: bottom; 
    /* overflow-y: scroll;  */
    scroll-behavior: smooth;
    /* scroll-snap-type: y mandatory; */
    background-color: #54376E;
    padding-top: 80px;
`

// export const AboutParticleStyle = styled.div`
//     position: relative;
//     width: 100%;
//     height: 100%;
//     background-color: #54376E;
//     background-repeat: no-repeat;
//     background-size: cover;
//     background-position: 50% 50%;
// `
export const AboutContent = styled.div`
    display: grid;
    z-index: 1;
    height: 890px;
    width: 100%;
    max-width: 800px;
    margin-right: auto;
    margin-left: auto; 
    justify-content: space-evenly;
    @media screen and (max-width: 480px){
        height: 960px;
        width: 90%;
    }
    @media screen and (max-width: 320px){
        height: 960px;
    }
    @media screen and (max-width: 280px){
        height: 1100px;
    }
`
export const AboutHeading = styled.h1`
    color: #fff;
    font-size: 2rem;
    text-align: center;
    @media screen and (max-width: 780px) {
        font-size: 1.5rem;
        padding-left: 24px;
        padding-right: 24px;
    }
    @media screen and (max-width: 480px) {
        font-size: 1.2rem;
    }
`
export const AboutHeading2 = styled.h1`
    color: #000;
    font-size: 1rem;
    text-align: center;
    padding: 0;
    margin-top: 5px;
    @media screen and (max-width: 780px) {
        font-size: 1rem;

    }
    @media screen and (max-width: 480px) {
        font-size: 1rem;
    }
`
export const AboutText = styled.h2`
    color: #fff;
    font-size: 18px;
    text-align: center;
@media screen and (max-width: 780px) {
        font-size: 16px;
        padding-left: 24px;
        padding-right: 24px;
        max-width: 600px;

    }
    @media screen and (max-width: 480px) {
        font-size: 12px;
    }   
    `

export const AboutBtnWrapper = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 60px;
    align-items: center;
    text-align: center;
`

export const BtnLink = styled(LinkRouter)`
    border-radius: 15px;
    background: #fff;
    white-space: nowrap;
    padding: 16px 32px;
    color: #000;
    font-size: 16px;
    outline: none;
    border: none;
    cursor: pointer;
    font-family: 'Montserrat', sans-serif;

    transition: all 0.2s ease-in-out;
    text-decoration: none;
    font-weight: bold;
    &:hover{
        transition: all 0.2s ease-in-out;
        background: #DA7B93;
        color: #000;
}
`

export const Wrapper = styled.div`
    width: 30px;
    z-index: 0;
    height: 30px;
    border-radius: 50px;
    background-color: #fff;
    padding: 6px 6px 6px;
    text-align: center;
    justify-self: center;
`


export const AboutButton = styled.button`
    background: #fff;
    padding: 16px 0;
    border-color: #4264DD;
    border-radius: 16px;
    color: #4264DD;
    font-size: 20px;
    cursor: pointer;
    margin-top: 60px;
	width: 120px;

    @media screen and (max-width: 280px) {
        max-width:80px;
    }
    
    &:hover {
        transition: all 0.2 ease-in-out;
        background: #4264DD;
        color: #fff;
    }
`;
