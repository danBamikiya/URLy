import {
	CLIENT,
	DATABASE,
	PG_USER,
	PASSWORD,
	HOST,
	PORT
} from './config/common';
import { join } from 'path';

module.exports = {
	development: {
		client: CLIENT,
		connection: {
			database: DATABASE,
			user: PG_USER,
			password: PASSWORD,
			host: HOST,
			port: PORT
		},
		migrations: {
			directory: join(__dirname, '/db/migrations')
		},
		seeds: {
			directory: join(__dirname, '/db/seeds')
		}
	},

	production: {
		client: CLIENT,
		connection: {
			database: DATABASE,
			user: PG_USER,
			password: PASSWORD,
			host: HOST,
			port: PORT
		},
		pool: {
			min: 2,
			max: 10
		},
		migrations: {
			schemaName: 'urly'
		}
	}
};
