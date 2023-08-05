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
            <LinkContainer to='/currency-exchange/recipients'>

          <Navbar.Brand >Recipients</Navbar.Brand>
            </LinkContainer>
        </Container>
      </Navbar>
      <br />
      <Navbar className="bg-body-tertiary">
        <Container>
        <LinkContainer to='/currency-exchange/invitation'>
          <Navbar.Brand >Invite a Friend</Navbar.Brand>
          </LinkContainer>
        </Container>
      </Navbar>
      <hr />
      <br />
      <Navbar className="bg-body-tertiary">
        <Container>
        <LinkContainer to='/currency-exchange/about'>
          <Navbar.Brand >About</Navbar.Brand>
          </LinkContainer>
        </Container>
      </Navbar>
      <br />
      <Navbar className="bg-body-tertiary">
        <Container>
        <LinkContainer to='/currency-exchange/faq'>
          <Navbar.Brand >FAQ</Navbar.Brand>
          </LinkContainer>
        </Container>
      </Navbar>
      <br />
      <Navbar className="bg-body-tertiary">
        <Container>
            <LinkContainer to='/currency-exchange/legal'>

          <Navbar.Brand>Legal</Navbar.Brand>
            </LinkContainer>
        </Container>
      </Navbar>
    </Container>
    </>
  );
}

export default Links;


