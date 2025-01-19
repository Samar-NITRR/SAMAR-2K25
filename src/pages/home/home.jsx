import HomeBackground from '../../components/homeBackground.jsx';
import MatrixBackground from '../../components/matrixBackground.jsx';
import LandingSection from './homeComponents/landingSection.jsx';
import ImageGallery from './homeComponents/imageGallery.jsx';
import Sponsors from './homeComponents/sponsors.jsx';
import Timeline from './homeComponents/timeline.jsx';
import About from './homeComponents/abouthome.jsx';
import SwordAnimation from '../../components/swordAnimation.jsx';
import TeamRedirection from './homeComponents/teamRedirection.jsx';
import AOS from "aos";
import { useEffect } from 'react';

function Home() {
    useEffect(() => {
        AOS.init({duration: 1000, delay: 100});
      }, []);
    return (
        <>
            <HomeBackground />
            <MatrixBackground />
            <LandingSection />
            <SwordAnimation />
            <About />
            <TeamRedirection />
            <Timeline />
            <Sponsors />
            <ImageGallery />
        </>
    );
}

export default Home;
