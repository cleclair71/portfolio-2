import styled from 'styled-components';

const ProjectSlideWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const ProjectTitle = styled.h1`
color: #0077b6;`;
const ProjectDescription = styled.p`
  color: #0077b6;`;

const ButtonsWrapper = styled.div`
  display: flex;
  gap: 10px;
`;

const Button = styled.a`
  padding: 10px 20px;
  background-color: #0077b6;
  color: white;
  border-radius: 5px;
  text-decoration: none;
`;

function ProjectSlide({ title, description, githubLink, websiteLink }) {
    return (
      <ProjectSlideWrapper>
        <ProjectTitle>{title}</ProjectTitle>
        <ProjectDescription>{description}</ProjectDescription>
        <ButtonsWrapper>
          <Button href={githubLink} target="_blank">GitHub</Button>
          <Button href={websiteLink} target="_blank">Website</Button>
        </ButtonsWrapper>
      </ProjectSlideWrapper>
    );
  }
  
  export default ProjectSlide;