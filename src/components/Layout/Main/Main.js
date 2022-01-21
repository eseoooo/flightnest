import classes from "./Main.module.css";
import React, { useEffect, Suspense } from "react";
import { Switch, Route, Redirect, useHistory } from "react-router-dom";
import Spinner from "../../../UI/Spinner/Spinner";
import { useDispatch, useSelector } from "react-redux";
import { fetchAccountDetails } from "../../../store/account-actions";
import { pickPopularDestinationAsync } from "../../../store/dashboard-actions";
import {
	setUserCoordAsync,
	refreshUserAsync,
} from "../../../store/main-actions";

//prettier-ignore
const SignUp = React.lazy(() =>import("../../../UI/SignOn/SignUp"));
const SignIn = React.lazy(() => import("../../../UI/SignOn/SignIn"));
const ForgotPassword = React.lazy(() =>
	import("../../../UI/SignOn/ForgotPassword")
);
const Dashboard = React.lazy(() =>
	import("../../../pages/Dashboard/Dashboard")
);
const Flights = React.lazy(() => import("../../../pages/Flights/Flights"));
const Account = React.lazy(() => import("../../../pages/Account/Account"));
const Bookmarks = React.lazy(() =>
	import("../../../pages/Bookmarks/Bookmarks")
);

const Main = (props) => {
	const history = useHistory();
	const dispatch = useDispatch();
	const userId = useSelector((state) => state.main.userId);
	const isLoggedIn = useSelector((state) => state.main.isLoggedIn);

	useEffect(() => {
		history.push("./dashboard");
	}, [history]);

	useEffect(() => {
		userId && dispatch(fetchAccountDetails(userId));
	}, [userId, dispatch]);

	useEffect(() => {
		dispatch(pickPopularDestinationAsync());
		dispatch(setUserCoordAsync());
		dispatch(refreshUserAsync());
	}, [dispatch]);

	return (
		<section className={classes.Main}>
			<Switch>
				<Redirect exact from="/" to="/dashboard" />
				<Suspense fallback={<Spinner />}>
					<Route exact path="/dashboard" component={Dashboard} />
					<Route exact path="/flights" component={Flights} />
					{isLoggedIn && (
						<Route exact path="/bookmarks" component={Bookmarks} />
					)}
					{isLoggedIn && <Route exact path="/account" component={Account} />}
					{!isLoggedIn && <Route exact path="/sign-up" component={SignUp} />}
					{!isLoggedIn && <Route exact path="/sign-in" component={SignIn} />}
					{!isLoggedIn && (
						<Route exact path="/forgot-password" component={ForgotPassword} />
					)}
					{/* <Route path="*" component={NotFound} /> */}
				</Suspense>
			</Switch>
		</section>
	);
};

export default Main;
