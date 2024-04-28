import inquirer from "inquirer";
import gradient from "gradient-string";
import { currencies } from "../utils/currenciesAndExchangeRates.js";
import currencyConverter from "./currencyConverter.js";

const gradientConsole = (message: string) => {
  return gradient.pastel.multiline(message);
};

const userInputHandler = () => {
  inquirer
    .prompt([
      {
        name: "currentCurrency",
        message: gradientConsole("Please select the current currency"),
        type: "list",
        choices: currencies,
      },
      {
        name: "targetCurrency",
        message: gradientConsole("Please select the target currency"),
        type: "list",
        choices: currencies,
      },
    ])
    .then((response) => {
      console.log("Response:", response);
      currencyConverter(response.currentCurrency, response.targetCurrency);
    })
    .catch((error) => {
      console.log("Error:", error);
    });
};

export default userInputHandler;
