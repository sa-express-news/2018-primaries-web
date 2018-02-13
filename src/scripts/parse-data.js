import { setMax, setPriority } from './utils';

export default data => {
	if (data.primaries) {
		const primaries = data.primaries.map(primary => {
			primary = setMax(primary);
			primary = setPriority(primary);
			return primary;
		});
		return Object.assign({}, data, { primaries });
	} else {
		return data;
	}
};