import classes from "./UserDetails.module.css";
import UserImage from "./UserImage/UserImage";
import UserInformation from "./UserInformation/UserInformation";
import { useSelector } from "react-redux";
import SubmitButton from "../../../../UI/Buttons/SubmitButton";
import { NavLink } from "react-router-dom";

const UserDetails = (props) => {
	const isLoggedIn = useSelector((state) => state.main.isLoggedIn);

	return (
		<div className={classes.UserDetails}>
			{isLoggedIn && <UserImage />}
			{isLoggedIn && <UserInformation />}
			{!isLoggedIn && <h1>Create an account</h1>}
			{!isLoggedIn && <h2>It's quick and easy.</h2>}
			{!isLoggedIn && (
				<NavLink to="./sign-up">
					<div className={classes["UserDetails__button"]}>
						<SubmitButton>Register</SubmitButton>
					</div>
				</NavLink>
			)}
		</div>
	);
};

export default UserDetails;
