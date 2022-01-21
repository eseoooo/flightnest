import classes from "./Calendar.module.css";
import { useState, useEffect } from "react";
import CalendarDay from "./CalendarDay";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { FaCalendar } from "react-icons/fa";

//prettier-ignore
const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul","Aug", "Sep", "Oct", "Nov", "Dec"];
//prettier-ignore
const DAYS_SHORT = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

/* when in use in other component, provide onGetDate prop to get date in clickDayHandler function
const clickDayHandler = (dateObj) => props.getDate(dateObj);*/


const Calendar = (props) => {
	const [date, setDate] = useState(1);
	const [day, setDay] = useState(1);
	const [month, setMonth] = useState(0);
	const [year, setYear] = useState(2000);

	useEffect(() => {
		const now = new Date(Date.now());

		setDate(now.getDate());
		setDay(now.getDay());
		setMonth(now.getMonth());
		setYear(now.getFullYear());
	}, []);

	const getDaysInMonth = (year, month) => {
		const date = new Date(year, month, 1);
		const days = [];
		while (date.getMonth() === month) {
			days.push(new Date(date));
			date.setDate(date.getDate() + 1);
		}
		return days;
	};

	const fillDaysInMonth = (year, month) => {
		let startDaysFill = [];
		let endDaysFill = [];
		const days = getDaysInMonth(year, month);
		const firstDate = days[0];
		const firstDay = firstDate.getDay();

		const lastDate = days[days.length - 1];
		const lastDay = lastDate.getDay();

		if (firstDay !== 0) {
			//get days from previous month
			let prevMonth = month - 1;
			let curYear = year;
			if (month === 0) {
				prevMonth = 11;
				curYear = year - 1;
			}
			startDaysFill = getDaysInMonth(curYear, prevMonth).slice(-firstDay);
		}

		if (lastDay !== 6) {
			//get days from next month
			let nextMonth = month + 1;
			let curYear = year;
			if (month === 11) {
				nextMonth = 0;
				curYear = year + 1;
			}

			endDaysFill = getDaysInMonth(curYear, nextMonth).slice(0, 6 - lastDay);
		}
		return startDaysFill.concat(...days, ...endDaysFill);
	};

	const clickDayHandler = (dateObj) => {
		if (!props.onGetDate) return;
		props.onGetDate(dateObj);
	};

	const clickPrevMonthHandler = (currentYear, currentMonth) => {
		if (currentMonth === 0) {
			setMonth(11);
			setYear(currentYear - 1);
			return;
		}

		//update state
		setMonth(currentMonth - 1);
		setYear(currentYear);
		return;
	};

	const clickNextMonthHandler = (currentYear, currentMonth) => {
		if (currentMonth === 11) {
			setMonth(0);
			setYear(currentYear + 1);
			return;
		}

		//update state
		setMonth(currentMonth + 1);
		setYear(currentYear);
		return;
	};

	return (
		//prettier-ignore
		<div className={classes.Calendar}>
			<div className={classes["Calendar__title"]}>
				<h2>{year} {MONTHS[month]}. </h2>

				<div onClick={() => {clickPrevMonthHandler(year, month)}}>
					<IoIosArrowBack />
				</div>

				<div onClick={() => {clickNextMonthHandler(year, month)}}>
					<IoIosArrowForward />
				</div>
				
				<div>
					<FaCalendar/>
					<p>{date}</p>
				</div>
			</div>

			<div className={classes["Calendar__days"]}>
				{DAYS_SHORT.map((day) => {
					return <h4 key={day}>{day}</h4>;
				})}
			</div>

			<div className={classes["Calendar__container"]}>
				{ fillDaysInMonth(year, month).map((date) => {
					const now = new Date(Date.now());

					// current day check
					const isCurrentDay =
						now.getDate() === date.getDate() &&
						now.getMonth() === date.getMonth() &&
						now.getFullYear() === date.getFullYear()
					
					
					return <CalendarDay 
						dateObject={date}
						key={date.valueOf()} 
						dayIsInCurrentMonth={month === date.getMonth()}
						isCurrentDay={isCurrentDay}
						onClick={clickDayHandler}
						/>;
				})}
			</div>
		</div>
	);
};

export default Calendar;
