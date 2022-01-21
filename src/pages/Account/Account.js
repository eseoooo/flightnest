import classes from "./Account.module.css";
import HeaderImage from "../../UI/HeaderImage/HeaderImage";
import AccountForm from "../../components/Account/AccountForm/AccountForm";
import Avatar from "../../components/Account/Avatar/Avatar";

const Account = (props) => {
	return (
		<div className={classes.Account}>
			<HeaderImage name="account" />
			<Avatar />
			<AccountForm />
		</div>
	);
};

export default Account;
