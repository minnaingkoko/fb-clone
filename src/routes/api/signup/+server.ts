import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import User from '../../../models/User';
import dbConnect from '../../../lib/server/db';
import jwt from 'jsonwebtoken';

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

// create json web token
const maxAge = 365 * 24 * 60 * 60;
const createToken = (id: any) => {
	return jwt.sign({ id }, 'miracle', {
		expiresIn: maxAge
	});
};

export const POST: RequestHandler = async ({ cookies, request }) => {
	await dbConnect();
	const { Register } = await request.json();
	const { FirstName, SurName, emOph, Password, Bday, Bmonth, Byear, Gender } = Register;
	try {
		const user = await User.create({
			FirstName,
			SurName,
			emOph,
			Password,
			Bday,
			Bmonth,
			Byear,
			Gender
		});
		const data = await User.getUser(user._id);
		const token = createToken(user._id);

		//   res.cookie("jwt", token, { httpOnly: true, maxAge: maxAge * 1000 });
		cookies.set('session', token, {
			// send cookie for every page
			path: '/',
			// server side only cookie so you can't use `document.cookie`
			httpOnly: true,
			// only requests from same site can send cookies
			// https://developer.mozilla.org/en-US/docs/Glossary/CSRF
			sameSite: 'strict',
			// only sent over HTTPS in production
			secure: process.env.NODE_ENV === 'production',
			// set cookie to expire after a month
			maxAge: 60 * 60 * 24 * 365
		});
		return json({ status: 201, body: { user: data } });
	} catch (err) {
		const errors = handleErrors(err);
		return json({ status: 400, body: { errors } });
	}
};
