import { mainActions } from "./main-slice";
import { notificationActions } from "./notification-slice";
import { initializeApp } from "firebase/app";
import {
	getAuth,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	sendPasswordResetEmail,
} from "firebase/auth";

const firebaseConfig = {
	apiKey: "AIzaSyDno-3BULX-kJ3Dzpn2GviQ8PnOuRNwhnc",
	authDomain: "flightnest-c55d8.firebaseapp.com",
	databaseURL: "https://flightnest-c55d8-default-rtdb.firebaseio.com",
	projectId: "flightnest-c55d8",
	storageBucket: "flightnest-c55d8.appspot.com",
	messagingSenderId: "599475133540",
	appId: "1:599475133540:web:1f7502d40deb70fda91371",
	measurementId: "G-H35ZDPT4WP",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export const setUserCoordAsync = () => {
	return (dispatch) => {
		navigator.geolocation.getCurrentPosition((position) => {
			const { latitude, longitude } = position.coords;
			dispatch(mainActions.setUserCoord([latitude, longitude]));
		});
	};
};

export const sendResetPasswordEmail = (email) => {
	return (dispatch) => {
		sendPasswordResetEmail(auth, email)
			.then(() => {
				dispatch(
					notificationActions.showNotification({
						message: "Password reset email sent! Redirecting...",
						success: true,
					})
				);
				setTimeout(() => {
					dispatch(notificationActions.hideNotification());
				}, 5000);
			})
			.catch((error) => {
				dispatch(
					notificationActions.showNotification({
						message:
							"Unable to send password reset email sent! Please try again",
						success: false,
					})
				);
				setTimeout(() => {
					dispatch(notificationActions.hideNotification());
				}, 8000);
			});
	};
};

// export const resetPassword = (newPassword) => {
// 	return (dispatch) => {};
// };

export const createUser = (userData) => {
	return (dispatch) => {
		createUserWithEmailAndPassword(
			auth,
			userData.profileDetails.emailAddress,
			userData.profileDetails.password
		)
			.then((userCredential) => {
				// Signed in
				const user = userCredential.user;
				console.log(user);

				const { displayName, emailAddress, firstName, lastName, phoneNumber } =
					userData.profileDetails;

				const profileDetails = {
					displayName,
					emailAddress,
					firstName,
					lastName,
					phoneNumber,
					id: user.uid,
				};

				const modifiedUserData = {
					...userData,
					profileDetails,
				};

				const body = { [`${user.uid}`]: modifiedUserData };

				try {
					(async () => {
						const response = await fetch(
							"https://flightnest-c55d8-default-rtdb.firebaseio.com/users.json",
							{
								method: "PATCH",
								headers: {
									"Content-Type": "application/json",
								},
								body: JSON.stringify(body),
							}
						);
						// console.log(response);
						if (!response.ok) {
							throw new Error("Unable to create user. Please try again!");
						}

						dispatch(
							notificationActions.showNotification({
								message:
									"Congratulations! Your account has been successfully created. Redirecting to sign in...",
								success: true,
							})
						);
						setTimeout(() => {
							dispatch(notificationActions.hideNotification());
						}, 8000);
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
			})
			.catch((error) => {
				// const errorCode = error.code;
				// const errorMessage = error.message;
				// console.log(errorCode);

				dispatch(
					notificationActions.showNotification({
						message: "User already exists! Redirecting to sign in...",
						success: null,
					})
				);
				setTimeout(() => {
					dispatch(notificationActions.hideNotification());
				}, 8000);
				return;
			});
	};
};

export const signInUser = (userData) => {
	return (dispatch) => {
		signInWithEmailAndPassword(auth, userData.emailAddress, userData.password)
			.then((userCredential) => {
				// Signed in
				const user = userCredential.user;
				dispatch(mainActions.logUserIn(user.uid));
			})
			.catch((error) => {
				dispatch(
					notificationActions.showNotification({
						message:
							"You have entered an invalid username or password! Please try again.",
						success: false,
					})
				);
				setTimeout(() => {
					dispatch(notificationActions.hideNotification());
				}, 4000);
			});
	};
};

export const refreshUserAsync = () => {
	return (dispatch) => {
		try {
			(async () => {
				const userId = localStorage.getItem("uid");
				if (!userId) return;

				const url = `https://flightnest-c55d8-default-rtdb.firebaseio.com/users/${userId}.json`;
				const response = await fetch(url);
				const data = await response.json();
				if (!data) return;

				dispatch(mainActions.refreshUser(userId));
			})();
		} catch (error) {
			return;
		}
	};
};
