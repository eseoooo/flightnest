import classes from "./Destination.module.css";
// import React, { useState, useEffect } from "react";
// import Spinner from "../../../UI/Spinner/Spinner";

const Destination = (props) => {
	// const [url, setUrl] = useState("");
	// const [isLoading, setIsLoading] = useState(false);

	// const backgroundImage = import(
	// 	`./backgrounds/${Math.floor(Math.random() * 15) + 1}.svg`
	// );

	// useEffect(() => {
	// 	setIsLoading(true);
	// 	(async () => {
	// 		const response = await backgroundImage;

	// 		setUrl(response.default);
	// 		setIsLoading(false);
	// 	})();
	// }, []);

	const style = {
		backgroundImage: `url(${props.url})`,
		backgroundRepeat: "no-repeat",
		backgroundSize: "cover",
		backgroundPosition: "center",
	};

	const city = props.city.split(", ")[0];
	const country = props.city.split(", ")[1];

	// const destination = isLoading ? (
	// 	<Spinner />
	// ) : (
	// 	<div className={classes.Destination} style={style}>
	// 		<h3>{city}</h3>
	// 		<h2>{country}</h2>
	// 	</div>
	// );

	// return destination;
	return (
		<div className={classes.Destination} style={style}>
			<h3>{city}</h3>
			<h2>{country}</h2>
		</div>
	);
};

export default Destination;
//${Math.floor(Math.random() * 15) + 1}
