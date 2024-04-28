const currencyConverter = (currentCurrency, targetCurrency) => {
    if (currentCurrency === targetCurrency) {
        console.log("Target currency and current current can not be the same");
    }
    else {
        const currA = currentCurrency.split(" ");
        const currB = targetCurrency.split(" ");
        console.log("CurrA:", currA);
        console.log("CurrB:", currB);
    }
};
export default currencyConverter;
