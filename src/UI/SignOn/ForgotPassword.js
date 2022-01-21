import classes from "./ForgotPassword.module.css";
import ReactDOM from "react-dom";
import Logo from "../../components/Layout/MainHeader/Logo";
import SingleInput from "../Inputs/SingleInput";
import SubmitButton from "../Buttons/SubmitButton";
import { useHistory } from "react-router";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { sendResetPasswordEmail } from "../../store/main-actions";
import { notificationActions } from "../../store/notification-slice";

const ForgotPassword = (props) => {
	const dispatch = useDispatch();
	const history = useHistory();
	const [emailAddress, setEmailAddress] = useState("");

	const emailAddressChangeHandler = (event) => {
		setEmailAddress(event.target.value);
	};

	const submitHandler = (event) => {
		event.preventDefault();
		// check input
		let message;
		//validate email
		const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/gi;
		const emailTest = emailRegex.test(String(emailAddress).toLowerCase());
		if (!emailTest) message = "email address";

		if (!emailTest) {
			dispatch(
				notificationActions.showNotification({
					message: `Please enter a valid ${message}!`,
					success: false,
				})
			);
			setTimeout(() => {
				dispatch(notificationActions.hideNotification());
			}, 3000);
			return;
		}
		//get user details if user exists
		dispatch(sendResetPasswordEmail(emailAddress));

		setTimeout(() => {
			history.replace("./sign-in");
		}, 5000);
	};

	return ReactDOM.createPortal(
		<div className={classes.ForgotPassword}>
			<div className={classes["ForgotPassword__image"]}>
				<div>
					<Logo />
				</div>
				<h1>
					Discover the cheapest <br />
					flights.
				</h1>
			</div>
			<div className={classes["ForgotPassword__form"]}>
				<div className={classes["ForgotPassword__details"]}>
					<h2>Forgot Password?</h2>
					<form onSubmit={submitHandler}>
						<h4>Email Address</h4>
						<p>
							Enter the email address you used when you joined and we’ll send
							you instructions to reset your password.
						</p>
						<div>
							<SingleInput
								inputProps={{
									type: "email",
									required: true,
									value: emailAddress,
									onChange: emailAddressChangeHandler,
								}}
							/>
						</div>

						<div>
							<SubmitButton>Send Reset Instructions</SubmitButton>
						</div>
					</form>
				</div>
			</div>
		</div>,
		document.body
	);
};

export default ForgotPassword;
