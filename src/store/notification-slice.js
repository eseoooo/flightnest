import { createSlice } from "@reduxjs/toolkit";

const notificationSlice = createSlice({
	name: "notification",
	initialState: {
		message: "",
		success: "",
	},
	reducers: {
		showNotification(state, action) {
			state.message = action.payload.message;
			state.success = action.payload.success;
		},

		hideNotification(state, action) {
			state.message = ""
			state.success = ""
		}
	},
});

export default notificationSlice;
export const notificationActions = notificationSlice.actions;
