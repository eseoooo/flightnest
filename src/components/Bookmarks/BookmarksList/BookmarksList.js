import Bookmark from "./Bookmark";
import classes from "./BookmarksList.module.css";
import ResultData from "../../Flights/Results/Result/ResultData";
import NoResult from "../../../UI/NoResult/NoResult";
import { GiBookmark } from "react-icons/gi";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import formatDateTime from "../../../resources/helper/formatDateTime";
import { bookmarkActions } from "../../../store/bookmark-slice";
import { sendBookmarks } from "../../../store/bookmark-actions";

const BookmarksList = (props) => {
	const bookmarks = useSelector((state) => state.bookmark.bookmarks);
	const userId = useSelector((state) => state.main.userId);
	const dispatch = useDispatch();

	const heading = `Ops, there's nothing here...`;
	const paragraph1 = `Looks like you don't have any bookmarks yet`;
	const paragraph2 = ``;
	const width = window.screen.width;

	const bookmarkClickHandler = (flightData) => {
		dispatch(bookmarkActions.toggleBookmark(flightData));
	};

	useEffect(() => {
		dispatch(sendBookmarks(bookmarks, userId));
	}, [bookmarks, userId, dispatch]);

	// useEffect(() => {}, [bookmarks]);

	return (
		<form className={classes.BookmarksList}>
			{bookmarks.length > 0 &&
				bookmarks.map((bookmark) => {
					return (
						<div
							key={bookmark.bookmarkInfo.bookmarkId}
							className={classes["BookmarksList__item"]}
						>
							<Bookmark>
								<ResultData
									departureDate={bookmark.departure.date}
									departureWhereFromIata={bookmark.departure.whereFromIata}
									departureWhereToIata={bookmark.departure.whereToIata}
									departureCarrier={bookmark.departure.carrier}
									returnDate={bookmark.return.date}
									returnWhereFromIata={bookmark.return.whereFromIata}
									returnWhereToIata={bookmark.return.whereToIata}
									returnCarrier={bookmark.return.carrier}
									price={bookmark.price}
									direct={bookmark.direct}
									isBookmarked={bookmark.isBookmarked}
									onBookmarkClick={bookmarkClickHandler}
									result={bookmark}
									numOfTravellers={bookmark.numOfTravellers}
								/>
							</Bookmark>
							{width >= 481 && (
								<div className={classes["BookmarksList__item--data"]}>
									<h5>
										date bookmarked:
										<strong>
											{formatDateTime(bookmark.bookmarkInfo.dateBookmarked)}
										</strong>
									</h5>
									<h5>
										price as at:
										<strong>{formatDateTime(bookmark.quoteDateTime)}</strong>
									</h5>
									<h5>
										bookmark id:
										<strong>{bookmark.bookmarkInfo.bookmarkId}</strong>
									</h5>
								</div>
							)}
						</div>
					);
				})}

			{bookmarks.length === 0 && (
				<NoResult
					icon={<GiBookmark />}
					heading={heading}
					paragraph1={paragraph1}
					paragraph2={paragraph2}
				/>
			)}
		</form>
	);
};

export default BookmarksList;
