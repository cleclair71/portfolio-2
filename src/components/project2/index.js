import React from 'react';
import styled from 'styled-components';
import cassieImage from '../../assets/images/cassie.png';
import VerticalSwipeToSlide from '../project2/Carousel';

const ProjectTest = () => {
    return (
        <LandingContainer>
            <LeftColumn>
                <img src={cassieImage} alt="Cassie" />
                {/* Add any other content you want in the left column here */}
            </LeftColumn>
            <RightColumn>
                <VerticalSwipeToSlide />
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