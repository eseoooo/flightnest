import classes from "./UserOption.module.css";
import { NavLink } from "react-router-dom";

const UserOption = (props) => {
	const activeStyle = {
		backgroundColor: "#e1eceb",
		color: "#425c5a",
	};
	//prettier-ignore
	return (
		<li className={classes.UserOption}>
			<NavLink activeStyle={activeStyle} exact to={`/${props.to}`}>
				<span className={classes['UserOption__icon']}>{props.icon}</span>
				<span className={classes['UserOption__name']}>{props.name.toUpperCase()}</span>
			</NavLink>
		</li>
	);
};

export default UserOption;
