// import DoubleSlider from "../../../UI/Inputs/RangeInput";
// import Map from "../../../UI/Map/Map";
import classes from "./MapFilter.module.css";
import { useSelector } from "react-redux";
import { IoIosAirplane } from "react-icons/io";
import Calendar from "../../../UI/Calendar/Calendar";

const MapFilter = (props) => {
	//prettier-ignore
	const whereFromIata = useSelector((state) => state.flight.searchParams.whereFrom);
	const whereToIata = useSelector((state) => state.flight.searchParams.whereTo);

	return (
		//prettier-ignore
		<div className={classes.MapFilter}>
			<div className={classes["MapFilter__container"]}>
				<div>
					<h4>from <span><h2>{whereFromIata}</h2></span></h4>                
					<div className={classes["MapFilter__icon"]}>
						<IoIosAirplane/>
					</div>
					<h4>to <span><h2>{whereToIata}</h2></span></h4>
				</div>

				{/* <div>
					<Map
						backgroundColor="#425c5a"
						borderColor="#fff"
						countryColor="#5b7270"
						borderWidth="0.5"
					>
						<Pin color="#c99c33" latitude={-32.5228} longitude={-55.7658} />
						<Pin color="#c99c33" latitude={6.4541} longitude={3.3947} />
					</Map>
				</div> */}

				
				{/* <form>
					<DoubleSlider label="min. price"/>
					<DoubleSlider label="max. price"/>
				</form> */}
				<Calendar/>
				
			</div>
		</div>
	);
};

export default MapFilter;
