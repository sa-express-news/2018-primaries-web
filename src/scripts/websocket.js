import { SocketIO } from 'mock-socket';

const init = () => new io('http://localhost:8080');

export default { init };
