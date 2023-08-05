

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Wallet from './pages/wallet';
import Legal from './pages/legal';
import Recipients from './pages/recipients';
import Invitation from './pages/invitation';
import About from './pages/about';
import FAQ from './pages/faq';
import Links from './components/HomePageLinks';

import './App.css';


function App() {



  return (
    <>
  
      <Router>


        <Container>
          <Row>
            <Col sm={4}>
              <Links />
            </Col>
            <Col sm={8}>
             <div className='header-style'>
              <h1>Currency Exchange App</h1>
             </div>
              <Routes>
                <Route exact path="/currency-exchange/" element={<Wallet/>} />
                <Route path="/recipients" element={<Recipients/>} />
                <Route path="/invitation" element={<Invitation/>} />
                <Route path="/about" element={<About/>} />
                <Route path="/faq" element={<FAQ/>} />
                <Route path="/legal" element={<Legal/>} />
              </Routes>
            </Col>
          </Row>
        </Container>
      </Router>

    </>






  );
}

export default App;
