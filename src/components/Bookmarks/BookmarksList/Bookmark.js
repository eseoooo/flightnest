import classes from "./Bookmark.module.css";

const Bookmark = (props) => {
	return (
		<div className={classes.Bookmark}>
			{/* <div className={classes["Bookmark__checkbox"]}>
				<input type="checkbox"></input>
				<span></span>
			</div> */}

			<div className={classes["Bookmark__data"]}>{props.children}</div>
		</div>
	);
};

export default Bookmark;
