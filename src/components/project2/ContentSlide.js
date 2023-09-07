import styled from 'styled-components';
import { FancyButton, ButtonHorizontalDiv, ButtonVerticalDiv } from '../elements/Button';
import { useSpring, animated } from 'react-spring';

const ProjectSlideWrapper = styled.div`
  display: flex;
  flex-direction: column; 
  align-items: left;
  width: 100%;
  height: 100%;
`;

const ProjectTitle = styled.h1`
color: #cccccb;
font-family: 'Qarkine', cursive;
padding-bottom: -20px;`;
const ProjectDescription = styled.p`
  color: #cccccb;
  font-family: 'BritaniaLigatura', cursive;
  padding-bottom: 20px;`;

const ButtonsWrapper = styled.div`
  display: flex;
  gap: 40px;
`;

const SmallFancyButton = styled(FancyButton)`
padding: 1em 2em;
`;

const LeftButton = styled(SmallFancyButton)`
background-color: rgba(221, 208, 89, 0.2);
`;

const RightButton = styled(SmallFancyButton)`
color: rgba(221, 208, 89, .5)
`;

function ContentSlide({ title, description, githubLink, websiteLink }) {
    const titleSpring = useSpring({
        from: { transform: 'translateY(-100%)' },
        to: { transform: 'translateY(0%)' },
        delay: 100
    });

  
        const descriptionSpring = useSpring({
            from: { transform: 'translateY(-100%)' },
            to: { transform: 'translateY(0%)' },
            delay: 300
        });
        const buttonSpring = useSpring({
            from: { transform: 'translateY(-100%)' },
            to: { transform: 'translateY(0%)' },
            delay: 500
        });
    return (
      <ProjectSlideWrapper>
        <animated.div style={titleSpring}>
                <ProjectTitle>{title}</ProjectTitle>
            </animated.div>
            <animated.div style={descriptionSpring}>
                <ProjectDescription>{description}</ProjectDescription>
            </animated.div>
            <animated.div style={buttonSpring}>
                <ButtonsWrapper>
                    <LeftButton href={githubLink} target="_blank">
                        GitHub 
                        <ButtonHorizontalDiv />
                        <ButtonVerticalDiv />
                    </LeftButton>
                    <RightButton href={websiteLink} target="_blank">
                        Website 
                        <ButtonHorizontalDiv />
                        <ButtonVerticalDiv />
                    </RightButton>
                </ButtonsWrapper>
            </animated.div>
      </ProjectSlideWrapper>
    );
  }
  
  export default ContentSlide;