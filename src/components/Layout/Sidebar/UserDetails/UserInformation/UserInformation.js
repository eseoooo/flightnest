import classes from "./UserInformation.module.css";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";

const UserInformation = (props) => {
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [emailAddress, setEmailAddress] = useState("");

	const fetchedFirstName = useSelector(
		(state) => state.account.profileDetails.firstName
	);
	const fetchedLastName = useSelector(
		(state) => state.account.profileDetails.lastName
	);
	const fetchedEmailAddress = useSelector(
		(state) => state.account.profileDetails.emailAddress
	);

	useEffect(() => {
		setFirstName(fetchedFirstName);
		setLastName(fetchedLastName);
		setEmailAddress(fetchedEmailAddress);
	}, [fetchedFirstName, fetchedLastName, fetchedEmailAddress]);
	
	return (
		<div className={classes["UserInformation"]}>
			<h2 className={classes["UserInformation__name"]}>
				{firstName} {lastName}
			</h2>
			<h2 className={classes["UserInformation__email"]}>{emailAddress}</h2>
		</div>
	);
};

export default UserInformation;
