import classes from "./HeaderImage.module.css";

const HeaderImage = (props) => {
	return (
		<div className={classes.HeaderImage}>
			<h1>{props.name}</h1>
		</div>
	);
};

export default HeaderImage;
