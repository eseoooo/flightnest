import classes from "./AccountForm.module.css";
import SingleInput from "../../../UI/Inputs/SingleInput";
import SubmitButton from "../../../UI/Buttons/SubmitButton";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { sendProfileDetails } from "../../../store/account-actions";
import { notificationActions } from "../../../store/notification-slice";

const AccountForm = (props) => {
	const dispatch = useDispatch();
	const fetchedDisplayName = useSelector(
		(state) => state.account.profileDetails.displayName
	);
	const fetchedFirstName = useSelector(
		(state) => state.account.profileDetails.firstName
	);
	const fetchedLastName = useSelector(
		(state) => state.account.profileDetails.lastName
	);
	const fetchedEmailAddress = useSelector(
		(state) => state.account.profileDetails.emailAddress
	);
	const fetchedPhoneNumber = useSelector(
		(state) => state.account.profileDetails.phoneNumber
	);

	const fetchedId = useSelector((state) => state.account.profileDetails.id);

	const [displayName, setDisplayName] = useState("");
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [emailAddress, setEmailAddress] = useState("");
	const [phoneNumber, setPhoneNumber] = useState("");
	const [anInputHasChanged, setAnInputHasChanged] = useState(false);

	useEffect(() => {
		setDisplayName(fetchedDisplayName);
		setFirstName(fetchedFirstName);
		setLastName(fetchedLastName);
		setEmailAddress(fetchedEmailAddress);
		setPhoneNumber(fetchedPhoneNumber);
	}, [
		fetchedDisplayName,
		fetchedPhoneNumber,
		fetchedFirstName,
		fetchedLastName,
		fetchedEmailAddress,
	]);

	const displayNameChangeHandler = (event) => {
		setDisplayName(event.target.value);
		setAnInputHasChanged(true);
	};

	const firstNameChangeHandler = (event) => {
		setFirstName(event.target.value);
		setAnInputHasChanged(true);
	};

	const lastNameChangeHandler = (event) => {
		setLastName(event.target.value);
		setAnInputHasChanged(true);
	};

	// const emailAddressChangeHandler = (event) => {
	// 	setEmailAddress(event.target.value);
	// 	setAnInputHasChanged(true);
	// };

	const phoneNumberChangeHandler = (event) => {
		setPhoneNumber(event.target.value);
		setAnInputHasChanged(true);
	};

	const submitHandler = (event) => {
		event.preventDefault();
		//do some validation

		let message;
		//validate email
		const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/gi;
		const emailTest = emailRegex.test(String(emailAddress).toLowerCase());
		if (!emailTest) message = "email address";

		//validate phone number
		const phoneRegex = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/gi;
		const phoneTest = phoneRegex.test(String(phoneNumber));
		if (!phoneTest) message = "phone number";

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

		//send http request and update reduxx store in asyn request
		if (anInputHasChanged) {
			dispatch(
				sendProfileDetails(
					{
						displayName,
						firstName,
						lastName,
						phoneNumber,
					},
					{ id: fetchedId, emailAddress },
					fetchedId
				)
			);
		}

		if (!anInputHasChanged) {
			dispatch(
				notificationActions.showNotification({
					message: "No changes have been made!",
					success: null,
				})
			);
			setTimeout(() => {
				dispatch(notificationActions.hideNotification());
			}, 3000);
		}
		setAnInputHasChanged(false);
	};

	return (
		<form className={classes.AccountForm} onSubmit={submitHandler}>
			<h4>profile details</h4>
			<div className={classes["AccountForm__container"]}>
				<div>
					<h4>email address</h4>
					<SingleInput
						inputProps={{
							type: "email",
							value: emailAddress,
							readOnly: true,
							required: true,
							disabled: true,
							style: { cursor: "not-allowed" },
						}}
					/>
				</div>

				<div>
					<h4>display name</h4>
					<SingleInput
						inputProps={{
							type: "text",
							value: displayName,
							onChange: displayNameChangeHandler,
							required: true,
							minLength: 2,
						}}
					/>
				</div>

				<div>
					<h4>first name</h4>
					<SingleInput
						inputProps={{
							type: "text",
							value: firstName,
							onChange: firstNameChangeHandler,
							required: true,
							minLength: 2,
						}}
					/>
				</div>

				<div>
					<h4>last name</h4>
					<SingleInput
						inputProps={{
							type: "text",
							value: lastName,
							onChange: lastNameChangeHandler,
							required: true,
							minLength: 2,
						}}
					/>
				</div>

				<div>
					<h4>phone number</h4>
					<SingleInput
						inputProps={{
							type: "number",
							value: phoneNumber,
							onChange: phoneNumberChangeHandler,
							required: true,
							minLength: 10,
						}}
					/>
				</div>

				<div>
					<h4>&nbsp;</h4>
					<SubmitButton>save changes</SubmitButton>
				</div>
			</div>
		</form>
	);
};

export default AccountForm;
