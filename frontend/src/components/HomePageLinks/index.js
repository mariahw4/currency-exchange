import React from 'react';
import {LinkContainer} from 'react-router-bootstrap'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Links() {
  return (
    <>
    <Container>
      <Navbar className="bg-body-tertiary">
        <Container>
            <LinkContainer to="/currency-exchange/">
          <Navbar.Brand>Balances</Navbar.Brand>
            </LinkContainer>
        </Container>
      </Navbar>
      <br />
      <Navbar className="bg-body-tertiary">
        <Container>
            <LinkContainer to='/recipients'>

          <Navbar.Brand >Recipients</Navbar.Brand>
            </LinkContainer>
        </Container>
      </Navbar>
      <br />
      <Navbar className="bg-body-tertiary">
        <Container>
        <LinkContainer to='/invitation'>
          <Navbar.Brand >Invite a Friend</Navbar.Brand>
          </LinkContainer>
        </Container>
      </Navbar>
      <hr />
      <br />
      <Navbar className="bg-body-tertiary">
        <Container>
        <LinkContainer to='/about'>
          <Navbar.Brand >About</Navbar.Brand>
          </LinkContainer>
        </Container>
      </Navbar>
      <br />
      <Navbar className="bg-body-tertiary">
        <Container>
        <LinkContainer to='/faq'>
          <Navbar.Brand >FAQ</Navbar.Brand>
          </LinkContainer>
        </Container>
      </Navbar>
      <br />
      <Navbar className="bg-body-tertiary">
        <Container>
            <LinkContainer to='/legal'>

          <Navbar.Brand>Legal</Navbar.Brand>
            </LinkContainer>
        </Container>
      </Navbar>
    </Container>
    </>
  );
}

export default Links;


