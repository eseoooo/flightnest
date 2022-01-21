import classes from "./NoResult.module.css";

const NoResult = (props) => {
	return (
		<div className={classes.NoResult}>
			<div className={classes["NoResult__icon"]}>{props.icon}</div>
			<h2>{props.heading}</h2>
			<p>{props.paragraph1}</p>
			<p>{props.paragraph2}</p>
		</div>
	);
};

export default NoResult;
