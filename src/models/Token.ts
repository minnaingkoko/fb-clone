import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import crypto from 'crypto';

const tokenSchema = new mongoose.Schema({
	userId: {
		type: mongoose.Schema.Types.ObjectId,
		required: true,
		ref: 'user'
	},
	token: {
		type: String,
		required: true
	},
	createdAt: {
		type: Date,
		required: true,
		default: Date.now,
		expires: 900
	}
});

//static method to check token

tokenSchema.statics.checkToken = async function (id) {
	let token = await this.findOne({ userId: id });
	if (token) {
		return token.deleteOne();
	}
};

//static method to reset token

tokenSchema.statics.resetToken = async function (user) {
	let resetToken = crypto.randomBytes(32).toString('hex');
	const salt = await bcrypt.genSalt();
	const hash = await bcrypt.hash(resetToken, salt);

	await new Token({
		userId: user._id,
		token: hash,
		createdAt: Date.now()
	}).save();
	return resetToken;
};

//static method to validate token

tokenSchema.statics.validate = async function (userId, token) {
	let passwordResetToken = await this.findOne({ userId });

	if (!passwordResetToken) {
		throw new Error('Invalid or expired password reset token');
	}

	const isValid = await bcrypt.compare(token, passwordResetToken.token);

	if (!isValid) {
		throw new Error('Invalid or expired password reset token');
	}
};

const Token = mongoose.model('token', tokenSchema);

module.exports = Token;
