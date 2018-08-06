# What is this?
This repo contains the front-end code for the San Antonio Express-News 2018 Primary election results realtime graphics page. It is written in Handlebars & Sass. Webpack & Babel are used for building, hot reloading and compiling ES6/Sass.

# Getting started
In your computer's console:

 - Download the repo: `git clone https://github.com/sa-express-news/2018-primaries-web.git`
 - Enter the directory: `cd 2018-primaries-web`
 - Install the dependencies: `npm install`
 - Run the app in dev mode: `npm run start`

This should run the application on port `8080`.

# Directory structure
All application files are stored in the `src` directory with the main entrypoints being `index.html` and `index.js`. When the `build` script is run, the resulting production `index.html` file will include the CSS and JS dependency calls.

`index.html` defines the HTML for the page title and navigation. The charts will be appended to its body by `index.js`. `index.js` opens the websocket, grabs the election data from the socket and then passes it to the render function.

## `scripts/`
The files in the `scripts` directory are utilized to open the websocket, parse the data returned from the socket and to pass the data to the Handlebars templates.

## `templates/`
Here live the Handlebars templates. `landing-page.hbs` is the main entrypoint. `partials/` includes the chart templates. `helpers/` includes Handlebars helpers used to make data modifications for stylistic purposes.

## `styles/`
These are our Sass files. The entrypoint is `main.scss` and any new Sass files created will need to be added to this file.

# Building the project
Running `npm run build` will compile the app into a `dist/` directory with an `html`, `js` and `css` file. These three will need to be pushed to AWS, the WCM or anywhere else you intend to deploy the application.
