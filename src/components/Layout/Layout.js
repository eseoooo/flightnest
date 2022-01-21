import { Fragment } from "react";
import Sidebar from './Sidebar/Sidebar'
import Main from './Main/Main'
import MainHeader from "./MainHeader/MainHeader"

const Layout = (props) => {
	return (
		<Fragment>
			<MainHeader/>
			<Sidebar />
			<Main />
		</Fragment>
	);
};

export default Layout