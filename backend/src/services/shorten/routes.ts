import { Request, Response, NextFunction } from 'express';
import getShortenedURL from './ShortenController';
import {
	checkShortenerParams,
	checkShortenedRoute
} from '../../middlewares/checks';
import validate from '../../middlewares/validate';
import getFromCache from '../../middlewares/caching';
import { HTTP404Error } from '../../utils/httpErrors';
import { baseUrl } from '../../config/common';
import logger from '../../config/logger';

export default [
	{
		path: '/:url',
		method: 'get',
		handler: [
			checkShortenedRoute,
			async ({ params }: Request, res: Response, next: NextFunction) => {
				try {
					const { url } = params;
					logger.info(url);
					const result = await getFromCache(url);
					result
						? res.redirect(301, result)
						: (() => {
								throw new HTTP404Error('Invalid url');
						  })();
				} catch (error) {
					next(error);
				}
			}
		]
	},
	{
		path: '/api/url',
		method: 'post',
		handler: [
			checkShortenerParams,
			validate,
			async ({ body }: Request, res: Response, next: NextFunction) => {
				const { url } = body;
				const result = await getFromCache(url);
				result ? res.status(200).send(`${baseUrl}/${result}`) : next();
			},
			async ({ body }: Request, res: Response) => {
				const result = await getShortenedURL(body.url as string);
				res.status(200).send(result);
			}
		]
	}
];
