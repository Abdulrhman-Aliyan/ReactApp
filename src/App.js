import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import './App.css';

import {Home} from './Pages/index'
import {Container} from './components/index';
import {Header,Hero,MostPopular,GaminingLibrary,Footer} from './sections/index';

const App = () => {
  return (
    <>
      <Router>
        <Header/>
        <Container>
          <Routes>
            <Route path='/' element={<Home />}/>
          </Routes>
        </Container>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
