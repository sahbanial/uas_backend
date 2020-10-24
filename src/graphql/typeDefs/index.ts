import * as fs from 'fs';
const userType = fs.readFileSync('./src/graphql/typeDefs/user.graphql', 'utf-8');
const newsType = fs.readFileSync('./src/graphql/typeDefs/news.graphql', 'utf-8');
const formation = fs.readFileSync('./src/graphql/typeDefs/formation.graphql', 'utf-8');
const schema = fs.readFileSync('./src/graphql/typeDefs/schema.graphql', 'utf-8');
const graphql = ''.concat(userType, newsType,formation, schema);


export default graphql;
