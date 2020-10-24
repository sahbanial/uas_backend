import { model, Schema, Types } from 'mongoose';
import { createdAt } from './preSave';

const clientSchema = new Schema(
	{
		id: String,
		profile: {
			type: Schema.Types.ObjectId,
			required: true,
			ref: 'users'
		},
		firstName: {
			type: String,
			required: true,
			trim: true,
			default: ''
		},
		lastName: {
			type: String,
			required: true,
			trim: true,
			default: ''
		},
		tel: {
			type: String,
			trim: true,
			default: ''
		},
		address: {
			type: String,
			trim: true,
			default: ''
		},
		sexe: {
			type: String,
			default: 'Femme'
		},
		photoUrl: {
			type: String,
			default: ''
		},
		codeParinage: {
			type: String,
			default: ''
		},
		stripe: {
			type: String
		},

		createdAt: Number,
		updatedAt: Number
	},
	{
		toObject: {
			virtuals: true
		},
		toJSON: { virtuals: true }
	}
);

createdAt(clientSchema);
export const ClientModel = model('clients', clientSchema);
