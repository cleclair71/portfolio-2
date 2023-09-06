import React from 'react';
import styled from 'styled-components';


const About = () => {
    return (
        <AboutContainer>     
          <OverlayText>
        FRONT <br /> end <br /> developer
      </OverlayText>
    </AboutContainer>  
    );
}

const AboutContainer = styled.div`
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
left: 50%;  
top: 50%;   
transform: translate(-50%, -50%);  
text-shadow: 2px 2px 2px #000000;
margin-top: 40vh;
`;

export default About;