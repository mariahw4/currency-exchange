import Accordion from 'react-bootstrap/Accordion';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


import userData from "./data";

function AccountHolderCard() {
    console.log(userData)
    return (
        <Accordion defaultActiveKey="0" flush>
          <Accordion.Item eventKey="0">
            <Accordion.Header>Total Value: get value here</Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
              minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
              pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
              culpa qui officia deserunt mollit anim id est laborum.
            </Accordion.Body>
          </Accordion.Item>
          <Container>
          {userData.map((props) => (

          <Row>
          <Accordion.Item eventKey={props.id}>
            <Accordion.Header>
            <Col >
                <h5 className='currency-value'>{props.amount}{props.currency}</h5>
              </Col>
              <Col>
                <p className='details'>expand for details</p>
            </Col>
            </Accordion.Header>

            <Accordion.Body>
            
              <p>{props.user}</p>
             
    
            </Accordion.Body>
          </Accordion.Item>
          </Row>
          ))}
          </Container>
        </Accordion>
      );


}

export default AccountHolderCard;



