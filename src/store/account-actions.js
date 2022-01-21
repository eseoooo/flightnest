import { accountActions } from "./account-slice";
import { bookmarkActions } from "./bookmark-slice";
import { notificationActions } from "./notification-slice";
// import racePromise from "../resources/helper/racePromise";

export const sendAvatarId = (avatarId, userId) => {
	return (dispatch) => {
		try {
			(async () => {
				const response = await fetch(
					`https://flightnest-c55d8-default-rtdb.firebaseio.com/users/${userId}/avatar/id.json`,
					{
						method: "PUT",
						headers: { "Content-Type": "application/json" },
						body: avatarId,
					}
				);

				if (!response.ok) {
					throw new Error(
						"Something went wrong while trying to update your avatar. Please try again!"
					);
				}
				dispatch(accountActions.updateAvatarId(avatarId));
			})();
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
		}
	};
};

export const sendProfileDetails = (updatedDetails, staticDetails, userId) => {
	return (dispatch) => {
		try {
			(async () => {
				const response = await fetch(
					`https://flightnest-c55d8-default-rtdb.firebaseio.com/users/${userId}/profileDetails.json`,
					{
						method: "PUT",
						headers: { "Content-Type": "application/json" },
						body: JSON.stringify({ ...updatedDetails, ...staticDetails }),
					}
				);
				// console.log(response);

				if (!response.ok) {
					throw new Error(
						"Something went wrong while trying to update your details. Please try again!"
					);
				}

				// show and hide notification after 3 seconds
				dispatch(
					notificationActions.showNotification({
						message: "Your changes have been successfully saved",
						success: response.ok,
					})
				);
				setTimeout(() => {
					dispatch(notificationActions.hideNotification());
				}, 3000);

				dispatch(
					accountActions.updateProfileDetails({
						...updatedDetails,
						...staticDetails,
					})
				);
			})();
		} catch (error) {
			dispatch(
				notificationActions.showNotification({
					message: error.message,
					success: false,
				})
			);
			setTimeout(() => {
				dispatch(notificationActions.hideNotification());
			}, 4000);
		}
	};
};

export const fetchAccountDetails = (id) => {
	return (dispatch) => {
		(async () => {
			try {
				const response = await fetch(
					`https://flightnest-c55d8-default-rtdb.firebaseio.com/users/${id}.json`
				);

				if (!response.ok) {
					throw new Error(
						"Unable to fetch profile. Please try again!"
					);
				}

				const data = await response.json();

				dispatch(accountActions.setAccountDetails(data));
				dispatch(bookmarkActions.setBookmarks(data));
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
			}
		})();
	};
};

