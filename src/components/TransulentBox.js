import React from 'react';
import styled from 'styled-components';
import arrowL from '../assets/images/elements/arrowL.png';
import arrowR from '../assets/images/elements/arrowR.png';
import About from './about/About';
import { useSpring, animated } from 'react-spring';
import Landing from './landing/Landing';

const TranslucentBox = ({ slides }) => {
    
    const [currentSlide, setCurrentSlide] = React.useState(0);
    const totalSlides = slides.length;
    const [isSlidingRight, setIsSlidingRight] = React.useState(false);
  
    const props = useSpring({
        x: isSlidingRight ? (currentSlide * 100) : (currentSlide * -100),
        config: { tension: 280, friction: 60 }
    });

    const handleLeftClick = () => {
        setIsSlidingRight(true); 
        if (currentSlide > 0) {
            setCurrentSlide(prev => prev - 1);
        } else {
            setCurrentSlide(totalSlides - 1);
        }
    };

    const handleRightClick = () => {
        setIsSlidingRight(false); 
        if (currentSlide < totalSlides - 1) {
            setCurrentSlide(prev => prev + 1);
        } else {
            setCurrentSlide(0);
        }
    };

    return (
        <Wrapper>
        <ArrowLeft src={arrowL} onClick={handleLeftClick} />
        <ArrowRight src={arrowR} onClick={handleRightClick} />
        <ContentContainer key={currentSlide} style={{ transform: props.x.to(x => `translate3d(${x}%,0,0)`) }}>
        {slides.map((SlideComponent, index) => (
    <Slide key={index}>
        <SlideComponent />
    </Slide>
))}
</ContentContainer>
    </Wrapper>
    );
}

const Wrapper = styled.div`
    width: 90vw;
    height: 90vh;
    margin: 5%;
    position: relative;
    backdrop-filter: blur(7px);
    background-color: rgba(18, 47, 49, 0.5);
    border-radius: 10px;
    overflow: hidden;
    padding: 20px;
`;

const ContentContainer = styled(animated.div)`
    display: flex;
    
    width: 100%;
    height: 100%;
    scroll-snap-type: x mandatory;
`;

const Slide = styled.div`
min-width: 100%;
scroll-snap-align: start;
// display: flex;
align-items: center;
justify-content: center;
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

export default TranslucentBox;