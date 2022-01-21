import classes from "./MainHeader.module.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { VscChromeClose } from "react-icons/vsc";
import Logo from "./Logo";
import SubmitButton from "../../../UI/Buttons/SubmitButton";
import RegularButton from "../../../UI/Buttons/RegularButton";
import { useSelector, useDispatch } from "react-redux";
import { mainActions } from "../../../store/main-slice";
import { useEffect, useState } from "react";
import {
	IoIosCheckmarkCircleOutline,
	IoIosCloseCircleOutline,
} from "react-icons/io";
import { RiErrorWarningLine } from "react-icons/ri";
import { NavLink } from "react-router-dom";

const MainHeader = (props) => {
	const [notificationMessage, setNotificationMessage] = useState("");
	const [notificationSuccess, setNotificationSuccess] = useState(null);
	const [notificationIcon, setNotificationIcon] = useState(null);

	const message = useSelector((state) => state.notification.message);
	const success = useSelector((state) => state.notification.success);
	const sidebarIsVisible = useSelector((state) => state.main.sidebarIsVisible);
	const isLoggedIn = useSelector((state) => state.main.isLoggedIn);
	const dispatch = useDispatch();

	useEffect(() => {
		setNotificationMessage(message);
		setNotificationSuccess(success);

		if (success === true) setNotificationIcon(<IoIosCheckmarkCircleOutline />);
		if (success === false) setNotificationIcon(<IoIosCloseCircleOutline />);
		if (success === null) setNotificationIcon(<RiErrorWarningLine />);
	}, [message, success]);

	let notificationColor = "";
	let style = {};

	if (notificationSuccess === true) {
		notificationColor = "#4BB543";
		style = { backgroundColor: notificationColor, display: "flex" };
	}

	if (notificationSuccess === false) {
		notificationColor = "#FC100D";
		style = { backgroundColor: notificationColor, display: "flex" };
	}

	if (notificationSuccess === null) {
		notificationColor = "#FFCC00";
		style = { backgroundColor: notificationColor, display: "flex" };
	}

	const signOutHandler = () => {
		dispatch(mainActions.logUserOut());
	};

	return (
		<>
			<section className={classes.MainHeader}>
				<div
					className={classes["MainHeader__menu-button"]}
					onClick={() => {
						dispatch(mainActions.toggleSidebarVisiblity());
					}}
				>
					{sidebarIsVisible ? <VscChromeClose /> : <GiHamburgerMenu />}
				</div>

				<Logo />

				{!isLoggedIn && (
					<div
						className={`${classes["MainHeader__button"]} ${classes["MainHeader__button--sign-in"]}`}
					>
						<RegularButton>
							<NavLink exact to="/sign-in">
								Sign In
							</NavLink>
						</RegularButton>
					</div>
				)}

				{!isLoggedIn && (
					<div
						className={`${classes["MainHeader__button"]} ${classes["MainHeader__button--sign-up"]}`}
					>
						<SubmitButton>
							<NavLink exact to="/sign-up">
								Register
							</NavLink>
						</SubmitButton>
					</div>
				)}

				{isLoggedIn && (
					<div
						className={`${classes["MainHeader__button"]} ${classes["MainHeader__button--sign-out"]}`}
						onClick={signOutHandler}
					>
						<SubmitButton>Sign Out</SubmitButton>
					</div>
				)}
			</section>
			<div className={classes["MainHeader__notification"]} style={style}>
				{notificationIcon} {notificationMessage}
			</div>
		</>
	);
};

export default MainHeader;
