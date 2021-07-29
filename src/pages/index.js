
import React from 'react';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection'

const Home = () => {

    // const [isOpen, setIsOpen] = useState(false) 
    // const toggle = () => {
    //     setIsOpen(!isOpen)
    // }
    return (
        <>
            <HeroSection />
            <AboutSection />
        </>
    )
}

export default Home;