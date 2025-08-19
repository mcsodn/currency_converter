import './CurrencyConverter.css';
import CurrencyBlock from "../CurrencyBlock/CurrencyBlock";
import useFetch from '../../getAPI'
import { useState } from "react";

const CurrencyConverter = () => {
    const [currencyPair,setCurrencyPair] = useState({main: 'USD', sec: 'RUB'});
    const dataAPI = useFetch(currencyPair.main);

    if (dataAPI.loading) {
        return <div className='currency-converter_block'>
            <p>Загрузка...</p>
        </div>
    } else {
        const CBProps = {
            ...currencyPair,
            ...dataAPI
        };

        return <div className='currency-converter_block'>
            <CurrencyBlock isMainCurrency={true} {...CBProps}/>
            <button type="button"></button>
            <CurrencyBlock {...CBProps} />
        </div>
    }
}

export default CurrencyConverter;