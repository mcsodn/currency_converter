import { useEffect, useState } from 'react';

function useFetch(currency) {
    const API_URL = 'https://v6.exchangerate-api.com/v6/e5cfbf2929bb755088a14a40/latest/';

    const [data,setData] = useState(null);
    const [loading,setLoading] = useState(true);
    const [error,setError] = useState(null);

    useEffect(() => {
    // Объявляем асинхронную функцию внутри useEffect
    async function fetchData() {
      try {
        // Выполняем API-запрос на запрошенную валюту
        const response = await fetch(API_URL+currency);
        if (!response.ok) {
          throw new Error('Ошибка загрузки данных');
        }
        // Преобразуем ответ в формат JSON
        const data = await response.json();
        // Обновляем состояние с полученными данными
        setData(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }

    // Вызываем асинхронную функцию
    fetchData();
  },[currency]);

  return { data, loading, error };
}

export default useFetch;