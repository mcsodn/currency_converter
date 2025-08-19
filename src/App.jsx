import './App.css';
import HeaderElement from "./components/HeaderElement/HeaderElement";
import CurrencyConverter from "./components/CurrencyConverter/CurrencyConverter";
import useFetch from './getAPI/'

function App() {
  const dataAPI = useFetch('RUB');

  return (
    <>
      <HeaderElement headerText='Конвертер валют' />
      <CurrencyConverter {...dataAPI}/>
      <p>На основании данных https://www.exchangerate-api.com/</p>
    </>
  )
}

export default App
