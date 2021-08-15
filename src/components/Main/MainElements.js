import styled from 'styled-components';
// import {Link} from 'react-router-dom';


export const MainContainer = styled.section`
    display: flex;
    align-items: flex-start;
    /* overflow-y: scroll;  */
    scroll-behavior: smooth;
    /* scroll-snap-type: y mandatory; */
    background-color: #54376E;
    padding-top: 80px;
    height: 890px;
    @media screen and (max-width: 480px){
        height: 1100px;
    }
    @media screen and (max-width: 280px){
        height: 1200px;
    }
`

export const MainContent = styled.div`
    display: grid;
    z-index: 1;
    width: 100%;
    /* margin-bottom: 100px; */
    max-width: 800px;
    margin-right: auto;
    margin-left: auto; 
    align-items: center;   
    justify-content: space-evenly;
    @media screen and (max-width: 480px){
        height: 960px;
        width: 90%;
    }
    @media screen and (max-width: 320px){
        height: 960px;
    }
    @media screen and (max-width: 280px){
        height: 1000px;
    }
`


export const MainWrapper = styled.div`
    max-width: 1000px;
    margin: 0 auto;
    display: grid;
    place-items: center;
    /* padding: 50px; */
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 16px;
    padding: 50px 50px;

    @media screen and (max-width: 900px) {
        grid-template-columns: 1fr 1fr;
        align-items: center;
        justify-content: center;
    }

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
        /* padding: 0 20px; */
    }
`
export const MainHeading = styled.h1`
    color: #fff;
    font-size: 2rem;
    text-align: center;
    @media screen and (max-width: 780px) {
        font-size: 40px;
    }
    @media screen and (max-width: 480px) {
        font-size: 32px;
    }
`

export const MainH1 = styled.h1`
    color: #fff;
    padding: 50px;
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
export const MainH2 = styled.h2`
    color: #fff;
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

export const StyledButton = styled.button`
    background: #fff;
    width: 100px;
    height: 100px;
    /* padding: 16px 0; */
    border-radius: 50px;
    color: #4264DD;
    font-size: 20px;
    cursor: pointer;
    /* margin-top: 60px; */
	width: 120px;

    @media screen and (max-width: 280px) {
        max-width:80px;
    }
`

export const Wrapper = styled.div`
    /* display: inline-block;
    width: 80px;
    z-index: 0;
    height: 80px;
    border-radius: 50px;
    background-color: #fff;
    padding: 10px;
    text-align: center;
    vertical-align: middle; */
`