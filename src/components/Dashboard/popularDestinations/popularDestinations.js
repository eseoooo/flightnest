import Destination from "./Destination";
import classes from "./popularDestinations.module.css";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";


const PopularDestinations = (props) => {
	const [pickedCities, setPickedCities] = useState([]);
	const popularDestinations = useSelector(
		(state) => state.dashboard.popularDestinations
	);

	useEffect(() => {
		setPickedCities(popularDestinations);
	}, [popularDestinations]);

	return (
		<div className={classes.PopularDestinations}>
			{pickedCities.map((city) => {
				return <Destination city={city.city} key={city.id} url={city.imageUrl} />;
			})}
		</div>
	);
};

export default PopularDestinations;
