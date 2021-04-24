var express = require('express');
var router = express.Router();

let click_counter = 0;

// Task: add CORS headers middleware



/* Return message to GET request */
router.get('/', function (req, res, next) {
	const data = { message: "Hello world " + click_counter++ };
	res.status(200).json(data);
});

module.exports = router;
