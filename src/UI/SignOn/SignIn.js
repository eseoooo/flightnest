import classes from "./SignIn.module.css";
import ReactDOM from "react-dom";
import Logo from "../../components/Layout/MainHeader/Logo";
import SingleInput from "../Inputs/SingleInput";
import SubmitButton from "../Buttons/SubmitButton";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { signInUser } from "../../store/main-actions";
import { notificationActions } from "../../store/notification-slice";

const SignIn = (props) => {
	const dispatch = useDispatch();
	const [emailAddress, setEmailAddress] = useState("");
	const [password, setPassword] = useState("");

	const emailAddressChangeHandler = (event) => {
		setEmailAddress(event.target.value);
	};

	const passwordChangeHandler = (event) => {
		setPassword(event.target.value);
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
		dispatch(signInUser({ emailAddress, password }));
	};

	return ReactDOM.createPortal(
		<div className={classes.SignIn}>
			<div className={classes["SignIn__image"]}>
				<div>
					<Logo />
				</div>
				<h1>
					Discover the cheapest <br />
					flights. Sign in to get
					<br />
					started.
				</h1>
			</div>
			<div className={classes["SignIn__form"]}>
				<div className={classes["SignIn__details"]}>
					<h2>Sign in to Flightnest</h2>
					<form onSubmit={submitHandler}>
						<h4>Email Address</h4>
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
						<h4>
							Password{" "}
							<span>
								<NavLink to="/forgot-password">Forgot password?</NavLink>
							</span>
						</h4>
						<div>
							<SingleInput
								inputProps={{
									type: "password",
									required: true,
									minLength: 6,
									placeholder: "6+ characters",
									value: password,
									onChange: passwordChangeHandler,
								}}
							/>
						</div>
						<div>
							<SubmitButton>Sign In</SubmitButton>
						</div>
						<div>
							Not a member? <NavLink to="/sign-up">Sign up now</NavLink>
						</div>
					</form>
				</div>
			</div>
		</div>,
		document.body
	);
};

export default SignIn;
