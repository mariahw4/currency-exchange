import Accordion from 'react-bootstrap/Accordion';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';


import { useState } from 'react';


import TotalValue from '../Actions/totalValue';
import userData from "./data";


function AccountHolderCard() {

  const [showAddUSD, setShowAddUSD] = useState(false);
  const [showAddEUR, setShowAddEUR] = useState(false);
  const [showAddCHF, setShowAddCHF] = useState(false);
  const [showSend, setShowSend] = useState(false);
  const [showConvert, setShowConvert] = useState(false);


  const handleCloseAddUSD = () => setShowAddUSD(false);
  const handleCloseAddEUR = () => setShowAddEUR(false);
  const handleCloseAddCHF = () => setShowAddCHF(false);
  const handleCloseSend = () => setShowSend(false);
  const handleCloseConvert = () => setShowConvert(false);
  const handleShowAddUSD = () => setShowAddUSD(true);
  const handleShowAddEUR = () => setShowAddEUR(true);
  const handleShowAddCHF = () => setShowAddCHF(true);
  const handleShowSend = () => setShowSend(true);
  const handleShowConvert = () => setShowConvert(true);

  const [AmountUSD, setAmountUSD] = useState(0);
  const [AmountEUR, setAmountEUR] = useState(0);
  const [AmountCHF, setAmountCHF] = useState(0);

  const [USD_value, setUSD_value] = useState(500);
  const [EUR_value, setEUR_value] = useState(800);
  const [CHF_value, setCHF_value] = useState(1000);


  const handleAddUSDCurrency = (e) => {
    e.preventDefault()

    console.log('amount', AmountUSD)
    console.log('usd', USD_value)

      setUSD_value(Number(USD_value) + Number(AmountUSD))
   
  }

  const handleAddEURCurrency = async (e) => {
    e.preventDefault()

    setEUR_value(Number(EUR_value) + Number(AmountEUR))
   

}
const handleAddCHFCurrency = async (e) => {
  e.preventDefault()

  setCHF_value(Number(CHF_value) + Number(AmountCHF))


}

  // const handleSendCurrency = async () => {
  //   // this will open a modal saying we don't have function yet
  // }

  const handleConvertCurrency = async () => {
    // this will open a modal with a simple currency conversion table and then will deduct currency from total and add relevant currency to appropriate total.
  }





  // console.log(userData)


  return (
    <>
   
   
    <Accordion defaultActiveKey="0" flush>
      <Accordion.Item eventKey="0">

        <TotalValue />

      </Accordion.Item>
      <Container>
    
          <Row>
            <Accordion.Item eventKey='1'>
              <Accordion.Header>
                <Col >
                  <h5 className='currency-value'>{USD_value} USD</h5>
                  <p>US Dollars</p>
                </Col>
                <Col>
                  <p className='details'>expand for details</p>
                </Col>
              </Accordion.Header>

              <Accordion.Body className='accordian-body'>
                <Container>
                  <Row>
                    <Col className='account-info-left'>
                      <p>Account Name: {userData[0].user} </p>
                      <p>Bank Code: {userData[0].bankCode} </p>
                      <p>Address: {userData[0].address}</p>
                    </Col>
                    <Col className='account-info-right'>
                      <p>Account Number: {userData[0].accountNumber} </p>
                      <p>Wire Transfer Number: {userData[0].wireTransfer} </p>
                      <p>Routing Number: {userData[0].routingNumber}</p>
                      <a href='/faq'>Learn More</a>
                    </Col>
                  </Row>
                </Container>
                <Button id='add-btn' variant="info" onClick={handleShowAddUSD}> ADD USD</Button>{' '}
                <Modal show={showAddUSD} onHide={handleCloseAddUSD} animation={false}>
                  <Modal.Header closeButton>
                    <Modal.Title>Add Currency in USD</Modal.Title>
                  </Modal.Header>
                    <Form.Control
                      type='number'
                      placeholder={AmountUSD} 
                      onChange={(e) => setAmountUSD(e.currentTarget.value)}
                       />
                  <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseAddUSD}>
                      Close
                    </Button>
                    <Button variant="primary" onClick={handleAddUSDCurrency}>
                      Add USD
                    </Button>
                  </Modal.Footer>
                </Modal>
                <Button id='send-btn' variant="info" onClick={handleShowSend}>SEND USD</Button>{' '}
                <Modal show={showSend} onHide={handleCloseSend} animation={false}>
                  <Modal.Header closeButton>
                    <Modal.Title>Send Currency</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>Sorry, this action is not yet supported</Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseSend}>
                      Close
                    </Button>
                    <Button variant="primary" onClick={handleCloseSend}>
                      Send Currency
                    </Button>
                  </Modal.Footer>
                </Modal>
                <Button id='convert-btn' variant="info" onClick={handleShowConvert}>CONVERT USD</Button>{' '}
                <Modal show={showConvert} onHide={handleCloseConvert} animation={false}>
                  <Modal.Header closeButton>
                    <Modal.Title>Convert Currency</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>Lets Convert some Currency!</Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseConvert}>
                      Close
                    </Button>
                    <Button variant="primary" onClick={handleConvertCurrency}>
                      Convert Currency
                    </Button>
                  </Modal.Footer>
                </Modal>
                <Button id='more-btn' variant="info" href='/faq'>MORE</Button>{' '}

              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey='2'>
              <Accordion.Header>
                <Col >
                  <h5 className='currency-value'>{EUR_value} EUR</h5>
                  <p>Euros</p>
                </Col>
                <Col>
                  <p className='details'>expand for details</p>
                </Col>
              </Accordion.Header>

              <Accordion.Body className='accordian-body'>
                <Container>
                  <Row>
                    <Col className='account-info-left'>
                      <p>Account Name: {userData[1].user} </p>
                      <p>Bank Code: {userData[1].bankCode} </p>
                      <p>Address: {userData[1].address}</p>
                    </Col>
                    <Col className='account-info-right'>
                      <p>Account Number: {userData[1].accountNumber} </p>
                      <p>Wire Transfer Number: {userData[1].wireTransfer} </p>
                      <p>Routing Number: {userData[1].routingNumber}</p>
                      <a href='/faq'>Learn More</a>
                    </Col>
                  </Row>
                </Container>
                <Button id='add-btn' variant="info" onClick={handleShowAddEUR}> ADD EUR</Button>{' '}
                <Modal show={showAddEUR} onHide={handleCloseAddEUR} animation={false}>
                  <Modal.Header closeButton>
                    <Modal.Title>Add Currency in Euros</Modal.Title>
                  </Modal.Header>
                    <Form.Control
                      type='number'
                      placeholder={AmountEUR}
                      onChange={(e) => setAmountEUR(e.currentTarget.value)}
                       />
                  <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseAddEUR}>
                      Close
                    </Button>
                    <Button variant="primary" onClick={handleAddEURCurrency}>
                      Add Euros
                    </Button>
                  </Modal.Footer>
                </Modal>
                <Button id='send-btn' variant="info" onClick={handleShowSend}>SEND EUR</Button>{' '}
                <Modal show={showSend} onHide={handleCloseSend} animation={false}>
                  <Modal.Header closeButton>
                    <Modal.Title>Send Euros</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>Sorry, this action is not yet supported</Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseSend}>
                      Close
                    </Button>
                    <Button variant="primary" onClick={handleCloseSend}>
                      Send Currency
                    </Button>
                  </Modal.Footer>
                </Modal>
                <Button id='convert-btn' variant="info" onClick={handleShowConvert}>CONVERT EUR</Button>{' '}
                <Modal show={showConvert} onHide={handleCloseConvert} animation={false}>
                  <Modal.Header closeButton>
                    <Modal.Title>Convert Currency</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>Lets Convert some Currency!</Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseConvert}>
                      Close
                    </Button>
                    <Button variant="primary" onClick={handleConvertCurrency}>
                      Convert Currency
                    </Button>
                  </Modal.Footer>
                </Modal>
                <Button id='more-btn' variant="info" href='/faq'>MORE</Button>{' '}

              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey='3'>
              <Accordion.Header>
                <Col >
                  <h5 className='currency-value'>{CHF_value} CHF</h5>
                  <p>Swiss Francs</p>
                </Col>
                <Col>
                  <p className='details'>expand for details</p>
                </Col>
              </Accordion.Header>

              <Accordion.Body className='accordian-body'>
                <Container>
                  <Row>
                    <Col className='account-info-left'>
                      <p>Account Name: {userData[2].user} </p>
                      <p>Bank Code: {userData[2].bankCode} </p>
                      <p>Address: {userData[2].address}</p>
                    </Col>
                    <Col className='account-info-right'>
                      <p>Account Number: {userData[2].accountNumber} </p>
                      <p>Wire Transfer Number: {userData[2].wireTransfer} </p>
                      <p>Routing Number: {userData[2].routingNumber}</p>
                      <a href='/faq'>Learn More</a>
                    </Col>
                  </Row>
                </Container>
                <Button id='add-btn' variant="info" onClick={handleShowAddCHF}> ADD CHF</Button>{' '}
                <Modal show={showAddCHF} onHide={handleCloseAddCHF} animation={false}>
                  <Modal.Header closeButton>
                    <Modal.Title>Add Currency in CHF</Modal.Title>
                  </Modal.Header>
                    <Form.Control
                      type='number'
                      placeholder={AmountCHF}
                      onChange={(e) => setAmountCHF(e.currentTarget.value)}
                       />
                  <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseAddCHF}>
                      Close
                    </Button>
                    <Button variant="primary" onClick={handleAddCHFCurrency}>
                      Add CHF
                    </Button>
                  </Modal.Footer>
                </Modal>
                <Button id='send-btn' variant="info" onClick={handleShowSend}>SEND CHF</Button>{' '}
                <Modal show={showSend} onHide={handleCloseSend} animation={false}>
                  <Modal.Header closeButton>
                    <Modal.Title>Send Currency</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>Sorry, this action is not yet supported</Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseSend}>
                      Close
                    </Button>
                    <Button variant="primary" onClick={handleCloseSend}>
                      Send Currency
                    </Button>
                  </Modal.Footer>
                </Modal>
                <Button id='convert-btn' variant="info" onClick={handleShowConvert}>CONVERT CHF</Button>{' '}
                <Modal show={showConvert} onHide={handleCloseConvert} animation={false}>
                  <Modal.Header closeButton>
                    <Modal.Title>Convert Currency</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>Lets Convert some Currency!</Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseConvert}>
                      Close
                    </Button>
                    <Button variant="primary" onClick={handleConvertCurrency}>
                      Convert Currency
                    </Button>
                  </Modal.Footer>
                </Modal>
                <Button id='more-btn' variant="info" href='/faq'>MORE</Button>{' '}

              </Accordion.Body>
            </Accordion.Item>
          </Row>
      </Container>
    </Accordion>

    </>

  );


}

export default AccountHolderCard;


