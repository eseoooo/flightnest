import { createSlice } from "@reduxjs/toolkit";


const accountSlice = createSlice({
	name: "account",
	initialState: {
		profileDetails: {
			displayName: "",
			emailAddress: "",
			firstName: "",
			lastName: "",
			phoneNumber: "",
			id: "",
			password: "???",
		},
		avatar: {
			id: "",
		},
	},
	reducers: {
		updateAvatarId(state, action) {
			state.avatar.id = action.payload;
		},

		setAccountDetails(state, action) {
			state.profileDetails = action.payload.profileDetails;
			state.avatar = action.payload.avatar;
		},

		updateProfileDetails(state, action) {
			state.profileDetails = action.payload;
		},
	},
});

export const accountActions = accountSlice.actions;
export default accountSlice;
