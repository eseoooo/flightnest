import classes from "./Filter.module.css";
// import RegularButtonTwo from "../../../UI/Buttons/RegularButtonTwo";
import SelectInput from "../../../UI/Inputs/SelectInput/SelectInput";
import Option from "../../../UI/Inputs/SelectInput/Option";
import { FaSortAmountUpAlt, FaSortAmountDown } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { flightActions } from "../../../store/flight-slice";
import { useState, useEffect } from "react";

const Filter = (props) => {
	const dispatch = useDispatch();
	const totalResults = useSelector((state) => state.flight.totalResults);

	const [sortValue, setSortValue] = useState(null);
	const [currency, setCurrency] = useState(
		useSelector((state) => state.flight.currency)
	);

	useEffect(() => {
		dispatch(flightActions.updateSorting(sortValue));
	}, [sortValue, dispatch]);

	useEffect(() => {
		dispatch(flightActions.updateCurrency(currency));
	}, [currency, dispatch]);

	return (
		<div className={classes.Filter}>
			<div className={classes["Filter__container"]}>
				<h2 className={classes["Filter__result"]}>results ({totalResults}) </h2>

				<div className={classes["Filter__options"]}>
					<SelectInput name="Currency" onChange={setCurrency}>
						<Option displayValue="CAD" value="CAD" />
						<Option displayValue="USD" value="USD" />
					</SelectInput>

					<SelectInput name="Sort By" onChange={setSortValue}>
						<Option
							icon={<FaSortAmountUpAlt />}
							displayValue="Low to High"
							value="asc"
						/>

						<Option
							icon={<FaSortAmountDown />}
							displayValue="High to Low"
							value="desc"
						/>
					</SelectInput>
				</div>

				{/* <div className={classes["Filter__button"]}>
					<RegularButtonTwo>filter</RegularButtonTwo>
				</div> */}
			</div>
		</div>
	);
};

export default Filter;
