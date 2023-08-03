import Accordion from 'react-bootstrap/Accordion';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import { useState } from 'react';


import TotalValue from '../Actions/totalValue';
import userData from "./data";


function AccountHolderCard() {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);



  const handleAddCurrency = async () => {

  }

  const handleSendCurrency = async () => {
    // this will open a modal saying we don't have function yet
  }

  const handleConvertCurrency = async () => {
    // this will open a modal with a simple currency conversion table and then will deduct currency from total and add relevant currency to appropriate total.
  }





  console.log(userData)


  return (
    <Accordion defaultActiveKey="0" flush>
      <Accordion.Item eventKey="0">

        <TotalValue />

      </Accordion.Item>
      <Container>
        {userData.map((props) => (

          <Row>
            <Accordion.Item eventKey={props.id}>
              <Accordion.Header>
                <Col >
                  <h5 className='currency-value'>{props.amount}{props.currency}</h5>
                  <p>{props.currencyName}</p>
                </Col>
                <Col>
                  <p className='details'>expand for details</p>
                </Col>
              </Accordion.Header>

              <Accordion.Body className='accordian-body'>
                <Container>
                  <Row>
                    <Col className='account-info-left'>
                      <p>Account Name: {props.user} </p>
                      <p>Bank Code: {props.bankCode} </p>
                      <p>Address: {props.address}</p>
                    </Col>
                    <Col className='account-info-right'>
                      <p>Account Number: {props.accountNumber} </p>
                      <p>Wire Transfer Number: {props.wireTransfer} </p>
                      <p>Routing Number: {props.routingNumber}</p>
                      <a href='/faq'>Learn More</a>
                    </Col>
                  </Row>
                </Container>
                <Button variant="info" onClick={handleShow}> ADD {props.currency}</Button>{' '}
                <Modal show={show} onHide={handleClose} animation={false}>
                  <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                      Close
                    </Button>
                    <Button variant="primary" onClick={handleAddCurrency}>
                      Save Changes
                    </Button>
                  </Modal.Footer>
                </Modal>
                <Button id='send-btn' variant="info" onClick={handleShow}>SEND {props.currency}</Button>{' '}
                <Modal show={show} onHide={handleClose} animation={false}>
                  <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                      Close
                    </Button>
                    <Button variant="primary" onClick={handleSendCurrency}>
                      Save Changes
                    </Button>
                  </Modal.Footer>
                </Modal>
                <Button id='convert-btn' variant="info" onClick={handleShow}>CONVERT {props.currency}</Button>{' '}
                <Modal show={show} onHide={handleClose} animation={false}>
                  <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                      Close
                    </Button>
                    <Button variant="primary" onClick={handleConvertCurrency}>
                      Save Changes
                    </Button>
                  </Modal.Footer>
                </Modal>
                <Button id='more-btn' variant="info" href='/faq'>MORE</Button>{' '}

              </Accordion.Body>
            </Accordion.Item>
          </Row>
        ))}
      </Container>
    </Accordion>
  );


}

export default AccountHolderCard;



