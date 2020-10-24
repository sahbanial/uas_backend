import Stripe from '../../../tools/stripe';

export default {
	creditCards: _ => {
		return _.stripe
			? new Promise((resolve, reject) => {
					Stripe.customers
						.listSources(_.stripe)
						.then(customer => {
							resolve(customer.data);
						})
						.catch(error => {
							reject(error);
						});
				})
			: [];
	},
	fullName: _ => _.firstName + ' ' + _.lastName
};
