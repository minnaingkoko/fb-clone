import mongoose from 'mongoose';
import { env } from '$env/dynamic/private';
const Username = env.SECRET_MONGODB_USERNAME;
const Password = env.SECRET_MONGODB_PASSWORD;
const dbURI = `mongodb+srv://${Username}:${Password}@cluster0.le3u2.mongodb.net/fb-clone?retryWrites=true&w=majority`;
async function dbConnect() {
	mongoose
		.connect(dbURI)
		.then(() => console.log('db connected successfully'))
		.catch((err) => console.log(err));
}
export default dbConnect;
