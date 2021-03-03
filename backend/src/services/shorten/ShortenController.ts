import { nanoid } from 'nanoid';
import { redisClient } from '../../config/cache';

export default async function getShortenedURL(url: string) {
	const urlCode = nanoid(7);
	redisClient.setex(url, 3600, urlCode);
	return urlCode;
}
