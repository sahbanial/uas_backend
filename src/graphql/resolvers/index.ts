import { GraphQLUpload } from 'apollo-server-express';

import Mutation from './mutations';
import Query from './queries';
import Subscription from './subscriptions';
import NestedResolvers from './nestedResolvers';

export default {
	Query,
	Mutation,
	Subscription,
	Upload: GraphQLUpload,
	...NestedResolvers
};
