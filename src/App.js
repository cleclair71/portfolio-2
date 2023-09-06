import logo from './logo.svg';
import './App.css';
import bgImage from './assets/images/bgg.png';
import styled from 'styled-components';
import TransulentBox from './components/TransulentBox';
import Landing from './components/landing/Landing';
import About from './components/about/About';

function App() {
  return (
    <BackgroundContainer>
      <TransulentBox>
      <Landing />
      </TransulentBox>

    </BackgroundContainer>
  );
}

export default App;
const BackgroundContainer = styled.div`
  background-image: url(${bgImage});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  height: 100vh;
  width: 100%;
  justify-content: center;
  display: flex;
  align-items: center; 
`;
