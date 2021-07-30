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
        font-size: 32px;
        padding-left: 24px;
        padding-right: 24px;
    }
    @media screen and (max-width: 480px) {
        font-size: 18px;
    }
`
export const AboutHeading2 = styled.h1`
    color: #fff;
    font-size: 1.5rem;
    text-align: center;

    @media screen and (max-width: 780px) {
        font-size: 1.2rem;
        padding-left: 10px;
        padding-right: 10px;
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
        font-size: 18px;
        padding-left: 24px;
        padding-right: 24px;
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
    background: #2E1518;
    white-space: nowrap;
    padding: 16px 32px;
    color: #fff;
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