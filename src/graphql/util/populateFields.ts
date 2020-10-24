export const populateFields = {
	clients: [ 'profile' ],
	client: [ 'profile' ],
	florists: [ 'profile' ],

	command: {
		clientFlorist: [
			{ path: 'client', populate: [ { path: 'profile' } ] },
			{ path: 'florist', populate: [ { path: 'profile' } ] }
		],
		clientFloristProducts: [
			{ path: 'florist', populate: [ { path: 'profile' } ] },
			{ path: 'client', populate: [ { path: 'profile' } ] },
			{ path: 'products.product' }
		]
	},
	florist: {
		profile: [ { path: 'profile' } ]
	}
};
