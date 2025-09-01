import './App.css';
import HeaderElement from "./components/HeaderElement/HeaderElement";
import CurrencyConverter from "./components/CurrencyConverter/CurrencyConverter";
import useFetch from '../src/getAPI';

function App() {
  const dataAPI = useFetch('USD');
  return (
    <>
      <HeaderElement headerText='Конвертер валют' />
      <CurrencyConverter dataAPI={dataAPI}/>
      <p>На основании данных <a href="https://www.exchangerate-api.com/" target='_blank'>https://www.exchangerate-api.com/</a></p>
    </>
  )
}

export default App
