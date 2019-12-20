# Meeting Buster

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).


# Installation

## Ubuntu, raspberry PI + Raspbian Installation

Works on raspberry PI Zero W with raspbian buster lite.


```bash
sudo apt-get install libbluetooth-dev nodejs npm
npm install
cd client && npm install
cd ..
```
For other or olders distros [https://linuxize.com/post/how-to-install-node-js-on-raspberry-pi/]

 * Copy the sample config file .env.sample to .env
 * Edit .env file to suit your setup
## Available Scripts for development

In the project directory, you can run:

### `yarn reactonly`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The backend will NOT be started again by nodemon upon modification

### `yarn dev`

Launches the backend and the frontend in development mode.<br>





## Production

### Build the React frontend

`cd client && npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

### Launch the NodeJS server

`npm start`

Then point to http://localhost:8000 and the frontend will be served by the node backend.


## TODO
  * reset button
  * Add a new stopwatch for a particular meeting
  * ensure .env file is present

# CREDITS
  logo from [https://publicdomainvectors.org]

# LICENSE
  This software is released under CECILL v2 Opensource License.
