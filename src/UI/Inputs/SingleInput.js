import classes from "./SingleInput.module.css";

const SingleInput = (props) => {
	return (
		<div className={classes.SingleInput}>
			{props.icon}
			<input {...props.inputProps} />
		</div>
	);
};

export default SingleInput;
