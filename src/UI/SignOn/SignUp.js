import classes from "./SignUp.module.css";
import ReactDOM from "react-dom";
import SingleInput from "../Inputs/SingleInput";
import SubmitButton from "../Buttons/SubmitButton";
import { NavLink } from "react-router-dom";
import { useHistory } from "react-router";
import { useState } from "react";
import Logo from "../../components/Layout/MainHeader/Logo";
import { notificationActions } from "../../store/notification-slice";
import { createUser } from "../../store/main-actions";
import { useDispatch } from "react-redux";

const SignUp = (props) => {
	const dispatch = useDispatch();
	const history = useHistory();

	const [displayName, setDisplayName] = useState("");
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [emailAddress, setEmailAddress] = useState("");
	const [phoneNumber, setPhoneNumber] = useState("");
	const [password, setPassword] = useState("");

	const displayNameChangeHandler = (event) => {
		setDisplayName(event.target.value);
	};

	const firstNameChangeHandler = (event) => {
		setFirstName(event.target.value);
	};

	const lastNameChangeHandler = (event) => {
		setLastName(event.target.value);
	};

	const emailAddressChangeHandler = (event) => {
		setEmailAddress(event.target.value);
	};

	const phoneNumberChangeHandler = (event) => {
		setPhoneNumber(event.target.value);
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

		//validate phone number
		const phoneRegex = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/gi;
		const phoneTest = phoneRegex.test(String(phoneNumber));
		if (!emailTest) message = "phone number";
		// console.log(emailTest, phoneTest);

		if (!emailTest || !phoneTest) {
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

		//parse userData
		const userData = {
			avatar: { id: 0 },
			bookmarks: "[]",
			profileDetails: {
				displayName,
				emailAddress,
				password,
				firstName,
				lastName,
				phoneNumber,
			},
		};
		//send request to add account
		dispatch(createUser(userData));

		// show success/fail message
		// if success, show redirecting to sign in or link to sign in
		setTimeout(() => {
			history.replace("./sign-in");
		}, 8000);
		// if fail, show reason e.g user exists. try logging in
	};

	return ReactDOM.createPortal(
		<div className={classes.SignUp}>
			<div className={classes["SignUp__image"]}>
				<div>
					<Logo />
				</div>
				<h1>
					Discover the cheapest <br />
					flights. Register today!
				</h1>
			</div>

			<div className={classes["SignUp__form"]}>
				<h2>Sign up to Flightnest</h2>
				<form onSubmit={submitHandler}>
					<div>
						<h4>First name</h4>
						<SingleInput
							inputProps={{
								type: "text",
								required: true,
								minLength: 2,
								value: firstName,
								onChange: firstNameChangeHandler,
							}}
						/>
					</div>
					<div>
						<h4>Last name</h4>
						<SingleInput
							inputProps={{
								type: "text",
								required: true,
								minLength: 2,
								value: lastName,
								onChange: lastNameChangeHandler,
							}}
						/>
					</div>
					<div>
						<h4>Display name</h4>
						<SingleInput
							inputProps={{
								type: "text",
								required: true,
								minLength: 2,
								value: displayName,
								onChange: displayNameChangeHandler,
							}}
						/>
					</div>
					<div>
						<h4>Phone number</h4>
						<SingleInput
							inputProps={{
								type: "number",
								required: true,
								minLength: 10,
								value: phoneNumber,
								onChange: phoneNumberChangeHandler,
							}}
						/>
					</div>
					<div>
						<h4>Email address</h4>
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
						<h4>Password</h4>
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
					<SubmitButton>Create Account</SubmitButton>
					<div>
						Already a member? <NavLink to="/sign-in">Sign In</NavLink>
					</div>
				</form>
			</div>
		</div>,
		document.body
	);
};

export default SignUp;
