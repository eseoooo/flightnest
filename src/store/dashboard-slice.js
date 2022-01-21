import { createSlice } from "@reduxjs/toolkit";

const dashboardSlice = createSlice({
	name: "dashboard",
	initialState: {
		popularDestinations: [],
	},
	reducers: {
		pickPopularDestination(state, action) {
			const destinations = action.payload;
			const randomCityPicks = [
				...new Set(
					Array.from(
						{ length: 50 },
						() => Math.floor(Math.random() * destinations.length) + 1
					)
				),
			].slice(0, 3);

			state.popularDestinations = randomCityPicks.map(
				(pick) => destinations[pick]
			);
		},
	},
});

export const dashboardActions = dashboardSlice.actions;
export default dashboardSlice;

