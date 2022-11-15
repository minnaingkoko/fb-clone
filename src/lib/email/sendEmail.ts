import { env } from '$env/dynamic/private';
import { createTransport } from 'nodemailer';

async function sendEmail(receiver: string, Name: string, confirmCode: number) {
	let transporter = createTransport({
		service: 'gmail',
		auth: {
			user: env.SECRET_EMAIL_USERNAME,
			pass: env.SECRET_EMAIL_PASSWORD
		}
	});

	let info = await transporter.sendMail({
		from: 'Facebook-Clone<miracledev.freelancer@gmail.com>',
		to: receiver,
		subject: `FB-${confirmCode} is your Facebook-Clone confirmation code`,
		text: 'Action required: Confirm your Facebook-Clone account',
		html: `
            <div>
                <p>Hey ${Name},</p>
                <p>You recently registered for Facebook-Clone. To complete your Facebook-Clone registration, please confirm your account.</p>
                <p>You may be asked to enter this confirmation code: FB-${confirmCode}</p>
            </div>
        `
	});
	console.log('Message sent: %s', info.messageId);
}
export default sendEmail;
