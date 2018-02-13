import { SocketIO, Server } from 'mock-socket';

// import js files
import websocket 	from './scripts/websocket';
import render		from './scripts/render-template';

// import stylesheets files
import './styles/main.scss';

// mock server
const mockServer = new Server('http://localhost:8080');
const mockEvent = title => ({
	race: [
		{ title: 'First'},
		{ title: 'Second'},
		{ title: title},
	]
})
mockServer.on('connection', server => {
	mockServer.emit('update', mockEvent('Third'));
});
window.io = SocketIO;
// end mock server

const socket = websocket.init();

const main = document.createElement('div');
main.classList.add('main');
document.body.appendChild(main);

render(main, socket);

setTimeout(() => mockServer.emit('update', mockEvent('Modified!')), 4000);
