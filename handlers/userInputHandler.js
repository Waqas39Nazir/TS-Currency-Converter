import inquirer from "inquirer";
import gradient from "gradient-string";
import { currencies } from "../utils/currenciesAndExchangeRates.js";
import currencyConverter from "./currencyConverter.js";
const gradientConsole = (message) => {
    return gradient.pastel.multiline(message);
};
const userInputHandler = () => {
    inquirer
        .prompt([
        {
            name: "amount",
            message: gradientConsole("Please enter an amount"),
            type: "input",
            choices: currencies,
        },
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
        //   console.log("Response:", response);
        currencyConverter(response.amount, response.currentCurrency, response.targetCurrency);
    })
        .catch((error) => {
        console.log("Error:", error);
    });
};
export default userInputHandler;
