import classes from "./Dashboard.module.css";
import HeaderImage from "../../UI/HeaderImage/HeaderImage";
import DashboardMap from "../../components/Dashboard/DashboardMap/DashboardMap";
import DisplayName from "../../components/Dashboard/DisplayName/DisplayName";
import PopularDestinations from "../../components/Dashboard/popularDestinations/popularDestinations";
import Calendar from "../../UI/Calendar/Calendar";

const Dashboard = (props) => {
	const width = window.screen.width;
	
	return (
		<div className={classes.Dashboard}>
			<HeaderImage name="dashboard" />
			<DisplayName />
			<DashboardMap />
			<PopularDestinations />
			{width >= 481 && <Calendar />}
		</div>
	);
};

export default Dashboard;
