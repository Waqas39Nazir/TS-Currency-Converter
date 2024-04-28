//These are exchange rates from dollar to other currencies.
const exchangeRates = {
  USD: [
    { key: "PKR", value: 279.08 }, // Pakistani Rupee
    { key: "AFN", value: 71.99 }, // Afghan Afghani
    { key: "CNY", value: 6.44 }, // Chinese Yuan
    { key: "IRR", value: 42105.26 }, // Iranian Rial
    { key: "IQD", value: 1465.16 }, // Iraqi Dinar
    { key: "SAR", value: 3.75 }, // Saudi Riyal
    { key: "AED", value: 3.67 }, // United Arab Emirates Dirham],
  ],
};

const currencies = [
  "PKR (Pakistani Rupee)", // Pakistani Rupee
  "AFN (Afghan Afghani)", // Afghan Afghani
  "CNY (Chinese Yuan)", // Chinese Yuan
  "IRR (Iranian Rial)", // Iranian Rial
  "IQD (Iraqi Dinar)", // Iraqi Dinar
  "SAR (Saudi Riyal)", // Saudi Riyal
  "AED (United Arab Emirates Dirham)", // United Arab Emirates Dirham
];

// export default { exchangeRates, currencies };
export { exchangeRates, currencies };
