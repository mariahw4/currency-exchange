import userData from "../AccountHolderCard/data";

import Accordion from 'react-bootstrap/Accordion';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';

import { useState } from 'react';

function TotalValue() {
    // console.log(userData)

    const [checked, setChecked] = useState(false);
   

    const [totalValueUSD, setTotalValueUSD] = useState(0);
    const [totalValueEUR, setTotalValuEUR] = useState(0);
    const [totalValueCHF, setTotalValueCHF] = useState(0);



    // const [USD_value, setUSD_value] = useState(500);
    // const [EUR_value, setEUR_value] = useState(800);
    // const [CHF_value, setCHF_value] = useState(1000);

    // console.log('dollars value', USD_value)

    const handleTotalValueUSD = () => {

    
    }

    const USDtoEUR = amount => {
        let USDtoEUR_rate = .91
        let result = amount * USDtoEUR_rate
        return result
    }
    const EURtoUSD = amount => {
        let EURtoUSD_rate = 1.09
        let result = amount * EURtoUSD_rate
        return result
    }

    const USDtoCHF = amount => {
        let USDtoCHF_rate = .88
        let result = amount * USDtoCHF_rate
        return result
    }

    const CHFtoUSD = amount => {
        let CHFtoUSD_rate = 1.14
        let result = amount * CHFtoUSD_rate
        return result
    }

    const EURtoCHF = amount => {
        let EURtoCHF_rate = .96
        let result = amount * EURtoCHF_rate
        return result
    }

    const CHFtoEUR = amount => {
        let CHFtoEUR_rate = 1.04
        let result = amount * CHFtoEUR_rate
        return result
    }



    // console.log('total value?', handleTotalValueUSD)

    const handleCurrencyChange = async() => {
        // this will chance the  totalValue of wallet from one currency to the next 
          }

       
  ;

return (
  <>
   <Accordion.Header>Total Value: in   </Accordion.Header>
  {/* {userData.map((props, idx) => ( */}
        <Accordion.Body>
          <ButtonGroup aria-label="Basic example">
            <ToggleButton 
              id='USD'
              type="radio"
              variant="secondary"
              checked={checked}
              name='radio'
              // value={props.id}
              onChange={(e) => setChecked(e.currentTarget.checked)}
              onClick={handleCurrencyChange}
              >
                USD
            </ToggleButton>
        </ButtonGroup>
        </Accordion.Body>
        <Accordion.Body>
          <ButtonGroup aria-label="Basic example">
            <ToggleButton 
              id='EUR'
              type="radio"
              variant="secondary"
              checked={checked}
              name='radio'
              // value={props.id}
              onChange={(e) => setChecked(e.currentTarget.checked)}
              onClick={handleCurrencyChange}
              >
                EUR
            </ToggleButton>
        </ButtonGroup>
        </Accordion.Body>
        <Accordion.Body>
          <ButtonGroup aria-label="Basic example">
            <ToggleButton 
              id='CHF'
              type="radio"
              variant="secondary"
              checked={checked}
              name='radio'
              // value={props.id}
              onChange={(e) => setChecked(e.currentTarget.checked)}
              onClick={handleCurrencyChange}
              >
                CHF
            </ToggleButton>
        </ButtonGroup>
        </Accordion.Body>
{/* ))} */}
</>
)
  }
export default TotalValue;