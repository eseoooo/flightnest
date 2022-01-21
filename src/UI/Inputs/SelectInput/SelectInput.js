import classes from "./SelectInput.module.css";
import { useState, cloneElement, Children } from "react";
import { IoIosArrowDropdown } from "react-icons/io";
import { IoIosArrowDropup } from "react-icons/io";

const SelectInput = (props) => {
	const [dropdownIsVisible, setDropdownIsVisible] = useState(false);
	const [selectedDisplayValue, setSelectedDisplayValue] = useState(null);

	const changeHandler = (value) => {
		props.onChange(value);
	};

	//prettier-ignore
	const dropdownClickHandler = () => setDropdownIsVisible((prevState) => !prevState);
	const dropdownMouseLeaveHandler = () => setDropdownIsVisible(false);
	const setSelectedValueHandler = (value) => changeHandler(value);

	const setSelectedDisplayValueHandler = (value) =>
		setSelectedDisplayValue(value);

	// add setSelectedValueHandler, setDisplayValueHandler, & dropdownMouseLeaveHandler to children as props
	const children = Children.toArray(props.children);
	const newChildren = children.map((child) => {
		return cloneElement(child, {
			onSetSelectedValue: setSelectedValueHandler,
			onSetSelectedDisplayValue: setSelectedDisplayValueHandler,
			onClick: dropdownMouseLeaveHandler,
		});
	});

	const dropdown = dropdownIsVisible && (
		<div
			className={classes["SelectInput__dropdown"]}
			onMouseLeave={dropdownMouseLeaveHandler}
		>
			{newChildren}
		</div>
	);

	const dropdownIcon = (
		<div
			className={classes["SelectInput__icon"]}
			onClick={dropdownClickHandler}
		>
			{!dropdownIsVisible && <IoIosArrowDropdown />}
			{dropdownIsVisible && <IoIosArrowDropup />}
		</div>
	);

	return (
		<div
			className={classes.SelectInput}
			onMouseLeave={dropdownMouseLeaveHandler}
		>
			<span>{selectedDisplayValue || props.name}</span>
			{dropdown}
			{dropdownIcon}
		</div>
	);
};

export default SelectInput;
