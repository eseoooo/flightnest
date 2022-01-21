import Bookmark from "../BookmarksList/Bookmark";
import classes from "./BookmarksFilter.module.css";
import { useSelector } from "react-redux";

const BookmarksFilter = (props) => {
	const totalBookmarks = useSelector((state) => state.bookmark.totalBookmarks);
	
	return (
		<div className={classes.BookmarksFilter}>
			<Bookmark>
				<h2>BOOKMARKS ({totalBookmarks})</h2>
			</Bookmark>
		</div>
	);
};

export default BookmarksFilter;
