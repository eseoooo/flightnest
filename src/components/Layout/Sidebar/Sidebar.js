import classes from "./Sidebar.module.css";
import UserDetails from "./UserDetails/UserDetails";
import UserOptionsList from "./UserOptionsList/UserOptionsList";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Sidebar = (props) => {
	//prettier-ignore
	const sidebarIsVisibleRedux = useSelector((state) => state.main.sidebarIsVisible);
	const [sidebarIsVisible, setSidebarIsVisible] = useState(false);
	const [windowWidth, setWindowWidth] = useState(window.innerWidth);

	const debounce = function (callback, ms) {
		let timer;
		return () => {
			clearTimeout(timer);
			timer = setTimeout(() => {
				timer = null;
				callback.apply(this, arguments);
			}, ms);
		};
	};

	useEffect(() => {
		setSidebarIsVisible(sidebarIsVisibleRedux);
	}, [sidebarIsVisibleRedux]);
	

	useEffect(() => {
		const debouncePageResize = debounce(
			() => setWindowWidth(window.innerWidth),
			1000
		);
		window.addEventListener("resize", debouncePageResize);

		return () => window.removeEventListener("resize", debouncePageResize);
	});

	let style;
	if (windowWidth <= 1201) {
		style = sidebarIsVisible
			? { transform: "translate(0)", width: "35rem" }
			: { transform: "translate(-35rem)", width: "35rem" };
	}

	if (windowWidth > 1201) {
		style = sidebarIsVisible ? { width: "35rem" } : null;
	}
	

	return (
		<section className={classes.Sidebar} style={style}>
			<UserDetails />
			<UserOptionsList />
		</section>
	);
};

export default Sidebar;
