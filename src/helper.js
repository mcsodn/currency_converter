// Функция распознавания введенного числа
export const formatDigitValue = data => {
    return parseFloat(data);
}

// Функция получения валютного коэф
export const getRange = (dataAPI,above,under) => {
    return dataAPI.data.conversion_rates[above] / dataAPI.data.conversion_rates[under];
}