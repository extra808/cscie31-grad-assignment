console.log('script loaded.');

function testAPI(port) {
	// use current protocol and domain with port number passed to the function
	const base_url = location.protocol + '//' + location.hostname + ':' + port;
	console.log('base_url: ' + base_url);

	// make the API request
	fetch(base_url + '/api')
		.then(response => response.json())
		.then(data => {
			// log the message and append it to the corresponding output element
			console.log(data.message);
			document.querySelector('#output' + port).innerHTML += `<div>${data.message}</div>`;
		})
		.catch(err => {
			// log errors in the console and the corresponding output element
			console.error('Error ' + err);
			document.querySelector('#output' + port).innerHTML += `<div>Error</div>`;
		});
}

// Attach function to button's click event
document.querySelector('#test8080').addEventListener("click", () => {
	testAPI(8080);
});

// Attach function to button's click event
document.querySelector('#test8081').addEventListener("click", () => {
	testAPI(8081);
});
