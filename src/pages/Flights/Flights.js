import classes from "./Flights.module.css";
import SearchBar from "../../components/Flights/SearchBar/SearchBar";
import Filter from "../../components/Flights/Filter/Filter";
import Results from "../../components/Flights/Results/Results";
import MapFilter from "../../components/Flights/MapFilter/MapFilter";
import HeaderImage from "../../UI/HeaderImage/HeaderImage";
import { useDispatch } from "react-redux";
import { flightActions } from "../../store/flight-slice";

// import flightsImg from '../../resources/images/flights-header.jpg'

const Flights = (props) => {
	const dispatch = useDispatch();
	dispatch(flightActions.resetState());
	const width = window.screen.width;

	return (
		<div className={classes.Flights}>
			<HeaderImage img={""} name="flights" />
			<SearchBar />
			<Filter />
			<Results />
			{width >= 481 && <MapFilter />}
		</div>
	);
};

export default Flights;
