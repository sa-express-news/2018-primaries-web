import landingPage from './templates/landing-page.hbs';

import './index.css';

document.addEventListener("DOMContentLoaded", function () {
	var div = document.createElement('div');
	div.innerHTML = landingPage({
		race: [
			{ title: 'First'},
			{ title: 'Second'},
			{ title: 'Third'},
		],
	});
	document.body.appendChild(div);
});