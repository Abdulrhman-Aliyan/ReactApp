import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import './App.css';

import {Container} from './components/index';
import {Header,Hero,MostPopular,GaminingLibrary,Footer} from './sections/index';

const App = () => {
  return (
    <>
      <Header/>
      <Container>
          <Hero/>
          <MostPopular/>
          <GaminingLibrary/>
      </Container>
      <Footer/>
    </>
  );
}

export default App;
