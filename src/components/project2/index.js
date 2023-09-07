import React, { useState } from 'react';
import styled from 'styled-components';
import VerticalSwipeToSlide from '../project2/Carousel';
import ContentSlide from './ContentSlide';
import ContentData from './ContentData';

const ProjectTest = () => {
    const [activeSlide, setActiveSlide] = useState(0);

    const handleSlideChange = (slideIndex) => {
        setActiveSlide(slideIndex);
    }

    const activeProject = ContentData[activeSlide]?.content;

    return (
        <LandingContainer>
            <LeftColumn>
                {activeProject && (
                    <ContentSlide 
                        title={activeProject.title}
                        description={activeProject.description}
                        githubLink={activeProject.githubLink}
                        websiteLink={activeProject.websiteLink}
                    />
                )}
            </LeftColumn>
            <RightColumn>
                <VerticalSwipeToSlide onSlideChange={handleSlideChange} />
            </RightColumn>
        </LandingContainer>
    );
}

const LandingContainer = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    height: 100%;
    // padding: 20px;
    align-items: center;
    position: relative;
    
    @media (max-width: 768px) {  
        flex-direction: column-reverse; 
       

    }
`;
const LeftColumn = styled.div`
    flex: 1; 
    padding: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 50%; 
    max-height: 90%; 
    
    img {
        max-width: 100%;  
        max-height: 100%; 
    }
    @media (max-width: 768px) {
        max-width: 100%;
        max-height: 50%;
        overflow: hidden;
    }
`;

const RightColumn = styled.div`
    flex: 1; 
    padding: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 50%;  // Max width for right column
    max-height: 90%; // Use 90% of the viewport height

    @media (max-width: 768px) {
        max-width: 100%;
        max-height: 50%;
        overflow: hidden;
    }
`;



export default ProjectTest;