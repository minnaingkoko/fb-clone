import type { Handle } from '@sveltejs/kit';
import dbConnect from './lib/server/db';
import jwt from 'jsonwebtoken';

export const handle: Handle = async ({ event, resolve }) => {
	await dbConnect();
	// get cookies from browser
	const session = event.cookies.get('session');

	if (!session) {
		// if there is no session load page as normal
		return await resolve(event);
	}

	jwt.verify(session, 'miracle', async (err, decodedToken) => {
		console.log(decodedToken?.id);
		if (err) {
			event.locals.user = {
				userId: ''
			};
		} else {
			event.locals.user = {
				userId: decodedToken?.id
			};
		}
	});

	// load page as normal
	return await resolve(event);
};
