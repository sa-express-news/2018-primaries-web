import { mapPrimaryToPrioritiesObj } from './utils';

export const priorityRaces = [0, 1, 2, 3, 4, 9, 15, 16];
export const secondaryRaces = [5, 6, 7, 8, 17, 18, 19, 20];

export default data => {
	if (data.primaries) {
		const primaries = data.primaries.reduce(mapPrimaryToPrioritiesObj, { priority: [], secondary: [], tertiary: [] });
		return Object.assign({}, data, { primaries });
	} else {
		return data;
	}
};