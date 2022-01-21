import classes from "./ResultData.module.css";
import { GiAirplaneDeparture, GiAirplaneArrival } from "react-icons/gi";
import { MdPerson } from "react-icons/md";
import { BsFillBookmarkFill, BsBookmark } from "react-icons/bs";
import { useState } from "react";
import { useSelector } from "react-redux";
import formatDate from "../../../../resources/helper/formatDate";
import Tooltip from "../../../../UI/Tooltip/Tooltip";

const ResultData = (props) => {
	const [isBookmarked, setIsBookmarked] = useState(props.isBookmarked);
	const [inboundIsVisible, setInboundIsVisible] = useState(false);
	const isLoggedIn = useSelector((state) => state.main.isLoggedIn);

	const checkForReturnFlight = () => {
		return (
			props.returnWhereFromIata === "" &&
			props.returnWhereToIata === "" &&
			props.returnCarrier === ""
		);
	};

	const bookmarkHandler = () => {
		props.onBookmarkClick(props.result);
		setIsBookmarked((prevState) => !prevState);
	};

	const toggleInboundIsVisibleHandler = () => {
		!checkForReturnFlight() && setInboundIsVisible((prevState) => !prevState);
	};

	return (
		<div className={classes.ResultData}>
			<div className={classes["ResultData__item"]}>
				<h3>{props.departureWhereFromIata}</h3>
				<GiAirplaneDeparture />
			</div>

			<div className={classes["ResultData__item"]}>
				<h5>{props.departureCarrier}</h5>
				<h4 style={{ color: "#c99c33" }}>{formatDate(props.departureDate)}</h4>
				<h4>{props.direct ? "non-stop" : "one-stop"}</h4>
			</div>

			<div className={classes["ResultData__item"]}>
				<h3>{props.departureWhereToIata}</h3>
				<GiAirplaneArrival />
			</div>

			<div className={classes["ResultData__item"]}>
				<h4 style={{ fontWeight: "700" }}>{props.price}</h4>
				<h5
					onClick={toggleInboundIsVisibleHandler}
					style={{ cursor: checkForReturnFlight() && "not-allowed" }}
					className={classes["ResultData__item--outbound"]}
				>
					<Tooltip
						right="50%"
						bottom="-300%"
						color="white"
						text={
							checkForReturnFlight()
								? "One way! No return flight available"
								: ""
						}
					>
						outbound
					</Tooltip>
				</h5>
				<div
					style={{
						display: " flex",
						justifyContent: "center",
						alignItems: "center",
					}}
				>
					<MdPerson />
					<h4>{props.numOfTravellers}</h4>
				</div>
				<div
					onClick={isLoggedIn ? bookmarkHandler : null}
					style={{ cursor: isLoggedIn ? "pointer" : "not-allowed" }}
				>
					<Tooltip
						right="100%"
						top="0%"
						color="white"
						text={!isLoggedIn ? "Sign up to save flights!" : ""}
					>
						{isBookmarked ? <BsFillBookmarkFill /> : <BsBookmark />}
					</Tooltip>
				</div>
			</div>

			{inboundIsVisible && (
				<div className={classes["ResultData__inbound"]}>
					<div className={classes["ResultData__item"]}>
						<h3>{props.returnWhereFromIata}</h3>
						<GiAirplaneDeparture />
					</div>

					<div className={classes["ResultData__item"]}>
						<h5>{props.returnCarrier}</h5>
						<h4 style={{ color: "#c99c33" }}>{formatDate(props.returnDate)}</h4>
						<h4>{props.direct ? "non-stop" : "one-stop"}</h4>
					</div>

					<div className={classes["ResultData__item"]}>
						<h3>{props.returnWhereToIata}</h3>
						<GiAirplaneArrival />
					</div>

					<div className={classes["ResultData__item"]}>
						<h4 style={{ fontWeight: "700" }}>{props.price}</h4>
						<h5
							onClick={toggleInboundIsVisibleHandler}
							className={classes["ResultData__item--inbound"]}
						>
							inbound
						</h5>

						<div
							style={{
								display: " flex",
								justifyContent: "center",
								alignItems: "center",
							}}
						>
							<MdPerson />
							<h4>{props.numOfTravellers}</h4>
						</div>

						<div onClick={bookmarkHandler}>
							{isBookmarked ? <BsFillBookmarkFill /> : <BsBookmark />}
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default ResultData;
