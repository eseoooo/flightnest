import Result, { FirstResult, LastResult } from "./Result/Result";
import ResultData from "./Result/ResultData";
import classes from "./Results.module.css";
import NoResult from "../../../UI/NoResult/NoResult";
import Spinner from "../../../UI/Spinner/Spinner";
import { GiCommercialAirplane } from "react-icons/gi";
import { BsSearch } from "react-icons/bs";
import { useSelector, useDispatch } from "react-redux";
import { bookmarkActions } from "../../../store/bookmark-slice";
import { sendBookmarks } from "../../../store/bookmark-actions";
import { useState, useEffect } from "react";

const Results = (props) => {
	const [resultSorting, setResultSorting] = useState(null);
	const sorting = useSelector((state) => state.flight.resultsSorting);
	useEffect(() => {
		setResultSorting(sorting);
	}, [sorting]);

	const searchHeading = `Ops, there's nothing here...`;
	const searchParagraph1 = `Start searching for available flights!`;
	const searchParagraph2 = ``;

	const noResultHeading = `Oh snap! We can't find any available flights`;
	const noResultParagraph1 = `Try entering a new airport or rewording your search`;
	const noResultParagraph2 = ``;
	const dispatch = useDispatch();

	const bookmarks = useSelector((state) => state.bookmark.bookmarks);
	const isLoading = useSelector((state) => state.flight.resultIsLoading);
	const isSearching = useSelector((state) => state.flight.isSearching);
	const totalResults = useSelector((state) => state.flight.totalResults);
	const results = useSelector((state) => state.flight.results)
		.slice()
		.sort((resultOne, resultTwo) => {
			if (resultSorting === "asc")
				return resultOne.sortingPrice - resultTwo.sortingPrice;
			if (resultSorting === "desc")
				return resultTwo.sortingPrice - resultOne.sortingPrice;
			return 0;
		});

	// check for already bookmarked results
	const modifiedResults =
		totalResults > 0 &&
		results.map((result) => {
			const isBookmarked = bookmarks.some((bookmark) => {
				return (
					bookmark.price === result.price &&
					bookmark.departure.carrier === result.departure.carrier &&
					bookmark?.return?.carrier === result?.return?.carrier &&
					bookmark.quoteDateTime === result.quoteDateTime &&
					bookmark.direct === result.direct
				);
			});

			if (isBookmarked) {
				return {
					...result,
					isBookmarked: true,
				};
			}
			return result;
		});

	const firstResult = modifiedResults[0];
	const lastResult = totalResults > 1 ? modifiedResults.slice(-1)[0] : [];
	const otherResults =
		totalResults > 2 ? modifiedResults.slice(1, totalResults - 1) : [];

	const bookmarksArray = useSelector((state) => state.bookmark.bookmarks);
	const userId = useSelector((state) => state.main.userId);

	const bookmarkClickHandler = (flightData) => {
		dispatch(bookmarkActions.toggleBookmark(flightData));
	};

	useEffect(() => {
		dispatch(sendBookmarks(bookmarksArray, userId));
	}, [bookmarksArray, userId, dispatch]);

	return (
		<div className={classes.Results}>
			{!isSearching && (
				<NoResult
					icon={<GiCommercialAirplane />}
					heading={searchHeading}
					paragraph1={searchParagraph1}
					paragraph2={searchParagraph2}
				/>
			)}

			{isLoading && <Spinner />}

			{!isLoading && isSearching && totalResults === 0 && (
				<NoResult
					icon={<BsSearch />}
					heading={noResultHeading}
					paragraph1={noResultParagraph1}
					paragraph2={noResultParagraph2}
				/>
			)}

			{!isLoading && isSearching && totalResults !== 0 && (
				<FirstResult>
					<ResultData
						departureDate={firstResult.departure.date}
						departureWhereFromIata={firstResult.departure.whereFromIata}
						departureWhereToIata={firstResult.departure.whereToIata}
						departureCarrier={firstResult.departure.carrier}
						returnDate={firstResult.return.date}
						returnWhereFromIata={firstResult.return.whereFromIata}
						returnWhereToIata={firstResult.return.whereToIata}
						returnCarrier={firstResult.return.carrier}
						price={firstResult.price}
						direct={firstResult.direct}
						isBookmarked={firstResult.isBookmarked}
						onBookmarkClick={bookmarkClickHandler}
						result={firstResult}
						numOfTravellers={firstResult.numOfTravellers}
					/>
				</FirstResult>
			)}

			{!isLoading &&
				isSearching &&
				totalResults > 2 &&
				otherResults.map((otherResult) => {
					return (
						<Result key={otherResult.id}>
							<ResultData
								departureDate={otherResult.departure.date}
								departureWhereFromIata={otherResult.departure.whereFromIata}
								departureWhereToIata={otherResult.departure.whereToIata}
								departureCarrier={otherResult.departure.carrier}
								returnDate={otherResult.return.date}
								returnWhereFromIata={otherResult.return.whereFromIata}
								returnWhereToIata={otherResult.return.whereToIata}
								returnCarrier={otherResult.return.carrier}
								price={otherResult.price}
								direct={otherResult.direct}
								isBookmarked={otherResult.isBookmarked}
								onBookmarkClick={bookmarkClickHandler}
								result={otherResult}
								numOfTravellers={otherResult.numOfTravellers}
							/>
						</Result>
					);
				})}

			{!isLoading && isSearching && totalResults > 1 && (
				<LastResult>
					<ResultData
						departureDate={lastResult.departure.date}
						departureWhereFromIata={lastResult.departure.whereFromIata}
						departureWhereToIata={lastResult.departure.whereToIata}
						departureCarrier={lastResult.departure.carrier}
						returnDate={lastResult.return.date}
						returnWhereFromIata={lastResult.return.whereFromIata}
						returnWhereToIata={lastResult.return.whereToIata}
						returnCarrier={lastResult.return.carrier}
						price={lastResult.price}
						direct={lastResult.direct}
						isBookmarked={lastResult.isBookmarked}
						onBookmarkClick={bookmarkClickHandler}
						result={lastResult}
						numOfTravellers={lastResult.numOfTravellers}
					/>
				</LastResult>
			)}
		</div>
	);
};

export default Results;

/*<Result>
						<ResultData />
					</Result>,
					<Result>
						<ResultData />
					</Result>,
					<Result>
						<ResultData />
					</Result>,
					<Result>
						<ResultData />
					</Result>,
					<Result>
						<ResultData />
					</Result>,
					<Result>
						<ResultData />
					</Result>,
					<LastResult>
						<ResultData />
					</LastResult>, */
