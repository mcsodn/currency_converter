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
            name="" 
            id="" 
            value={convertDotToComma(currencyValue)}
            onChange={(e) => setCurrencyValue(e.target.value)}
        /> 
        <select name="" id="" >
            
            {Object.keys(props.data.conversion_rates).map(value => <option key={value} selected={!props.isMainCurrency && (value === props.sec) ? true : false}>{value}</option>)}
            {/* todo: добавить пропс с базовой валютой с которой рендерится блок */}
            {/* todo: к ней прикрутить базовую сумму и курс */}
        </select>
        <p>{
            props.isMainCurrency ? 
            `1 ${props.main} = ${convertDotToComma(props.data.conversion_rates[props.sec])} ${props.sec}` : 
            `1 ${props.sec} = ${convertDotToComma((1 / currencyValue).toFixed(4))} ${props.main}`
        }</p>
    </div>
}

export default CurrencyBlock;