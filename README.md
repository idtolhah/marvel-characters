# Marvel Characters API

This project is intended to fetch Marvel's characters data and simplify the response. </br >
There are two main endpoints:</br >
- /characters to receive 100 characters id
- /characters/{id} to receive one character based on the id consist of id, name, and description of the character
And a Swagger API docs
- /api-docs

## Use environment variables
The environment variables are saved in .env file under src directory. The file contains:
```
NODE_ENV = development
HOST = http://localhost
PORT = 8080
BASE_URL = https://gateway.marvel.com:443
PUBLIC_KEY = <<YOUR_PUBLIC_KEY>>
PRIVATE_KEY = <<YOUR_PRIVATE_KEY>>
AUTHOR = Tolhah
CHARACTERS_URI = /v1/public/characters
```

Hints:
- NODE_ENV is the app environment you are using
- HOST is the host where you want the app run in
- PORT is the port number
- BASE_URL is Marvel's base url (API gateway)
- PUBLIC_KEY is your Public Key you have got from Marvel Developer Portal
- PRIVATE_KEY is your Private Key you have got from Marvel Developer Portal
- AUTHOR is an author's name info for Swagger
- CHARACTERS_URI is the uri of character's endpoint

## Steps to install dependencies, test, build and run the app

To install all the dependencies needed for the project, in the project directory, you can run:
### `npm install`
<hr />

To run the app in the development mode, run:
### `npm start`
Open:
- [http://localhost:8080/characters](http://localhost:8080/characters) for the first endpoint
- [http://localhost:8080/characters/1016823](http://localhost:8080/characters/1016823) for the second endpoint
to view it in the browser. <br />
The page will reload if you make edits.
<hr />

To launch the test runner in the interactive watch mode using jest, run:
### `npm test`
<hr />

To build the app for production to the `build` directory, run:
### `npm run build`
It correctly bundles the project in production mode and optimizes the build for the best performance.
<hr />

To run production build, make sure you already install pm2. If you do not install it yet, run:
### `npm install -g pm2`

Then run it with:
### `pm2 start ./build/index.js`

Or, you can also build and run it with a single command:
### `npm run prod`
