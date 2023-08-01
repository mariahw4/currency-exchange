import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Links({currentPage, handlePageChange }) {
  return (
    <>
    <Container>
      <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand 
            href="/"
            onClick={() => handlePageChange('Balances')}
            className={
                currentPage === "Balances" ? 'nav-link active' : 'nav-link'
            }
          >Balances</Navbar.Brand>
        </Container>
      </Navbar>
      <br />
      <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand 
            href="/recipients"
            onClick={() => handlePageChange('Recipients')}
            className={
                currentPage === "Recipients" ? 'nav-link active' : 'nav-link'
            }
            >Recipients</Navbar.Brand>
        </Container>
      </Navbar>
      <br />
      <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand 
          href="/invitation"
          onClick={() => handlePageChange('Invitation')}
            className={
                currentPage === "Invitiation" ? 'nav-link active' : 'nav-link'
            }
          
          >Invite a Friend</Navbar.Brand>
        </Container>
      </Navbar>
      <hr />
      <br />
      <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="/about"
          onClick={() => handlePageChange('About')}
          className={
              currentPage === "About" ? 'nav-link active' : 'nav-link'
          } >About</Navbar.Brand>
        </Container>
      </Navbar>
      <br />
      <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="/faq" 
          onClick={() => handlePageChange('FAQ')}
          className={
              currentPage === "FAQ" ? 'nav-link active' : 'nav-link'
          }>FAQ</Navbar.Brand>
        </Container>
      </Navbar>
      <br />
      <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="/legal"
          onClick={() => handlePageChange('Legal')}
          className={
              currentPage === "Legal" ? 'nav-link active' : 'nav-link'
          } >Legal</Navbar.Brand>
        </Container>
      </Navbar>
    </Container>
    </>
  );
}

export default Links;


