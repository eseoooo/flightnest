import classes from "./RegularButtonTwo.module.css";

const RegularButton = (props) => {
	return (
		<button type="button" className={classes.RegularButtonTwo}>
			{props.children}
		</button>
	);
};

export default RegularButton;
