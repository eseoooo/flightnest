import { configureStore } from "@reduxjs/toolkit";
import flightSlice from "./flight-slice";
import accountSlice from "./account-slice";
import mainSlice from "./main-slice";
import notificationSlice from "./notification-slice";
import bookmarkSlice from "./bookmark-slice";
import dashboardSlice from "./dashboard-slice";

const store = configureStore({
	reducer: {
		flight: flightSlice.reducer,
		account: accountSlice.reducer,
		main: mainSlice.reducer,
		notification: notificationSlice.reducer,
		bookmark: bookmarkSlice.reducer,
		dashboard: dashboardSlice.reducer
	},
});

export default store;
