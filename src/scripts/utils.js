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
 * Add priority property to primaries to guide CSS classes
 */

const priorityMap = {
	1234: 'first',
};

const mapPrimaryPriorities = primary => priorityMap[primary.id] ? priorityMap[primary.id] : '';

export const setPriority = primary => {
	const priority = mapPrimaryPriorities(primary);
	return Object.assign({}, primary, { priority });
};