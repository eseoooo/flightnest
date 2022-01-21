import { createSlice } from "@reduxjs/toolkit";

const bookmarkSlice = createSlice({
	name: "bookmark",
	initialState: {
		bookmarks: [],
		totalBookmarks: 0,
	},
	reducers: {
		setBookmarks(state, action) {
			state.bookmarks = action.payload.bookmarks;
			if (
				action.payload.bookmarks === "[]" ||
				action.payload.bookmarks === null ||
				action.payload.bookmarks === undefined
			) {
				state.bookmarks = [];
			}

			state.totalBookmarks = state.bookmarks.length;
		},

		toggleBookmark(state, action) {
			let isDuplicate = false;

			//check for duplicate before add/remove
			const newBookmark = action.payload;
			isDuplicate = state.bookmarks.some((bookmark) => {
				return (
					bookmark.price === newBookmark.price &&
					bookmark.departure.carrier === newBookmark.departure.carrier &&
					bookmark?.return?.carrier === newBookmark?.return?.carrier &&
					bookmark.quoteDateTime === newBookmark.quoteDateTime &&
					bookmark.direct === newBookmark.direct
				);
			});

			if (!isDuplicate) {
				//add bookmark
				const timeStamp = Date.now();
				state.bookmarks.push({
					...action.payload,
					isBookmarked: true,
					bookmarkInfo: {
						dateBookmarked: new Date(timeStamp).toISOString(),
						bookmarkId: timeStamp,
					},
				});

				state.totalBookmarks++;
			}

			if (isDuplicate) {
				//remove bookmark
				const index = state.bookmarks.findIndex((bookmark) => {
					return (
						bookmark.price === newBookmark.price &&
						bookmark.departure.carrier === newBookmark.departure.carrier &&
						bookmark?.return?.carrier === newBookmark?.return?.carrier &&
						bookmark.quoteDateTime === newBookmark.quoteDateTime &&
						bookmark.direct === newBookmark.direct
					);
				});

				state.bookmarks.splice(index, 1);
				state.totalBookmarks--;
			}
		},
	},
});

export default bookmarkSlice;
export const bookmarkActions = bookmarkSlice.actions;
