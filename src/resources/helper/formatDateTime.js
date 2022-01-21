const formatDateTime = (dateStr) => {
	const dateTime = new Date(dateStr);

	const year = dateTime.getFullYear();
	const month = (dateTime.getMonth() + 1 + "").padStart(2, "0");
	const day = (dateTime.getDate() + "").padStart(2, "0");

	const mm = (dateTime.getMinutes() + "").padStart(2, "0");
	const hh = (dateTime.getHours() + "").padStart(2, "0");

	return `${year}-${month}-${day} ${hh}:${mm}`;
};

export default formatDateTime
