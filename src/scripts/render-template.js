// import js
import parseData from './parse-data';

// import main landing page template
import landingPage from '../templates/landing-page.hbs';

const hydrateLP = data => landingPage(data)

export default (el, socket) => {
	socket.on('update', data => {
		el.innerHTML = hydrateLP(parseData(data));
	})
};
