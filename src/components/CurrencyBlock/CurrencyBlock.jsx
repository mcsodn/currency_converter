import './CurrencyBlock.css';
import { useState } from "react";
import convertDotToComma from '../../helper';

const CurrencyBlock = (props) => {
    const [currencyValue, setCurrencyValue] = useState(() => {
        return props.isMainCurrency ? '1' : props.data.conversion_rates[props.sec];
    });

    return <div className='currency-block'>
        <input 
            type="text"
            value={convertDotToComma(currencyValue)}
            onChange={(e) => setCurrencyValue(e.target.value)}
        /> 
        <select value={!props.isMainCurrency && props.sec}>            
            {Object.keys(props.data.conversion_rates).map(value => <option key={value}>{value}</option>)}
        </select>
        <p>{
            props.isMainCurrency ? 
            `1 ${props.main} = ${convertDotToComma(props.data.conversion_rates[props.sec])} ${props.sec}` : 
            `1 ${props.sec} = ${convertDotToComma((1 / currencyValue).toFixed(4))} ${props.main}`
        }</p>
    </div>
}

export default CurrencyBlock;