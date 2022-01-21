import classes from "./CalendarDay.module.css";

const CalendarDay = (props) => {
	const onClickDayHandler = () => {
		props.onClick(props.dateObject);
	};

	//prettier-ignore
	const appliedClasses = `
		${classes.CalendarDay} 
		${!props.dayIsInCurrentMonth && classes["CalendarDay--faded"]}
		${props.isCurrentDay && classes["CalendarDay--highlighted"]}`;

	return (
		<div className={appliedClasses} onClick={onClickDayHandler}>
			{props.dateObject.getDate()}
		</div>
	);
};

export default CalendarDay;
