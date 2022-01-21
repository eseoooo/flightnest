const racePromise = (timeToResolveInSec, resolvedValue) => {
	return new Promise((resolve, reject) => {
		setTimeout(resolve, timeToResolveInSec * 1000, resolvedValue);
	});
};

export default racePromise