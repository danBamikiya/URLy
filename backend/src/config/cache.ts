import redis from 'redis';
import logger from './logger';

const { REDIS_URL = 'redis://cacher:6379' } = process.env;

const redisClient = redis.createClient({
  url: REDIS_URL
});

const init = async () =>
  new Promise((resolve, reject) => {
    redisClient.on('connect', () => {
      logger.info({ message: 'Redis client connected' });
      resolve(redisClient);
    });

    redisClient.on('error', error => reject(error));
  });

export { init, redisClient };
