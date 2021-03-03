import { join } from 'path';
process.env.NODE_CONFIG_DIR = join(__dirname, '../../src/config/');
// eslint-disable-next-line import/first
import config from 'config';

const CLIENT: string = config.get('CLIENT');
const DATABASE: string = config.get('DATABASE');
const DATABASE_URL: string = config.get('DATABASE_URL');
const PG_USER: string = config.get('PG_USER');
const PASSWORD: string = config.get('PASSWORD');
const PORT: string = config.get('PORT');
const HOST: string = config.get('HOST');
const baseUrl: string = config.get('baseURL');
const SENTRY_DSN: string = config.get('SENTRY_DSN');
const options: string = config.get('postgraphileDevOptions');

export {
  CLIENT,
  DATABASE,
  PG_USER,
  PASSWORD,
  HOST,
  PORT,
  options,
  DATABASE_URL,
  baseUrl,
  SENTRY_DSN
};
