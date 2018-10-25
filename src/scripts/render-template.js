// import js
import parseData from './parse-data';

// import main landing page template
import landingPage from '../templates/landing-page.hbs';

export default (el, socket) => {
	socket.on('update', data => {
		el.innerHTML = landingPage(parseData(data));
	});
};
