// import js files
import websocket 	from './scripts/websocket';
import render		from './scripts/render-template';

// import stylesheets files
import './styles/main.scss';

// mock server
const mockServer = websocket.mockServer();
//mockServer.mockTimeout(4000);
// end mock server

const socket = websocket.init();

const main = document.createElement('div');
main.classList.add('main');
document.body.appendChild(main);

render(main, socket);

window.onscroll = function() {follow()};
var menuNav = document.getElementById("menuNav");
var snap = menuNav.offsetTop;
function follow() {
	if (window.pageYOffset >= snap) {
		menuNav.classList.add("snap")
	} else {
		menuNav.classList.remove("snap");
	}
}