import { Response, NextFunction } from 'express';
import { HTTPClientError, HTTP404Error } from './httpErrors';
import logger from '../config/logger';

const notFoundError = () => {
	throw new HTTP404Error('Method Not found. 🧐');
};

const clientError = (err: Error, res: Response, next: NextFunction) => {
	if (err instanceof HTTPClientError) {
		const { message, statusCode } = err;
		logger.warn({ message });
		res.status(statusCode).send(message);
	} else {
		next(err);
	}
};

const serverError = (err: Error, res: Response, next: NextFunction) => {
	res.status(500).send(
		process.env.NODE_ENV === 'production'
			? 'Internal Server Error ☹☹☹'
			: err.stack
	);
};

export { notFoundError, clientError, serverError };
