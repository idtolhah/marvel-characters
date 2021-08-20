This project is intended to fetch Marvel's characters data and simplify the response
There are two endpoints:
    /characters to receive 100 characters id
    /characters/{id} to receive one character based on the id consist of id, name, and description of the character

## Available Scripts

To install all the dependencies needed for the project, in the project directory, you can run:
### `npm install`
<br />

To run the app in the development mode, run:
### `npm start`
Open:
- [http://localhost:8080/characters](http://localhost:8080/characters) for the first endpoint
- [http://localhost:8080/characters/1016823](http://localhost:8080/characters/1016823) for the second enpoint
to view it in the browser.
The page will reload if you make edits.<br />
You will also see any lint errors in the console.
<br />

To launch the test runner in the interactive watch mode using jest, run:
### `npm test`
<br />

Builds the app for production to the `build` folder, run:
### `npm run build`
It correctly bundles the project in production mode and optimizes the build for the best performance.
<br />

To run production build, make sure you already install pm2. If you do not install it yet, run:
### `npm install -g pm2`

Then run it with:
### `pm2 start ./build/index.js`
