import classes from "./DisplayName.module.css";
import { useSelector } from "react-redux";

const DisplayName = (props) => {
	const displayName = useSelector(
		(state) => state.account.profileDetails.displayName
	);
	return (
		<div className={classes.DisplayName}>
			<h1>{displayName ? `Hello ${displayName}` : "Hi there"},</h1>
			<h2>These are popular destinations, </h2>
			<h5>You should consider visiting!</h5>
		</div>
	);
};

export default DisplayName;
