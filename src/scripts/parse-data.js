import { mapPrimaryToPrioritiesObj } from './utils';

export default data => {
	if (data.primaries) {
		const primaries = data.primaries.reduce(mapPrimaryToPrioritiesObj, { priority: [], secondary: [], tertiary: [] });
		return Object.assign({}, data, { primaries });
	} else {
		return data;
	}
};