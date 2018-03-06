// import js files
import render from './scripts/render-template';
import io from './scripts/websocket';

// import stylesheets files
import './styles/main.scss';

const main = document.createElement('div');
main.classList.add('main');
document.body.appendChild(main);

const socket = io("http://localhost:8787", {
	path: "/2018-primary-elections"
});

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