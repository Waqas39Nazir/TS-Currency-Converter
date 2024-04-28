import gradient from "gradient-string";
import figlet from "figlet";
import { exchangeRates } from "../utils/currenciesAndExchangeRates.js";
const gradientConsole = (message) => {
    return gradient.pastel.multiline(message);
};
const currencyConverter = (amount, currentCurrency, targetCurrency) => {
    if (currentCurrency === targetCurrency) {
        console.log(gradientConsole("Target currency and current current can not be the same"));
    }
    else {
        const userInput = parseFloat(amount.toString()).toFixed(2);
        const currCA = currentCurrency.split(" ");
        const currTB = targetCurrency.split(" ");
        let exchangeRafeFromUSDToTargetCurr = 0;
        let exchangeRafeFromUSDToCurrentCurr = 0;
        exchangeRates.USD.map((obj) => {
            if (obj.key === currCA[0]) {
                exchangeRafeFromUSDToCurrentCurr = obj.value;
            }
            else if (obj.key === currTB[0]) {
                exchangeRafeFromUSDToTargetCurr = obj.value;
            }
        });
        const exchangeRate = (exchangeRafeFromUSDToTargetCurr / exchangeRafeFromUSDToCurrentCurr).toFixed(2);
        const result = exchangeRate * userInput;
        const message = `Result: ${result}`;
        figlet(message, (err, data) => {
            console.log(gradient.pastel.multiline(data));
        });
    }
};
export default currencyConverter;
