# CSCI E-31 Graduate Credit Assignment

This practice set demonstrates [Cross-Origin Resource Sharing (CORS)](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) can restrict responses to requests coming from code delivered from a different server.

## Instructions

1. Clone this repo to your computer.
2. Run `npm install` to install the required code.
3. Run `npm run start-dev`; this will use the repo's code to start *two* web servers, [http://localhost:8080](http://localhost:8080) and [http://localhost:8081](http://localhost:8081).
4. Open both web servers in separate browser windows or tab and try both "Test" buttons. You'll find the button testing API access to the server on a port number different than the one in the browser window has no output and causes a CORS error in the browser console.

## Tasks

1. Add middleware to `routes/api.js` to set the necessary CORS headers for both test buttons to work only for origin [http://localhost:8080](http://localhost:8080). One button should continue to cause errors in the [http://localhost:8081](http://localhost:8081) window.
2. Now change the middleware to allow access from anywhere.

Bonus: Change the middleware to allow access from both origins and no others.

[Example solution in `solution/api.js`]
