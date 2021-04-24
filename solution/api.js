var express = require('express');
var router = express.Router();

let click_counter = 0;

// Task: add CORS headers middleware
router.use((req, res, next) => {
	// allow listed HTTP methods and origin
	res.set({
		'Access-Control-Allow-Headers': 'Content-Type',
		'Access-Control-Allow-Methods': 'GET',
		// change allowed origin to * to permit access from anywhere
		'Access-Control-Allow-Origin': 'http://localhost:8080'
	});

	// Bonus: when the API is on one port, allow access from origins on the other port
	if (process.env.PORT == 8080) {
		res.set({
			'Access-Control-Allow-Origin': 'http://localhost:8081'
		});
	}

	next();
});

/* Return message to GET request */
router.get('/', function (req, res, next) {
	const data = { message: "Hello world " + click_counter++ };
	res.status(200).json(data);
});

module.exports = router;
