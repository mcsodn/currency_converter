import './CurrencyConverter.css';
import CurrencyBlock from "../CurrencyBlock/CurrencyBlock";
import useFetch from '../../getAPI';
import { useState } from "react";

const CurrencyConverter = () => {
    const [currencyPair,setCurrencyPair] = useState({mainCurrency: 'USD', secCurrency: 'RUB'});
    const [currencyValues,setCurrencyValues] = useState({mainCurrencyValue: '0', secCurrencyValue: '0'});
    const dataAPI = useFetch(currencyPair.mainCurrency);
    
    const setCurrency = event => {        
        setCurrencyPair(
            event.target.id === 'main-currency' ? {
                ...currencyPair,
                mainCurrency: event.target.value
            } : {
                ...currencyPair,
                secCurrency: event.target.value
            }
        );

        setCurrencyValues(
            event.target.id === 'main-currency' ? {
                ...currencyValues,
                secCurrencyValue: (currencyValues.mainCurrencyValue * dataAPI.data.conversion_rates[currencyPair.secCurrency]).toFixed(4)
            } : {
                ...currencyValues,
                mainCurrencyValue: (currencyValues.secCurrencyValue / dataAPI.data.conversion_rates[currencyPair.secCurrency]).toFixed(4)
            }
        )
    }

    const setCurrencyValue = event => {
        setCurrencyValues(
            event.target.id === 'main-currency' ? {
                mainCurrencyValue: event.target.value,
                secCurrencyValue: (+event.target.value * dataAPI.data.conversion_rates[currencyPair.secCurrency]).toFixed(4)
            } : {
                mainCurrencyValue: (+event.target.value / dataAPI.data.conversion_rates[currencyPair.secCurrency]).toFixed(4),
                secCurrencyValue: event.target.value
            }
        )
    }

    if (dataAPI.loading) {
        return <div className='currency-converter_block'>
            <p>Загрузка...</p>
        </div>
    } else {        
        const CBProps = {
            ...currencyPair,
            ...currencyValues,
            ...dataAPI,
            onChangeCurrency: setCurrency,
            onChangeCurrencyValue: setCurrencyValue
        };

        return <div className='currency-converter_block'>
            <CurrencyBlock isMainCurrency={true} {...CBProps} />
            <button type="button"></button>
            <CurrencyBlock {...CBProps} />
        </div>
    }
}

export default CurrencyConverter;