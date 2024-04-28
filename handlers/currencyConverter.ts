import gradient from "gradient-string";
import figlet from "figlet";
import { exchangeRates } from "../utils/currenciesAndExchangeRates.js";

const gradientConsole = (message: string) => {
  return gradient.pastel.multiline(message);
};

const currencyConverter = (
  amount: number,
  currentCurrency: string,
  targetCurrency: string
): void => {
  if (currentCurrency === targetCurrency) {
    console.log(
      gradientConsole("Target currency and current current can not be the same")
    );
  } else {
    const userInput: any = parseFloat(amount.toString()).toFixed(2);
    const currCA = currentCurrency.split(" ");
    const currTB = targetCurrency.split(" ");

    let exchangeRafeFromUSDToTargetCurr = 0;
    let exchangeRafeFromUSDToCurrentCurr = 0;

    exchangeRates.USD.map((obj) => {
      if (obj.key === currCA[0]) {
        exchangeRafeFromUSDToCurrentCurr = obj.value;
      } else if (obj.key === currTB[0]) {
        exchangeRafeFromUSDToTargetCurr = obj.value;
      }
    });

    const exchangeRate: any = (
      exchangeRafeFromUSDToTargetCurr / exchangeRafeFromUSDToCurrentCurr
    ).toFixed(2);

    const result = exchangeRate * userInput;

    const message: any = `Result: ${result}`;

    figlet(message, (err, data) => {
      console.log(gradient.pastel.multiline(data));
    });
  }
};

export default currencyConverter;
