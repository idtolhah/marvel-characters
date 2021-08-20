This project is intended to fetch Marvel's characters data and simplify the response
There are two endpoints:
    /characters to receive 100 characters id
    /characters/{id} to receive one character based on the id consist of id, name, and description of the character

## Available Scripts

In the project directory, you can run:

### `npm install`

To install all the dependencies needed for the project.<br />

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:8080/characters](http://localhost:8080/characters) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode using jest.<br />

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles the project in production mode and optimizes the build for the best performance.

To run production build, make sure we install pm2.

### `npm install -g pm2`

Then run it

### `pm2 start ./build/index.js`
