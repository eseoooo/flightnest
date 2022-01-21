import classes from "./SearchBar.module.css";
import DoubleInput from "../../../UI/Inputs/DoubleInput";
import DoubleRadioInput from "../../../UI/Inputs/DoubleRadioInput";
import SubmitButton from "../../../UI/Buttons/SubmitButton";
import RegularButtonTwo from "../../../UI/Buttons/RegularButtonTwo";
import SingleInput from "../../../UI/Inputs/SingleInput";
import Modal from "../../../UI/Modal/Modal";
import { useDispatch, useSelector } from "react-redux";
import { flightActions } from "../../../store/flight-slice";
import { fetchFlightResults } from "../../../store/flight-actions";
import { useState } from "react";

// icons
import { RiArrowLeftRightLine } from "react-icons/ri";
import { SiGooglemaps } from "react-icons/si";
import { GoCalendar } from "react-icons/go";
import { BsPersonFill } from "react-icons/bs";
import { IoPinOutline } from "react-icons/io5";
import SearchResults from "./SearchResults";
import Calendar from "../../../UI/Calendar/Calendar";

const SearchBar = (props) => {
	const width = window.screen.width;
	const dispatch = useDispatch();
	const mouseEnterSearchResult = useSelector(
		(state) => state.flight.mouseEnterResult
	);
	const currency = useSelector((state) => state.flight.currency);

	const [dateModalIsVisible, setDateModalIsVisible] = useState(false);
	const [dateTargetInput, setDateTargetInput] = useState("");
	const [destTargetInput, setDestTargetInput] = useState("");
	const [isSearching, setIsSearching] = useState(false);

	const [whereFrom, setWhereFrom] = useState("");
	const [whereFromIata, setWhereFromIata] = useState("");

	const [whereTo, setWhereTo] = useState("");
	const [whereToIata, setWhereToIata] = useState("");

	const [numOfTravellers, setNumOfTravellers] = useState(1);
	const [departureDate, setDepartureDate] = useState("");
	const [returnDate, setReturnDate] = useState("");
	const [tripType, setTripType] = useState("one way");
	const [userInput, setUserInput] = useState("");

	let calendarHeight = "50rem";
	let calendarWidth = "50rem";

	if (width <= 481) {
		calendarHeight = "40rem";
		calendarWidth = "40rem";
	}
	if (width <= 320) {
		calendarHeight = "30rem";
		calendarWidth = "30rem";
	}
	const calendarStyle = {
		height: calendarHeight,
		width: calendarWidth,
		transform: "translatey(5rem)",
		display: "block",
	};

	const getResultHandler = (resultObject) => {
		if (destTargetInput === "whereFrom") {
			setWhereFrom(resultObject.city);
			setWhereFromIata(resultObject.iataCode);
		}

		if (destTargetInput === "whereTo") {
			setWhereTo(resultObject.city);
			setWhereToIata(resultObject.iataCode);
		}
		setIsSearching(false);
	};

	const getDateHandler = (dateObject) => {
		const year = dateObject.getFullYear();
		const month = (dateObject.getMonth() + 1 + "").padStart(2, "0");
		const day = (dateObject.getDate() + "").padStart(2, "0");

		if (dateTargetInput === "departureDate") {
			setDepartureDate(`${year}-${month}-${day}`);
		}

		if (dateTargetInput === "returnDate") {
			setReturnDate(`${year}-${month}-${day}`);
		}

		setDateModalIsVisible(false);
	};

	const clearDateHandler = () => {
		if (dateTargetInput === "departureDate") {
			setDepartureDate("");
		}

		if (dateTargetInput === "returnDate") {
			setReturnDate("");
		}
		setDateModalIsVisible(false);
	};

	const whereFromChangeHandler = (event) => {
		setIsSearching(true);
		setDestTargetInput(event.target.ariaLabel);
		setWhereFrom(() => {
			setUserInput(event.target.value);
			return event.target.value;
		});
	};

	const whereFromFocusHandler = (event) => {
		setIsSearching(true);
		setDestTargetInput(event.target.ariaLabel);
		setUserInput(event.target.value);
	};

	const whereFromBlurHandler = () => {
		!mouseEnterSearchResult && setIsSearching(false);
	};

	const whereToChangeHandler = (event) => {
		setIsSearching(true);
		setDestTargetInput(event.target.ariaLabel);
		setWhereTo(() => {
			setUserInput(event.target.value);
			return event.target.value;
		});
	};

	const whereToFocusHandler = (event) => {
		setIsSearching(true);
		setDestTargetInput(event.target.ariaLabel);
		setUserInput(event.target.value);
	};

	const whereToBlurHandler = () => {
		!mouseEnterSearchResult && setIsSearching(false);
	};

	//date inputs
	const departureDateChangeHandler = (event) => {
		setDateTargetInput(event.target.ariaLabel);
		setDepartureDate(event.target.value);
	};

	const returnDateChangeHandler = (event) => {
		setDateTargetInput(event.target.ariaLabel);
		setReturnDate(event.target.value);
	};

	const dateFocusHandler = (event) => {
		setDateModalIsVisible(true);
		setDateTargetInput(event.target.ariaLabel);
	};

	const numOfTravellersChangeHandler = (event) => {
		setNumOfTravellers(event.target.value);
	};

	const tripTypeChangeHandler = (event) => {
		setTripType(event.target.value);
	};

	const submitHandler = (event) => {
		event.preventDefault();
		//do some validation

		// fix returnDate string
		// if (tripType === "one way") setReturnDate("");

		dispatch(
			flightActions.updateSearchParam({
				whereFromIata,
				whereToIata,
				numOfTravellers,
				departureDate,
				returnDate,
				tripType,
			})
		);

		dispatch(
			fetchFlightResults({
				whereFromIata,
				whereToIata,
				numOfTravellers,
				departureDate,
				returnDate,
				tripType,
				currency,
			})
		);
	};

	return (
		<div className={classes.SearchBar}>
			<form
				className={classes["SearchBar__container"]}
				onSubmit={submitHandler}
			>
				<Modal
					isVisible={dateModalIsVisible}
					setIsVisible={setDateModalIsVisible}
				>
					<div style={calendarStyle}>
						<Calendar onGetDate={getDateHandler} />
					</div>

					<div
						style={{ height: "5.5rem", width: "20rem", position: "relative" }}
						onClick={clearDateHandler}
					>
						<RegularButtonTwo>anytime</RegularButtonTwo>
					</div>
				</Modal>

				<div style={{ height: width >= 481 ? "5.5rem" : "3.5rem" }}>
					<DoubleInput
						leftIcon={<SiGooglemaps />}
						rightIcon={<SiGooglemaps />}
						midIcon={<RiArrowLeftRightLine />}
						leftInputProps={{
							type: "text",
							placeholder: "Where from?",
							required: true,
							value: whereFrom,
							onChange: whereFromChangeHandler,
							onFocus: whereFromFocusHandler,
							onBlur: whereFromBlurHandler,
							"aria-label": "whereFrom",
						}}
						rightInputProps={{
							type: "text",
							placeholder: "Where to?",
							required: true,
							value: whereTo,
							onFocus: whereToFocusHandler,
							onChange: whereToChangeHandler,
							onBlur: whereToBlurHandler,
							"aria-label": "whereTo",
						}}
					/>

					{isSearching && (
						<SearchResults
							userInput={userInput}
							onGetResult={getResultHandler}
						/>
					)}
				</div>

				{tripType === "one way" ? (
					<SingleInput
						icon={<GoCalendar />}
						inputProps={{
							type: "date",
							placeholder: "YYYY-MM-DD",
							required: false,
							value: departureDate,
							onChange: departureDateChangeHandler,
							onFocus: dateFocusHandler,
							"aria-label": "departureDate",
						}}
					/>
				) : (
					<DoubleInput
						leftIcon={<GoCalendar />}
						rightIcon={<GoCalendar />}
						midIcon={<IoPinOutline />}
						leftInputProps={{
							type: "date",
							required: false,
							placeholder: "YYYY-MM-DD",
							value: departureDate,
							onChange: departureDateChangeHandler,
							onFocus: dateFocusHandler,
							"aria-label": "departureDate",
						}}
						rightInputProps={{
							type: "date",
							required: false,
							placeholder: "YYYY-MM-DD",
							value: returnDate,
							onChange: returnDateChangeHandler,
							onFocus: dateFocusHandler,
							"aria-label": "returnDate",
						}}
					/>
				)}

				<DoubleRadioInput
					value1="one way"
					value2="round trip"
					inputProps={{
						name: "trip type",
						onChange: tripTypeChangeHandler,
					}}
				/>

				<div>
					<SingleInput
						icon={<BsPersonFill />}
						inputProps={{
							type: "number",
							placeholder: "No. of travellers",
							min: "1",
							max: "853",
							required: true,
							value: numOfTravellers,
							onChange: numOfTravellersChangeHandler,
						}}
					/>
					<SubmitButton>search</SubmitButton>
				</div>
			</form>
		</div>
	);
};

export default SearchBar;
