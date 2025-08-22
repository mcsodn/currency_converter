const formatDigitValue = data => {
    const regexpNonDigits = /[^0-9.]/g;
    const regexpMultiComma = /[.,]+/g;
    return data.toString().replace(regexpNonDigits,'').replace(regexpMultiComma,'.');
}

export default formatDigitValue;