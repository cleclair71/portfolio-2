import React from 'react';
import styled from 'styled-components';
import arrowL from '../assets/images/elements/arrowL.png';  // Make sure the paths are correct
import arrowR from '../assets/images/elements/arrowR.png';
import About from './about/About';
import { useSpring, animated } from 'react-spring';

const TransulentBox = ({ children }) => {
    const [currentSlide, setCurrentSlide] = React.useState(0);
    const contentRef = React.useRef(null);
    const totalSlides = 2;

    const { x } = useSpring({
        x: currentSlide * -100, // Multiplied by -100 to move to the left
        config: { tension: 280, friction: 60 }
    });
    
    const handleLeftClick = () => {
        if (currentSlide > 0) {
            setCurrentSlide(prev => prev - 1);
        } else {
            setCurrentSlide(totalSlides - 1); 
        }
    };

    const handleRightClick = () => {
         
        if (currentSlide < totalSlides - 1) {
            setCurrentSlide(prev => prev + 1);
        } else {
            setCurrentSlide(0); 
        }
    };

    React.useEffect(() => {
        if (contentRef.current) {
            const scrollAmount = currentSlide * window.innerWidth;
            contentRef.current.scrollLeft = scrollAmount;
        }
    }, [currentSlide]);

    return (
        <TranslucentBox>
            <ArrowLeft src={arrowL} onClick={handleLeftClick} />
            <ArrowRight src={arrowR} onClick={handleRightClick} />
            <ContentContainer ref={contentRef}>
                <Slide>{children}</Slide>
                <Slide><About /></Slide>
            </ContentContainer>
        </TranslucentBox>
    );
}

const TranslucentBox = styled.div`
    width: 90vw;
    height: 90vh;
    margin: 5%;
    position: relative;
    backdrop-filter: blur(7px);
    background-color: rgba(216, 216, 209, 0.5);
    border-radius: 10px;
    overflow: auto;
    padding: 20px;
`;

const ContentContainer = styled.div`
    display: flex;
    overflow: hidden;
    width: 100%;
    height: 100%;
    scroll-snap-type: x mandatory;
`;

const Slide = styled.div`
    min-width: 100%;
    scroll-snap-align: start;
`;

const ArrowLeft = styled.img`
    position: absolute;
    left: 10px;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
    z-index: 1;
    width: 50px;
`;

const ArrowRight = styled(ArrowLeft)`
    left: auto;
    right: 10px;
    width: 50px;
    
`;

export default TransulentBox;