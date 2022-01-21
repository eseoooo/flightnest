import classes from "./RangeInput.module.css";
import SliderBubble from "../Icons/SliderBubble";
import { useState } from "react";

const RangeInput = (props) => {
	const min = props.min ?? 0;
	const max = props.max ?? 999;
	const [value, setValue] = useState(min);

	const changeHandler = (event) => {
		setValue(event.target.value);
	};

	const leftIndent = ((value - min) / (max - min)) * 100;

	return (
		<div className={classes.RangeInput}>
			<h5>{props.label}</h5>

			<div className={classes["RangeInput__container"]}>
				<input
					type="range"
					min={`${min}`}
					max={`${max}`}
					value={value}
					onChange={changeHandler}
				/>

				<div style={{ left: `calc(${leftIndent}% - 1.8rem)` }}>
					<span>{value}</span>
					<SliderBubble />
				</div>
			</div>
		</div>
	);
};

export default RangeInput;
