// import { SocketIO, Server } from 'mock-socket';
import io from "socket.io-client";
// import data from './pseudo-data';

// const mockServer = () => {
// 	// psuedo crap we'll replace;

// 	const server = new Server('http://localhost:8081');

// 	const mockEvent = data => (data)

// 	server.on('connection', server => {
// 		server.emit('update', mockEvent(data));
// 	});

// 	window.io = SocketIO;

// 	const mockTimeout = time => setTimeout(() => server.emit('update', mockEvent('Modified!')), time);

// 	return {
// 		server,
// 		mockEvent,
// 		mockTimeout,
// 	};
// };

// const init = () => new io('http://localhost:8081');

// export default { init, mockServer };

export default io;