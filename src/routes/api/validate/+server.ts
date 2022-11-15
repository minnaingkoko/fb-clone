import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import User from '../../../models/User';
import dbConnect from '../../../lib/server/db';
import sendEmail from '../../../lib/email/sendEmail';

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

export const POST: RequestHandler = async ({ cookies, request }) => {
	await dbConnect();
	const { Register } = await request.json();
	const { FirstName, SurName, emOph, Password, Bday, Bmonth, Byear, Gender, confirm } = Register;
	try {
		const user = await User.checkEmail(emOph);
		if (!user) {
			sendEmail(emOph, FirstName, confirm);
			return json({ status: 302 });
		} else {
			return json({ status: 200 });
		}
	} catch (err) {
		const errors = handleErrors(err);
		return json({ status: 400, body: { errors } });
	}
};
