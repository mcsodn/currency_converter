import './CurrencyConverter.css';
import CurrencyBlock from "../CurrencyBlock/CurrencyBlock";
import useFetch from '../../getAPI';
import { useState } from "react";

// Компонент конвертера:
// 2 блока валюты и кнопка между ними
const CurrencyConverter = () => {
    // Стейт выбранной валюты
    const [currencyPair,setCurrencyPair] = useState({
        mainCurrency: 'USD', 
        secCurrency: 'RUB'
    });
    // Стейт введенного значения для каждой валюты
    const [currencyValues,setCurrencyValues] = useState({
        mainCurrencyValue: '0', 
        secCurrencyValue: '0'
    });

    // Данные из апи
    const dataAPI = useFetch(currencyPair.mainCurrency);
    
    // Функция для установки новой валюты в селекте
    const setCurrency = event => {
        // Проверяем в каком из селектов изменено значение
        if (event.target.id === 'main-currency__select') {
            // Устанавливаем новое значение основной (левый) валюты
            setCurrencyPair({
                ...currencyPair,
                mainCurrency: event.target.value // берем новое значение из селекта
            });

            // После выбора валюты нужно пересчитать значение во втором поле
            // 1. получим значение из второго селекта
            const newCurrency = document.getElementById('main-currency__select').value;
            
            // 2. установим новое значение для второго селекта
            setCurrencyValues({
                ...currencyValues,
                // значение в dataAPI остается для предыдущей валюты
                // но не проблема, вычислим по коэф
                secCurrencyValue: ((currencyValues.mainCurrencyValue * dataAPI.data.conversion_rates[currencyPair.secCurrency]) / dataAPI.data.conversion_rates[newCurrency]).toFixed(2)
            });
        } else {
            setCurrencyPair({
                ...currencyPair,
                secCurrency: event.target.value
            });
            // при установке валюты во втором (правом) селекте не нужно переполучать данные
            // поэтому переустановка и пересчет происходят без ошибок
            setCurrencyValues({
                ...currencyValues,
                secCurrencyValue: (currencyValues.mainCurrencyValue * dataAPI.data.conversion_rates[event.target.value]).toFixed(2)
            });
        }
    }

    // функция для обработки ввода значений в инпутах
    const setCurrencyValue = event => {
        setCurrencyValues(
            event.target.id === 'main-currency__input' ? {
                mainCurrencyValue: event.target.value,
                secCurrencyValue: (+event.target.value * dataAPI.data.conversion_rates[currencyPair.secCurrency]).toFixed(2)
            } : {
                mainCurrencyValue: (+event.target.value / dataAPI.data.conversion_rates[currencyPair.secCurrency]).toFixed(2),
                secCurrencyValue: event.target.value
            }
        )
    }

    // функция для кнопки смены местами
    const swapCurrency = () => {
        setCurrencyPair({
            mainCurrency: currencyPair.secCurrency,
            secCurrency: currencyPair.mainCurrency
        });
        setCurrencyValues({
            ...currencyValues,
            secCurrencyValue: (currencyValues.mainCurrencyValue / dataAPI.data.conversion_rates[currencyPair.secCurrency]).toFixed(2)
        });
    }

    if (dataAPI.loading) {
        return <div className='currency-converter_block'>
            <p>Загрузка...</p>
        </div>
    } else {
        // собираем пропс для компонента
        const CBProps = {
            ...currencyPair,
            ...currencyValues,
            ...dataAPI,
            onChangeCurrency: setCurrency,
            onChangeCurrencyValue: setCurrencyValue
        };

        return <div className='currency-converter_block'>
            <CurrencyBlock isMainCurrency={true} {...CBProps} />
            <button type="button" onClick={swapCurrency}></button>
            <CurrencyBlock {...CBProps} />
        </div>
    }
}

export default CurrencyConverter;