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

const priorityRaces = [1234, 5678];

const mapPrimaryPriorities = primary => {
	for (let i = 0; i < priorityRaces.length; i++) {
		if (priorityRaces[i] === primary.id) {
			return 'priority';
		}
	}
	return '';
};

export const setPriority = primary => {
	const priority = mapPrimaryPriorities(primary);
	return Object.assign({}, primary, { priority });
};