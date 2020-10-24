import { createServer } from 'http';
import { execute, subscribe } from 'graphql';
import Server from './server';
import { SubscriptionServer } from 'subscriptions-transport-ws';
import schema from './graphql';
import { getUserByToken } from './helpers/function';
const ws = createServer(Server);
ws
	.listen(process.env.PORT, () => {
		console.log(`Server listening at port ${process.env.PORT} ...`);
	})
	.on('listening', () => {
		console.log('Subscription is listing....');
		new SubscriptionServer(
			{
				execute,
				subscribe,
				schema,
				onConnect: async connectionParams => {
					if (connectionParams.token) {
						const token = connectionParams.token;

						return new Promise((resolve, reject) => {
							getUserByToken(token)
								.then(res => {
									return resolve(res);
								})
								.catch(err => reject(err));
						});
					}
				}
			},
			{
				server: ws,
				path: '/subscriptions'
			}
		);
	});
