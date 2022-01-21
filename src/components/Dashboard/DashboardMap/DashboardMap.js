import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Map from "../../../UI/Map/Map";
import Pin from "../../../UI/Map/Pin";
import classes from "./DashboardMap.module.css";

const DashboardMap = (props) => {
	const [pickedCities, setPickedCities] = useState([]);
	const popularDestinations = useSelector(
		(state) => state.dashboard.popularDestinations
	);
	const userCoord = useSelector((state) => state.main.userCoord);

	useEffect(() => {
		setPickedCities(popularDestinations);
	}, [popularDestinations]);

	return (
		<div className={classes.DashboardMap}>
			<Map
				backgroundColor="#e1eceb"
				borderColor="#fff"
				countryColor="#425c5a"
				borderWidth="0.5"
			>
				{pickedCities.map((city) => {
					const lat = city.coordinates[0];
					const long = city.coordinates[1];

					return (
						<Pin
							color="#c99c33"
							latitude={lat}
							longitude={long}
							city={city.city}
							key={city.id}
						/>
					);
				})}

				{userCoord && (
					<Pin
						color="red"
						latitude={userCoord[0]}
						longitude={userCoord[1]}
						city="You!"
					/>
				)}
			</Map>
		</div>
	);
};

export default DashboardMap;
