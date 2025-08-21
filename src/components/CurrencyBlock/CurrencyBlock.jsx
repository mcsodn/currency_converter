import './CurrencyBlock.css';
import { useState,useEffect } from "react";
import formatDigitValue from '../../helper';

const CurrencyBlock = (props) => {
    const [currencyValue, setCurrencyValue] = useState('0');
    
    useEffect(() => {
        setCurrencyValue(props.isMainCurrency ? props.mainCurrencyValue : props.secCurrencyValue)
    },[props])

    return <div className='currency-block'>
        <input 
            type={'number'}
            step={'0.01'}
            min={'0'}
            id={props.isMainCurrency ? 'main-currency' : 'sec-currency'}
            value={formatDigitValue(currencyValue)}
            onChange={(e) => {
                setCurrencyValue(e.target.value);
                props.onChangeCurrencyValue(e);
            }}
        /> 
        <select 
            id={props.isMainCurrency ? 'main-currency' : 'sec-currency'} 
            value={!props.isMainCurrency && props.secCurrency} 
            onChange={(e) => {
                props.onChangeCurrency(e);
            }}
        >
            {Object.keys(props.data.conversion_rates).map(value => <option key={value}>{value}</option>)}
        </select>
        <p>{
            props.isMainCurrency ? 
            `1 ${props.mainCurrency} = ${formatDigitValue(props.data.conversion_rates[props.secCurrency])} ${props.secCurrency}` : 
            `1 ${props.secCurrency} = ${formatDigitValue((1 / props.data.conversion_rates[props.secCurrency]).toFixed(4))} ${props.mainCurrency}`
        }</p>
    </div>
}

export default CurrencyBlock;