import styled from 'styled-components';

export const ParticleStyle = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background-color: #54376E;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% 50%;
`

export const HeroContainer = styled.div`
    display: flex;
    vertical-align: bottom;
    /* overflow-y: scroll; */
    scroll-behavior: smooth;
    scroll-snap-type: y mandatory;
    height: 980px;

`
export const HeroContent = styled.div`
    z-index: 1;
    position: absolute;
    align-items: center;
    top:30%;
    left: 50%;
    transform: translate(-50%, -50%);
`
export const HeroImg = styled.img``

export const HeroHeading = styled.h1`
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
export const HeroText = styled.h2`
    margin-top: 24px;
    color: #fff;
    font-size: 24px;
    text-align: center;
    max-width: 600px;
    @media screen and (max-width: 780px) {
        font-size: 24px;
    }
    @media screen and (max-width: 480px) {
        font-size: 18px;
    }   `
