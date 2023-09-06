import React from 'react';
import styled from 'styled-components';


const About = () => {
    return (
        <LandingContainer>
        
          <OverlayText>
        front <br /> end <br /> developer
      </OverlayText>
    </LandingContainer>  
    );
}

const LandingContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
position: relative;

`;
const OverlayText = styled.div`
    position: absolute;
    font-family: 'Mioge', sans-serif;
    font-size: 4rem;
    color: #e2d459;
    left: calc(50% - 15vw); 
    margin-top: 40vh;
    text-shadow: 2px 2px 2px #000000;
`;

export default About;