import { postgraphile, PostGraphileOptions } from 'postgraphile';
import {
	DATABASE_URL,
	PASSWORD
	// options
} from '../config/common';

const schemas: string | string[] = [ 'urly' ];
// const OPTIONS: PostGraphileOptions = JSON.parse(JSON.stringify(options));
const OPTIONS: PostGraphileOptions = {
	subscriptions: true,
	graphiql: true,
	enhanceGraphiql: true,
	dynamicJson: true,
	ownerConnectionString: PASSWORD
};
const database: string = DATABASE_URL;

const postgraphileMiddleware = postgraphile(database, schemas, OPTIONS);

export default postgraphileMiddleware;
