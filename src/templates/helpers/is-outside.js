module.exports = (val, max) => {
	return (val === 0) || ((val / max) * 100) < 15 ? 'outside' : '';
};