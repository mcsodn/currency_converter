import './App.css';
import HeaderElement from "./components/HeaderElement/HeaderElement";
import CurrencyConverter from "./components/CurrencyConverter/CurrencyConverter";

function App() {
  return (
    <>
      <HeaderElement headerText='Конвертер валют' />
      <CurrencyConverter />
      <p>На основании данных https://www.exchangerate-api.com/</p>
    </>
  )
}

export default App
