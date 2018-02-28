import { mapPrimaryToPrioritiesObj } from './utils';

export const priorityRaces = [1234, 5678];
export const secondaryRaces = [4322, 3627, 9876];

export default data => {
	if (data.primaries) {
		const primaries = data.primaries.reduce(mapPrimaryToPrioritiesObj, { priority: [], secondary: [], tertiary: [] });
		return Object.assign({}, data, { primaries });
	} else {
		return data;
	}
};