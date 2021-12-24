const http = require("http");
const https = require("https");
const port = 2000;
const url = require("url");
const API_KEY = "prtl6749387986743898559646983194";

const server = http.createServer((request, response) => {
	const headers = {
		"Access-Control-Allow-Origin": "*",
		"Access-Control-Allow-Methods": "OPTIONS, GET",
		"Access-Control-Max-Age": 2592000, // 30 days
		"Content-Type": "application/json",
		/** add other headers as per requirement */
	};

	if (request.method === "OPTIONS") {
		response.writeHead(204, headers);
		response.end();
		return;
	}

	if (request.method === "GET") {
		const queryObject = url.parse(request.url, true).query;
		const {
			country,
			currency,
			locale,
			whereFrom,
			whereTo,
			departureDate,
			returnDate,
		} = queryObject;

		const skyScannerPath = `/apiservices/browsequotes/v1.0/${country}/${currency}/${locale}/${whereFrom}/${whereTo}/${departureDate}/${returnDate}?apiKey=${API_KEY}`;
		const options = {
			hostname: "partners.api.skyscanner.net",
			port: 443,
			path: skyScannerPath,
			method: "GET",
		};

		/*-------------------------------------------------------*/
		const req = https.request(options, (res) => {
			let data = "";
			response.writeHead(res.statusCode, headers);
			console.log(`statusCode: ${res.statusCode}`);

			res.setEncoding("utf-8").on("data", (d) => {
				console.log(d.length);
				data += d;
				
			});

			res.on("end", () => {
				try {
					response.write(JSON.stringify(data));
					response.end();
				} catch (error) {
					response.writeHead(res.statusCode, headers);
					response.end(`There was a problem getting flight results. Please try again!`);
				}
			});
		});

		req.on("error", (error) => {
			console.error(error);
		});

		req.end();
		return;
	}
});

server.listen(port, () => {
	console.log(`Server running at port ${port}`);
});
