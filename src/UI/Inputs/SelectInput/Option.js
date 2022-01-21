import classes from "./Option.module.css";

const Option = (props) => {
	const clickHandler = () => {
		props.onSetSelectedValue(props.value);
		props.onSetSelectedDisplayValue(props.displayValue);
		props.onClick()
	};

	return (
		<div className={classes.Option} onClick={clickHandler}>
			<div className={classes["Option__icon"]}>{props.icon}</div>
			<span>{props.displayValue}</span>
		</div>
	);
};

export default Option;
