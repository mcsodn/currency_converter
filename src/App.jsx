import './App.css';
import HeaderElement from "./components/HeaderElement/HeaderElement";
import CurrencyConverter from "./components/CurrencyConverter/CurrencyConverter";

function App() {
  return (
    <>
      <HeaderElement headerText='Конвертер валют' />
      <CurrencyConverter />
      <p>На основании данных <a href="https://www.exchangerate-api.com/" target='_blank'>https://www.exchangerate-api.com/</a></p>
    </>
  )
}

export default App
