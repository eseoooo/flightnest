import classes from "./Bookmarks.module.css";
import HeaderImage from "../../UI/HeaderImage/HeaderImage";
import BookmarksList from "../../components/Bookmarks/BookmarksList/BookmarksList";
import BookmarksFilter from "../../components/Bookmarks/BookmarksFilter/BookmarksFilter";

const Bookmarks = (props) => {
	return (
		<div className={classes.Bookmarks}>
			<HeaderImage img={""} name="bookmarks" />
			<BookmarksFilter />
			<BookmarksList />
		</div>
	);
};

export default Bookmarks;
