const accountSid = 'AC069d65650a132a55603d87af7d7c35af';
const authToken = '65a82c1085ebdacfc44528b0011a36b3';

const client = require('twilio')(accountSid, authToken);

async function sendSMS(mes: string, receiver: string) {
	client.messages
		.create({
			body: mes,
			from: '+13023062732',
			to: receiver
		})
		.then((message: { sid: any }) => console.log(message.sid));
}

export default sendSMS;
