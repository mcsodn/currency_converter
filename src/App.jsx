import './App.css';
import HeaderElement from "./components/HeaderElement/HeaderElement";
import CurrencyConverter from "./components/CurrencyConverter/CurrencyConverter";
import { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState(null);
  useEffect(() => {
    // Объявляем асинхронную функцию внутри useEffect
    async function fetchData() {
      try {
        // Выполняем API-запрос
        const response = await fetch('https://v6.exchangerate-api.com/v6/e5cfbf2929bb755088a14a40/latest/USD');
        // Преобразуем ответ в формат JSON
        const data = await response.json();
        // Обновляем состояние с полученными данными
        setData(data);
      } catch (error) {
        console.error('Ошибка загрузки данных:', error);
      }
    }

    // Вызываем асинхронную функцию
    fetchData();
  },[]);

  console.log(data);
  

  return (
    <>
      <HeaderElement headerText='Конвертер валют' />
      <CurrencyConverter />
      <p>На основании данных https://www.exchangerate-api.com/</p>
    </>
  )
}

export default App
