import { priorityRaces, secondaryRaces } from './parse-data';

/*
 * Calculate max width for each race's bars
 */

const calculateMax = race => race.candidates.reduce((sum, hash) => {
	return hash.val > sum ? hash.val : sum;
}, 0);

export const setMax = primary => {
	const races = primary.races.map(race => {
		const max = calculateMax(race);
		return Object.assign({}, race, { max });
	});
	return Object.assign({}, primary, { races });
};

/*
 * getPriorityKey returns a string, either 'priority', 'secondary' or 'tertiary',
 * which maps to one of three keys in the 'primaries' object being created in 'parse-data.js'
 */

const getNumberOfIdsToCheck = () => priorityRaces.length > secondaryRaces.length ? priorityRaces.length : secondaryRaces.length;

export const getPriorityKey = primary => {
	for (let i = 0; i < getNumberOfIdsToCheck(); i++) {
		if (priorityRaces[i] && priorityRaces[i] === primary.id) {
			return 'priority';
		} else if (secondaryRaces[i] && secondaryRaces[i] === primary.id) {
			return 'secondary';
		}
	}
	return 'tertiary';
};

/*
 * setMaxAndPushToObjArray is called by data.primaries.reduce in 'parse-data.js'
 * 'prioritiesObj' has the default value of { priority: [], secondary: [], tertiary: [] }
 */

export const mapPrimaryToPrioritiesObj = (prioritiesObj, primary) => {
	primary = setMax(primary);
	prioritiesObj[getPriorityKey(primary)].push(primary);
	return prioritiesObj;
};
