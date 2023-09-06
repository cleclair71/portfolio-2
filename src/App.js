import logo from './logo.svg';
import './App.css';
import bgImage from './assets/images/bgg.png';
import styled from 'styled-components';
import TranslucentBox from './components/TransulentBox';
import Landing from './components/landing/Landing';
import About from './components/about/About';


function App() {
  const slides = [<Landing />, <About />];
  
  return (
    <BackgroundContainer>
      <TranslucentBox slides={slides} />
    </BackgroundContainer>
  );
}


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
export default App;
