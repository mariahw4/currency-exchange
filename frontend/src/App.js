import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Wallet from './pages/wallet';
import Links from './components/HomePageLinks';
import Legal from './pages/legal';
import Recipients from './pages/recipients';
import Invitation from './pages/invitation';
import About from './pages/about';
import FAQ from './pages/faq';

import './App.css';








function App() {

  const [currentPage, setCurrentPage] = useState('Balances');
  
  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    if (currentPage === 'Balances') {
      return <Wallet />;
    }
    if (currentPage === 'Recipients') {
      return <Recipients />;
    }
    if (currentPage === 'Invitation') {
      return <Invitation />;
    }
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'FAQ') {
      return <FAQ />;
    }
    return <Legal />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <>
      <Container>
        <Row>
          <Col>
            <Links currentPage={currentPage} handlePageChange={handlePageChange} />
          </Col>
          <Col>
            {renderPage()}
          </Col>
        </Row>
      </Container>

    </>






  );
}

export default App;
