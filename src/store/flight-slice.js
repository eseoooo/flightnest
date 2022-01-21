import { createSlice } from "@reduxjs/toolkit";

const flightSlice = createSlice({
	name: "flight",
	initialState: {
		searchParams: {
			whereFrom: "",
			whereTo: "",
			numOfTravellers: 1,
			departureDate: "",
			returnDate: "",
			tripType: "",
		},
		anytime: false,
		results: [],
		resultsSorting: null,
		resultIsLoading: false,
		mouseEnterResult: false,
		isSearching: false,
		totalResults: 0,
		currency: "CAD",
	},

	reducers: {
		updateSearchParam(state, action) {
			state.searchParams = {
				whereFrom: action.payload.whereFromIata,
				whereTo: action.payload.whereToIata,
				numOfTravellers: action.payload.numOfTravellers,
				tripType: action.payload.tripType,
				departureDate: action.payload.departureDate,
				returnDate: action.payload.returnDate,
			};
		},

		updateResults(state, action) {
			state.results = action.payload;
			state.totalResults = action.payload.length;
		},

		updateResultIsLoading(state, action) {
			state.resultIsLoading = action.payload;
		},

		updateIsSearching(state, action) {
			state.isSearching = action.payload;
		},

		updateSorting(state, action) {
			state.resultsSorting = action.payload;
		},

		updateCurrency(state, action) {
			state.currency = action.payload;
		},
		
		resetState(state) {
			state.searchParams = {
				whereFrom: "",
				whereTo: "",
				numOfTravellers: 1,
				departureDate: "",
				returnDate: "",
				tripType: "",
			};
			state.results = [];
			state.resultIsLoading = false;
			state.isSearching = false;
			state.totalResults = 0;
		},

		toggleMouseEnterResult(state) {
			state.mouseEnterResult = !state.mouseEnterResult;
		},
	},
});

export const flightActions = flightSlice.actions;

export default flightSlice;
