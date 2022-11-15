import mongoose, { Types, Schema, Document, Model } from 'mongoose';
// import isEmail from 'validator';
import bcrypt from 'bcrypt';

interface IUser {
	FirstName: string;
	SurName: string;
	emOph: string;
	Password: string;
	Bday: string;
	Bmonth: string;
	Byear: string;
	Gender: string;
}

interface IUserDocument extends IUser, Document {
	// setPassword: (password: string) => Promise<void>;
	// checkPassword: (password: string) => Promise<boolean>;
}

interface IUserModel extends Model<IUserDocument> {
	login: (emOph: string, Password: string) => Promise<IUserDocument>;
	getUser: (userId: Types.ObjectId) => Promise<IUserDocument>;
	checkEmail: (userId: Object) => Promise<IUserDocument>;
}

const UserSchema: Schema<IUserDocument> = new Schema({
	FirstName: {
		type: String,
		required: [true, 'Please enter FirstName']
	},
	SurName: {
		type: String,
		required: [true, 'Please enter SurName']
	},
	emOph: {
		type: String,
		required: [true, 'Please enter an email'],
		unique: true,
		lowercase: true
		// validate: [isEmail, 'Please enter a valid email']
	},
	Password: {
		type: String,
		required: [true, 'Please enter a password'],
		minlength: [6, 'Minimum password length is 6 characters']
	},
	Bday: {
		type: String,
		required: [true, 'Please enter birthday']
	},
	Bmonth: {
		type: String,
		required: [true, 'Please enter birthmonth']
	},
	Byear: {
		type: String,
		required: [true, 'Please enter birthyear']
	},
	Gender: {
		type: String,
		required: [true, 'Please choose gender']
	}
});

// fire a function before doc saved to db
UserSchema.pre('save', async function (next) {
	const salt = await bcrypt.genSalt();
	this.Password = await bcrypt.hash(this.Password, salt);
	next();
});

// static method to login user
UserSchema.statics.login = async function (emOph, Password) {
	const user = await this.findOne({ emOph });
	if (user) {
		const auth = await bcrypt.compare(Password, user.Password);
		if (auth) {
			return user;
		}
		throw Error('incorrect password');
	}
	throw Error('incorrect email');
};

// static method to check email

UserSchema.statics.checkEmail = async function (emOph) {
	const user = await this.findOne({ emOph });
	if (user) {
		return user;
	} else {
		return false;
	}
};

// static method to check userId

UserSchema.statics.checkUserId = async function (userId) {
	const user = await this.findById({ _id: userId });
	if (user) {
		return user;
	}
};

// static method to rest pwd

UserSchema.statics.reset = async function (userId, Password) {
	const user = await this.findById({ _id: userId });
	if (user) {
		const salt = await bcrypt.genSalt();
		const hash = await bcrypt.hash(Password, salt);
		const reset = await User.updateOne(
			{ _id: userId },
			{ $set: { Password: hash } },
			{ new: true }
		);
		if (reset) {
			return reset;
		}
		throw Error('password reset failed');
	}
	throw Error('incorrect email');
};

UserSchema.statics.getUser = async function (userId) {
	// write more
	const user = await User.findById({ _id: userId })
		.select('-Password')
		.select('-_id')
		.select('-__v');
	if (user) {
		return user;
	}
};

const User = mongoose.model<IUserDocument, IUserModel>('User', UserSchema);

export default User;
