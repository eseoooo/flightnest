import { flightActions } from "./flight-slice.js";
import { notificationActions } from "./notification-slice";
import formatPrice from "../resources/helper/formatPrice";
import racePromise from "../resources/helper/racePromise.js";

export const fetchFlightResults = (searchParams) => {
	return (dispatch) => {
		(async () => {
			dispatch(flightActions.updateResultIsLoading(true));
			dispatch(flightActions.updateIsSearching(true));
			try {
				const country = null || "US";
				const currency = searchParams.currency;
				const numOfTravellers = searchParams.numOfTravellers;
				const whereFrom = searchParams.whereFromIata;
				const whereTo = searchParams.whereToIata;
				const tripType = searchParams.tripType;
				const locale = navigator.language || "en-US";
				const departureDate =
					searchParams.departureDate !== ""
						? searchParams.departureDate
						: "anytime";
				let returnDate;
				if (tripType === "one way") {
					returnDate = "";
				}
				if (tripType !== "one way" && searchParams.returnDate === "") {
					returnDate = "anytime";
				}
				if (tripType !== "one way" && searchParams.returnDate !== "") {
					returnDate = searchParams.returnDate;
				}

				const url = `https://flightnest-c55d8.wn.r.appspot.com/?country=${country}&currency=${currency}&locale=${locale}&whereFrom=${whereFrom}&whereTo=${whereTo}&departureDate=${departureDate}&returnDate=${returnDate}`;

				const response = await Promise.race([
					fetch(url),
					racePromise(10, { ok: false, timeout: true }),
				]);

				if (!response.ok && response.timeout) {
					throw new Error("Your request took too long. Please try again!");
				}

				if (!response.ok) {
					throw new Error(
						"There was a problem getting flight results. Please try again!"
					);
				}

				const data = await response.json();
				const formattedData = JSON.parse(data);
				// console.log(JSON.parse(data));

				// parse data
				const {
					Quotes: quotes,
					Currencies: currencies,
					Places: places,
					Carriers: carriers,
				} = formattedData;

				const flightResults = quotes.map((quote, index) => {
					const price = formatPrice(
						quote.MinPrice * numOfTravellers,
						currencies[0]
					);
					const sortingPrice = quote.MinPrice * numOfTravellers;
					const direct = quote.Direct;
					const quoteDateTime = quote.QuoteDateTime;

					const departureDate = quote.OutboundLeg.DepartureDate;
					const departureWhereFromIata = places.find((place) => {
						return place.PlaceId === quote.OutboundLeg.OriginId;
					}).IataCode;
					const departureWhereToIata = places.find((place) => {
						return place.PlaceId === quote.OutboundLeg.DestinationId;
					}).IataCode;
					const departureCarrier = carriers.find((carrier) => {
						return carrier.CarrierId === quote.OutboundLeg.CarrierIds[0];
					}).Name;

					let returnDate = "";
					let returnCarrier = "";
					let returnWhereToIata = "";
					let returnWhereFromIata = "";

					if (quote.InboundLeg) {
						returnDate = quote.InboundLeg.DepartureDate;

						returnWhereFromIata = places.find((place) => {
							return place.PlaceId === quote.InboundLeg.OriginId;
						}).IataCode;

						returnWhereToIata = places.find((place) => {
							return place.PlaceId === quote.InboundLeg.DestinationId;
						}).IataCode;

						returnCarrier = carriers.find((carrier) => {
							return carrier.CarrierId === quote.InboundLeg.CarrierIds[0];
						}).Name;
					}

					return {
						id: index,
						price,
						sortingPrice,
						direct,
						quoteDateTime,
						isBookmarked: false,
						numOfTravellers: searchParams.numOfTravellers,

						departure: {
							date: departureDate,
							whereFromIata: departureWhereFromIata,
							whereToIata: departureWhereToIata,
							carrier: departureCarrier,
						},

						return: {
							date: returnDate,
							whereFromIata: returnWhereFromIata,
							whereToIata: returnWhereToIata,
							carrier: returnCarrier,
						},
					};
				});

				// console.log(flightResults);
				dispatch(flightActions.updateResults(flightResults));
			} catch (error) {
				dispatch(
					notificationActions.showNotification({
						message: error.message,
						success: false,
					})
				);
				setTimeout(() => {
					dispatch(notificationActions.hideNotification());
				}, 3000);

				dispatch(flightActions.updateResults([]));
				dispatch(flightActions.updateIsSearching(false));
			}
			dispatch(flightActions.updateResultIsLoading(false));
		})();
	};
};

// (async () => {
// 	const response = await fetch("http://localhost:2000/");
// 	const data = await response.json();

// 	console.log(data);
// })();
