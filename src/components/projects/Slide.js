import React from 'react';
import { useSpring, animated } from 'react-spring';
import styled from 'styled-components';
import ProjectSlide from './ProjectSlide';

const SlideContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  will-change: transform, opacity;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SlideCard = styled.div`
  background-color: #fff;
  border-radius: 5px;
  width: 80%;
  height: 70%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.1);
`;

function Slide(props) {
    const { offsetRadius, index, moveSlide, content, animationConfig } = props;

    // Calculate the offset from the middle
    const offsetFromMiddle = index - offsetRadius;

    return (
        <animated.div
            from={{ opacity: 0, transform: `scale(0.8)` }}
            to={{ opacity: 1, transform: `scale(1)` }}
            config={animationConfig}
        >
            {style => (
                <SlideContainer style={style}>
                    <SlideCard onClick={() => moveSlide(offsetFromMiddle)}>
                        <ProjectSlide {...content} />
                    </SlideCard>
                </SlideContainer>
            )}
        </animated.div>
    );
}

export default Slide;