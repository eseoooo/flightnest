import CITIES from "../../../resources/CITIES";
import classes from "./SearchResults.module.css";
import { useDispatch } from "react-redux";
import { flightActions } from "../../../store/flight-slice";
import { useState, useEffect, useCallback } from "react";

const SearchResults = (props) => {
	const [searchResults, setSearchResults] = useState(null);
	const dispatch = useDispatch();

	const getCities = useCallback(
		(userInput) => {
			if (props.userInput.trim() === "") return [];

			const results = [];
			//If escape strings are not already part of your pattern you can add them using String.replace:
			const userInputRegex = RegExp(
				`${userInput.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}`.trim(),
				"gi"
			);

			CITIES.forEach((airport, airportIndex) => {
				for (const key in airport) {
					const userInputTest = userInputRegex.test(airport[key]);
					if (userInputTest) {
						results.push(CITIES[airportIndex]);
						break;
					}
				}
			});
			return results;
		},
		[props.userInput]
	);

	const resultClickHandler = (resultObject) => {
		props.onGetResult(resultObject);
	};

	useEffect(() => {
		const searchTimer = setTimeout(() => {
			setSearchResults(getCities(props.userInput));
		}, 500);

		return () => clearTimeout(searchTimer);
	}, [props.userInput, getCities]);

	// useEffect(() => {});

	return (
		<div
			className={classes.SearchResults}
			onMouseEnter={() => {
				dispatch(flightActions.toggleMouseEnterResult());
			}}
			onMouseLeave={() => {
				dispatch(flightActions.toggleMouseEnterResult());
			}}
			onClick={() => {
				dispatch(flightActions.toggleMouseEnterResult());
			}}
		>
			{searchResults
				? searchResults.map((city) => (
						<div
							className={classes.SearchResult}
							key={city.id}
							onClick={() => {
								resultClickHandler(city);
							}}
						>
							<div className={classes.SearchResult__iata}>
								<h2>{city.iataCode}</h2>
							</div>
							<div className={classes.SearchResult__details}>
								<h4>
									{city.city}, {city.country}
								</h4>
								<h5>{city.airport}</h5>
							</div>
						</div>
				  ))
				: null}
		</div>
	);
};

export default SearchResults;
