import { withFilter } from 'graphql-subscriptions';
import PubSub from '../../../pubsub';
import { SubscriptionFire } from '../../../util/constants';

export default {
	subscribe: withFilter(
		() => PubSub.asyncIterator(SubscriptionFire.COMMAND_ADDED),
		(payload, variables) => {
			if (!payload || !variables) {
				return false;
			}

			return (
				payload.commandAdded.client.id.toString() == variables.id.toString() ||
				payload.commandAdded.client.profile.id.toString() == variables.id.toString() ||
				payload.commandAdded.florist.profile.id.toString() == variables.id.toString() ||
				payload.commandAdded.florist.id.toString() == variables.id.toString()
			);
		}
	)
};
