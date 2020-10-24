import { makeExecutableSchema } from 'graphql-tools';

import resolvers from './resolvers';
import typeDefs from './typeDefs';
import directiveResolvers from './directiveResolvers';
export default makeExecutableSchema({
	typeDefs,
	resolvers,
	directiveResolvers,
	logger: {
		log: message => {
			//console.log("Logger: ", message);
		}
	}
});
