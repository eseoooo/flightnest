import classes from "./SubmitButton.module.css";

const SubmitButton = (props) => {
	return (
		<button type="submit" className={classes.SubmitButton}>
			{props.children}
		</button>
	);
};

export default SubmitButton;
