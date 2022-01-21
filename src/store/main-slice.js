import { createSlice } from "@reduxjs/toolkit";

const mainSlice = createSlice({
	name: "main",
	initialState: {
		userId: null,
		isLoggedIn: false,
		sidebarIsVisible: false,
		userCoord: null,
	},
	reducers: {
		logUserIn(state, action) {
			state.userId = action.payload;
			localStorage.setItem("uid", action.payload);
			state.isLoggedIn = true;
			window.location.reload();
		},

		refreshUser(state, action) {
			state.userId = action.payload;
			state.isLoggedIn = true;
		},

		logUserOut(state, action) {
			state.userId = null;
			state.isLoggedIn = false;
			localStorage.removeItem("uid");
			window.location.reload();
		},

		toggleSidebarVisiblity(state) {
			state.sidebarIsVisible = !state.sidebarIsVisible;
		},

		setUserCoord(state, action) {
			state.userCoord = action.payload;
		},
	},
});

export default mainSlice;
export const mainActions = mainSlice.actions;
