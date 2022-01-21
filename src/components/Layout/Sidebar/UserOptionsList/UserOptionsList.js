import UserOption from "./UserOption/UserOption";
import classes from "./UserOptionsList.module.css";
import { BiHomeSmile, BiPaperPlane, BiBookmarks } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { useSelector } from "react-redux";

const UserOptionsList = (props) => {
	const isLoggedIn = useSelector((state) => state.main.isLoggedIn);

	return (
		<nav className={classes.UserOptionsList}>
			<ul>
				<UserOption name="dashboard" icon={<BiHomeSmile />} to="dashboard" />
				<UserOption name="flights" icon={<BiPaperPlane />} to="flights" />
				{isLoggedIn && (
					<UserOption name="bookmarks" icon={<BiBookmarks />} to="bookmarks" />
				)}
				{isLoggedIn && (
					<UserOption name="account" icon={<CgProfile />} to="account" />
				)}
			</ul>
		</nav>
	);
};

export default UserOptionsList;
