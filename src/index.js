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
