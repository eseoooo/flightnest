import classes from "./Tooltip.module.css";

const Tooltip = (props) => {
	// set top or bottom but not both
	// set left or right but not both
	const tooltipStyle = {
		color: props.color,
		right: props.right || null,
		left: props.left || null,
		bottom: props.bottom || null,
		top: props.top || null,
		[props.text === "" && "display"]: "none",
	};

	return (
		<div className={classes.Tooltip}>
			<div style={tooltipStyle} className={classes["Tooltip__text"]}>
				{props.text}
			</div>
			{props.children}
		</div>
	);
};

export default Tooltip;
