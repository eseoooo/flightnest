import classes from "./RegularButton.module.css";

const RegularButton = (props) => {
	return (
		<button type="button" className={classes.RegularButton}>
			{props.children}
		</button>
	);
};

export default RegularButton;
