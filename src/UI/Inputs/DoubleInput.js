import classes from "./DoubleInput.module.css";

const DoubleInput = (props) => {
	return (
		<div className={classes.DoubleInput}>
			{props.leftIcon}
			<input {...props.leftInputProps} />
			{props.midIcon}
			{props.rightIcon}
			<input {...props.rightInputProps} />
		</div>
	);
};

export default DoubleInput;
