import './App.css';
import HeaderElement from "./components/HeaderElement/HeaderElement";

function App() {

  return (
    <>
      <HeaderElement headerText='Конвертер валют' />
      <div className="card">
        <p>Converter block</p>
      </div>
      <p>На основании данных https://www.exchangerate-api.com/</p>
    </>
  )
}

export default App
