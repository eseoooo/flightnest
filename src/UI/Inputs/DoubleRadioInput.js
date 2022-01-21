import classes from "./DoubleRadioInput.module.css";
import { useState } from "react";

const DoubleRadioInput = (props) => {
	const [input1IsChecked, setInput1IsChecked] = useState(true);
	const [input2IsChecked, setInput2IsChecked] = useState(null);

	const checkedStyle = {
		backgroundColor: "#425c5a",
		color: "#fff",
	};

	const radio1ClickHandler = () => {
		setInput1IsChecked(true);
		setInput2IsChecked(null);
	};

	const radio2ClickHandler = () => {
		setInput1IsChecked(null);
		setInput2IsChecked(true);
	};

	return (
		<div className={classes.DoubleCheckbox}>
			<div style={input1IsChecked && checkedStyle}>
				<input
					type="radio"
					value={props.value1}
					defaultChecked={input1IsChecked}
					onClick={radio1ClickHandler}
					{...props.inputProps}
				/>
				<span>{props.value1}</span>
			</div>

			<div style={input2IsChecked && checkedStyle}>
				<input
					type="radio"
					value={props.value2}
					defaultChecked={input2IsChecked}
					onClick={radio2ClickHandler}
					{...props.inputProps}
				/>
				<span>{props.value2}</span>
			</div>
		</div>
	);
};

export default DoubleRadioInput;
