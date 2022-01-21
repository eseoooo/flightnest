const formatPrice = (price, currencyObj) => {
	//get currency object with rules

	const symbol = currencyObj.Symbol;
	const seperator = currencyObj.ThousandsSeparator;
	const symbolOnLeft = currencyObj.SymbolOnLeft;
	const spaceBetweenAmountAndSymbol = currencyObj.SpaceBetweenAmountAndSymbol;

	let formattedPrice = price + "";

	//place thousand sperator

	formattedPrice = formattedPrice
		.split("")
		.reverse()
		.map((num, index) => {
			if ((index + 1) % 3 === 0) return `${seperator}${num}`;
			return num;
		})
		.reverse()
		.join("");

	if (formattedPrice[0] === seperator) {
		formattedPrice = formattedPrice.replace(seperator, "")
		
	}

	if (symbolOnLeft && spaceBetweenAmountAndSymbol) {
		formattedPrice = `${symbol} ${formattedPrice}`;
	}

	if (symbolOnLeft && !spaceBetweenAmountAndSymbol) {
		formattedPrice = `${symbol}${formattedPrice}`;
	}

	if (!symbolOnLeft && spaceBetweenAmountAndSymbol) {
		formattedPrice = `${formattedPrice} ${symbol}`;
	}

	if (!symbolOnLeft && !spaceBetweenAmountAndSymbol) {
		formattedPrice = `${formattedPrice}${symbol}`;
	}

	return formattedPrice;
};

export default formatPrice;
