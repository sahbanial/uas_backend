import { withFilter } from 'graphql-subscriptions';
import PubSub from '../../../pubsub';
import { SubscriptionFire } from '../../../util/constants';

export default {
	subscribe: withFilter(
		() => PubSub.asyncIterator(SubscriptionFire.COMMAND_UPDATED),
		(payload, variables) => {
			if (!payload || !variables) {
				return false;
			}
			return (
				payload.commandUpdated.client.id.toString() == variables.id.toString() ||
				payload.commandUpdated.client.profile.id.toString() == variables.id.toString() ||
				payload.commandUpdated.florist.profile.id.toString() == variables.id.toString() ||
				payload.commandUpdated.florist.id.toString() == variables.id.toString()
			);
		}
	)
};
