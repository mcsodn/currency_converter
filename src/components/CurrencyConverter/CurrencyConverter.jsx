import './CurrencyConverter.css';
import CurrencyBlock from "../CurrencyBlock/CurrencyBlock";

const CurrencyConverter = () => {
    return <div className='currency-converter_block'>
        <CurrencyBlock />
        <button type="button"></button>
        <CurrencyBlock />
    </div>
}

export default CurrencyConverter;