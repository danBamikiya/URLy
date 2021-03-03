import { Request, Response, NextFunction } from 'express';
import { HTTP400Error, HTTP413Error } from '../utils/httpErrors';
import logger from '../config/logger';

const checkShortenedRoute = (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	logger.info(req.params);
	const { url } = req.params;
	logger.info(url);

	if (!url?.trim()) {
		logger.info(url);
		(() => {
			throw new HTTP400Error('🧐 Missing URL parameter');
		})();
	} else if (/[a-zA-Z]/.test(url) && /\d/.test(url)) {
		next();
	} else {
		throw new HTTP400Error('Invalid URL parameter 😮');
	}
};

const checkShortenerParams = (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	const { url } = req.body;

	if (!url) {
		throw new HTTP400Error('🧐 Missing URL parameter');
	} else if (url.length >= 500) {
		throw new HTTP413Error('No way! 🤬 URL parameter too long');
	} else {
		next();
	}
};

export { checkShortenerParams, checkShortenedRoute };
