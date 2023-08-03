import userData from "../AccountHolderCard/data";

import Accordion from 'react-bootstrap/Accordion';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';

import { useState } from 'react';

function TotalValue() {
    console.log(userData)

    const [totalValue, setTotalValue] = useState(0);
    const [USD_value, setUSD_value] = useState(500);
    const [EUR_value, setEUR_value] = useState(800);
    const [CHF_value, setCHF_value] = useState(1000);

    console.log('dollars value', USD_value)

    const handleTotalValue = () => {

        if(userData.currency === 'USD') {
            setUSD_value(userData.amount)
        }
        
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



    console.log('total value?', handleTotalValue)

    const handleCurrencyChange = async() => {
        // this will chance the  totalValue of wallet from one currency to the next 
          }

    const [radioValue, setRadioValue] = useState('1');

  const radios = [
    { name: 'USD', value: '1' },
    { name: 'EUROS', value: '2' },
    { name: 'CHF', value: '3' },
  ];

return (
<>

   <Accordion.Header>Total Value: {totalValue} in units</Accordion.Header>
        <Accordion.Body>
          <ButtonGroup>
            {radios.map((radio, idx) => (
                <ToggleButton
                key={idx}
                id={`radio-${idx}`}
                className='radio-btns'
                type="radio"
                variant={idx % 2 ? 'outline-success' : 'outline-info'}
                name="radio"
                value={radio.value}
                checked={radioValue === radio.value}
                onChange={(e) => setRadioValue(e.currentTarget.value)}
                onClick={handleCurrencyChange}
              >
                {radio.name}
              </ToggleButton>
            ))}
          </ButtonGroup>
        </Accordion.Body>
            </>
)
}

export default TotalValue;