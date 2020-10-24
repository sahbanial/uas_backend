import { populateFields } from './populateFields';
import { split } from 'apollo-link';
import Stripe from '../../tools/stripe';
import { ClientModel } from '../../models';
import { PHONE_PRFIX } from '../../tools/constant';
const { fieldsList } = require('graphql-fields-list');

const getQueryInfos = (infos, collection = 'collection') => {
	let populate = [];
	const pop = populateFields[collection];

	let select = [];
	select = fieldsList(infos);
	if (fieldsList(infos).some(elem => elem == 'nodes')) {
		select = fieldsList(infos, { path: 'nodes' });
	}

	if (pop) {
		select.forEach(field => {
			if (pop.includes(field)) {
				if (populateFields[field]) {
					populate.push({ path: field, populate: populateFields[field].map(item => ({ path: item })) });
				} else {
					populate.push({ path: field });
				}
			}
		});
	}

	return { select, populate: populate.length > 0 ? populate : null };
};

const addCreditCard = async ({ token, customer }) => {
	return new Promise((resolve, reject) => {
		Stripe.customers.createSource(customer, { source: token }).then(res => resolve(res)).catch(err => reject(err));
	});
};
const addStripeCustomer = ({ token, email, clientId }) => {
	return new Promise((resolve, reject) => {
		Stripe.customers.create({ email }).then(async customer => {
			await Stripe.customers.createSource(customer.id, { source: token });
			ClientModel.findById(clientId)
				.then(client => {
					(client as any).stripe = customer.id;
					(client as any).save();
					resolve(true);
				})
				.catch(err => reject('ERROR ADD CUSTMOR STRIPE TO CLIENT'));
		});
	});
};
const verifyExistCard = ({ customer, fingerprint }) => {
	return new Promise((resolve, reject) => {
		Stripe.customers
			.listSources(customer)
			.then(customer => {
				const cards = customer.data;
				const find = cards.find(item => item.fingerprint == fingerprint);
				if (find) {
					reject('CREDIT_CARD EXISIT');
				} else {
					resolve(true);
				}
			})
			.catch(error => {});
	});
};

const getSearchQueryByDateInterval = (start, end, field = 'createdAt') => {
	if (!start || !end) return {};
	return {
		[field]: {
			$gte: start,
			$lte: end
		}
	};
};
const getRegexQuery = (field, value) => {
	if (!value) return {};
	if (isNaN(parseFloat(value)) && field !== 'location')
		return {
			[field]: new RegExp(value.toLowerCase(), 'i')
		};
	else
		return {
			[field]: value
		};
};

const getSearchQuery = fields => {
	let query = { $or: null };
	if (!fields || Object.keys(fields).length == 0) return {};

	query.$or = Object.keys(fields).map(key => getRegexQuery(key, fields[key]));

	return query;
};

const generateStuartJobObject = (job, transport_type) => {
	const {
		client: { last_name, first_name },
		florist: { address: florist_address, name: florist_name, tel: florist_tel },
		delivery: { deliveryAddress: client_address, receptor, tel, complementAddress, staircase, floor },
		num
	} = job;
	const data = {
		job: {
			transport_type,
			pickups: [
				{
					address: florist_address,
					contact: {
						firstname: florist_name,
						phone: PHONE_PRFIX + florist_tel
					}
				}
			],
			dropoffs: [
				{
					address: client_address,
					comment: complementAddress,
					package_description: staircase,
					client_reference: num, // must be unique
					contact: {
						firstname: first_name,
						lastname: last_name,
						phone: PHONE_PRFIX + tel
					}
				}
			]
		}
	};

	return data;
};
export { getQueryInfos, addCreditCard, addStripeCustomer, verifyExistCard, getSearchQuery, generateStuartJobObject };
