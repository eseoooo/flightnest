import { notificationActions } from "./notification-slice";

export const sendBookmarks = (bookmarksArray, userId) => {
	return (dispatch) => {
		try {
			(async () => {
				const response = await fetch(
					`https://flightnest-c55d8-default-rtdb.firebaseio.com/users/${userId}/bookmarks.json`,
					{
						method: "PUT",
						headers: {
							"Content-Type": "application/json",
						},
						body: JSON.stringify(bookmarksArray),
					}
				);

				if (!response.ok) {
					throw new Error("Bookmark not added. Please refresh and try again!");
				}
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
