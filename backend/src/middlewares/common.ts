import { Router, json, urlencoded } from 'express';
import cors from 'cors';
import postgraphileMiddleware from './postgraphileMiddleware';

const handleCors = (router: Router) =>
	router.use(cors({ credentials: true, origin: true }));

const handlePostgraphileMiddleware = (router: Router) =>
	router.use(postgraphileMiddleware);

const handleBodyRequestParsing = (router: Router) => {
	router.use(urlencoded({ extended: true }));
	router.use(json());
};

export { handleCors, handleBodyRequestParsing, handlePostgraphileMiddleware };
