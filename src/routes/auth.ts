import { Router } from 'express';
import Token from '../tools/token';
import { UserRole } from '../tools/constant';
import {  UserModel } from '../models';
import ErrorMsg from '../../errorMessages';
export const AuthRouter = Router();
AuthRouter.post('/login/visitor', (req, res, next) => {
	Token.generate({ role: UserRole.VISITOR }).then(token => {
		res.end(JSON.stringify({ success: true, token }, null, 5));
	});
});


AuthRouter.post('/login/florist', (req, res, next) => {
	let { email, password } = req.body;

	if (email && password) {
		email = email.trim();
		UserModel.findOne({ email, ref: 'florists' }).then(user => {
			if (!user) {
				return res.end(JSON.stringify({ success: false, message: ErrorMsg.userNotFound }, null, 5));
			}
			if (!(user as any).isValidPassword(password)) {
				return res.end(JSON.stringify({ success: false, fieldError: ErrorMsg.auth.invalidPassword }, null, 5));
			}
			Token.generate({ id: user.id, role: UserRole.FLORIST })
				.then(token => {
					return res.end(JSON.stringify({ success: true, token }, null, 5));
				})
				.catch(err => next(err));
		});
	} else {
		return res.end(JSON.stringify({ success: false, fieldError: ErrorMsg.invalidEmail }, null, 5));
	}
});
AuthRouter.post('/login/admin', (req, res, next) => {
	let { email, password } = req.body;

	if (email && password) {
		email = email.trim();
		UserModel.findOne({ email, ref: 'admins' }).then(user => {
			if (!user) {
				return res.end(JSON.stringify({ success: false, message: ErrorMsg.userNotFound }, null, 5));
			}
			if (!(user as any).isValidPassword(password)) {
				return res.end(JSON.stringify({ success: false, fieldError: ErrorMsg.auth.invalidPassword }, null, 5));
			}
			Token.generate({ id: user.id, role: UserRole.ADMIN })
				.then(token => {
					return res.end(JSON.stringify({ success: true, token }, null, 5));
				})
				.catch(err => next(err));
		});
	} else {
		return res.end(JSON.stringify({ success: false, fieldError: ErrorMsg.invalidEmail }, null, 5));
	}
});

AuthRouter.post('/login/client', (req, res, next) => {
	let { email, password } = req.body;
	if (email && password) {
		email = email.trim();
		UserModel.findOne({ email, ref: 'clients' }).then(user => {
			if (!user) {
				return res.end(JSON.stringify({ success: false, message: ErrorMsg.userNotFound }, null, 5));
			}
			if (!(user as any).isValidPassword(password)) {
				return res.end(JSON.stringify({ success: false, fieldError: ErrorMsg.auth.invalidPassword }, null, 5));
			}
			Token.generate({ id: user.id, role: UserRole.CLIENT })
				.then(token => {
					return res.end(JSON.stringify({ success: true, token }, null, 5));
				})
				.catch(err => next(err));
		});
	} else {
		return res.end(JSON.stringify({ success: false, fieldError: ErrorMsg.invalidEmail }, null, 5));
	}
});

AuthRouter.post('/login/check-token', (req, res, next) => {
	const token = req.headers.authorization;
	console.log(token);
	if (!token) {
		return res.sendStatus(401);
	}
	Token.ensure(token)
		.then(payload => {
			return res.end(JSON.stringify({ success: true, payload }, null, 5));
		})
		.catch(err => res.sendStatus(401));
});
export default AuthRouter;
