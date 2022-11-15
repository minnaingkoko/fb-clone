import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

// handle errors
const handleErrors = (err: any) => {
	console.log(err.message, err.code);
	let errors = { emOph: '', Password: '' };

	// incorrect email
	if (err.message === 'incorrect email') {
		errors.emOph = 'That email is not registered';
	}

	// incorrect password
	if (err.message === 'incorrect password') {
		errors.Password = 'That password is incorrect';
	}

	// duplicate email error
	if (err.code === 11000) {
		errors.emOph = 'that email is already registered';
		return errors;
	}

	// validation errors
	// if (err.message.includes('user validation failed')) {
	// 	// console.log(err);
	// 	Object.values(err.errors).forEach(({ properties }) => {
	// 		// console.log(val);
	// 		// console.log(properties);
	// 		errors[properties.path] = properties.message;
	// 	});
	// }
	return errors;
};

export const GET: RequestHandler = async ({ cookies }) => {
	try {
		cookies.set('session', '', {
			path: '/',
			expires: new Date(0)
		});

		return json({ status: 302 });
	} catch (err) {
		const errors = handleErrors(err);
		return json({ status: 400, body: { errors } });
	}
};
