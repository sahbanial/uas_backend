export const collectionsNames = {
	Florist: 'florists',
	Client: 'clients',
	Admin: 'admins',
	Command: 'commands'
};
export const collectionsFields = {
	Florist: {
		id: 'id',
		siret: 'siret',
		name: 'name',
		photoUrl: 'photoUrl',
		address: 'address',
		tel: 'tel',
		description: 'description',
		zipCode: 'zipCode',
		country: 'country',
		profile: 'profile',
		location: 'location',
		createdAt: 'createdAt',
		updatedAt: 'updatedAt'
	},
	Client: {
		id: 'id',
		lastName: 'lastName',
		firstName: 'lastName',
		tel: 'tel',
		address: 'address',
		profile: 'profile',
		codeParinage: 'codeParinage',
		createdAt: 'createdAt',
		updatedAt: 'updatedAt'
	},
	User: {
		id: 'id',
		email: 'email',
		refs: 'refs',
		isBlocked: 'isBlocked',
		isVerified: 'isVerified'
	},
	Theme: {
		id: 'id',
		name: 'name',
		photoUrl: 'photoUrl'
	},
	Product: {
		id: 'id'
	},
	Command: {
		id: 'id',
		state: {
			REVOKED: 'REVOKED',
			READY: 'READY',
			PENDING: 'PENDING',
			APPROVED: 'APPROVED'
		},
		deliveryMode: {
			FREE: 'FREE',
			EXPRESS: 'EXPRESS',
			PROGRAMED: 'PROGRAMED'
		},
		deliveredByApi: {
			STUART: 'STUART',
			YPER: 'YPER'
		}
	}
};
