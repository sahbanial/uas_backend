const OneSignal = require('onesignal-node');

export const SEGMENTS = {
	ALL_USERS: 'Subscribed Users',
	ACTIVE_USERS: 'Active Users',
	INACTIVE_USERS: 'Inactive Users'
};
export const ACTIONS = {
	OPEN_APP: 'OPEN_APP',
	HOME: 'HOME',
	PRODUCTS: 'PRODUCTS',
	PROFILE: 'PROFILE',
	CART: 'CART'
};

export const sendPushNotification = ({
	message,
	title,
	included_segments = [ SEGMENTS.ALL_USERS ],
	excluded_segments = [],
	included_users = [],
	action = ACTIONS.OPEN_APP,
	actionData = null,
	senderId = null,
	senderRole = null,
	send_after = null,
	to = null
}) =>
	new Promise(async (resolve, reject) => {
		const client = new OneSignal.Client(
			"0509b738-6221-4819-a1a5-59e48f406399",
			"NDE1ZDdkNWEtNzc0ZC00MDVmLTgzZTctOTBkYWRkYThlM2Iz"
		);
		const notification = {
			contents: {
				en: message
			},
			headings: {
				en: title
			},
			included_segments,
			excluded_segments,

			data: {
				action,
				actionData,
				senderId,
				senderRole
			}
		} as any;

		if (included_users !== null && included_users.length > 0) notification.include_player_ids = included_users;
		if (send_after) notification.send_after = send_after;
		if (to) notification.filters = [ { field: 'tag', relation: '=', key: 'id', value: to } ];
		try {
			const response = await client.createNotification(notification);
			if (response.body.recipients === 0 || !response.body.id || response.body.id.length < 3)
				return reject("Aucun appareil déstinataire n'a été trouvé.");
			resolve(response.body.id);
		} catch (e) {
			return reject(e.body);
		}
	});