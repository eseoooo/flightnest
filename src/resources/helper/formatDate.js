const formatDate = (dateStr) => {
	//prettier-ignore
	const monthStr = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul","Aug", "Sep", "Oct", "Nov","Dec"];
	const date = new Date(dateStr);
	const month = date.getMonth();
	const year = date.getFullYear();
	const day = (date.getDate() + "").padStart(2, "0");

	return `${monthStr[month]} ${day}, ${year}`;
};

export default formatDate