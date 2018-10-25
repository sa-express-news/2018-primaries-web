// import js files
import render from './scripts/render-template';
import websocket from './scripts/websocket';

// import stylesheets files
import './styles/main.scss';

const main = document.createElement('div');
main.classList.add('main');

// If we're in the WCM, we want to append the content to the '.subsection_wrap' div

const subsection = document.querySelector('div.subsection_wrap');

if (subsection) {
	subsection.appendChild(main);
} else {
	document.body.appendChild(main);
}
// const socket = io("https://expressnewsdata.com", {
// 	path: "/elections/2018-primary-elections"
// });

// mock server
const mockServer = websocket.mockServer();
mockServer.mockTimeout(4000);
// end mock server

const socket = websocket.init();


const fixShareLinks = () => {
	const twitterButton = document.querySelector("a.twitter-share-button");
	twitterButton.href = "https://twitter.com/intent/tweet?url=https%3A%2F%2Fwww.expressnews.com%2F2018-primary-results%2F&text=Track%20Texas%20primaries%20with%20the%20@ExpressNews";
	const facebookButton = document.querySelector("a.facebook-share-button");
	facebookButton.href = "https://www.facebook.com/sharer/sharer.php?u=https://www.expressnews.com/2018-primary-results/";
}

render(main, socket);

window.onscroll = function () { follow() };
var menuNav = document.getElementById("menuNav");
var snap = menuNav.offsetTop;
function follow() {
	if (window.pageYOffset >= snap) {
		menuNav.classList.add("snap")
	} else {
		menuNav.classList.remove("snap");
	}
}

fixShareLinks();
