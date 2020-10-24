import { Router } from 'express';
import { CommandModel } from '../models';
import { populateFields } from '../graphql/util/populateFields';
import instance from '../graphql/pubsub';
import { SubscriptionFire } from '../graphql/util/constants';
import moment from '../helpers/moment';
export const StuartRouter = Router();
StuartRouter.post('/webhooks', (req, res, next) => {
	const { data } = req.body;

	if (data) {
		const { status, clientReference } = data;
		let state = null;
		if (status) {
			switch (status) {
				case 'in_progress':
					state = 'DELIVERING';
					break;
				case 'delivering':
					state = 'DELIVERING';
					break;
				case 'finished':
					state = 'DELIVERED';
					break;
				case 'canceled':
					state = 'CANCELED';
					break;
				case 'voided':
					state = 'VOIDED';
					break;
				case 'revoked':
					state = 'REVOKED';
					break;
				case 'expired':
					state = 'EXPIRED';
					break;
			}
		}

		if (!!state) {
			if (clientReference) {
				CommandModel.findOne({ num: parseInt(clientReference) })
					.populate(populateFields.command.clientFlorist)
					.then(cmd => {
						const order = cmd as any;

						if (order) {
							const { driver, trackingUrl } = data;

							order.state = state ? state : 'PENDING';
							order.status = [ ...order.status, { state, date: moment().valueOf() } ];
							if (driver && trackingUrl) {
								order.apiResponseLivringInfos = {
									job: data ? data.id : null,
									trackingUrl,
									driver: {
										firstName: driver ? driver.firstname : null,
										lastName: driver ? driver.lastname : null,
										phone: driver ? driver.phone : null
									}
								};
							}
							order.save();
							instance.publish(SubscriptionFire.COMMAND_UPDATED, { command: order });
						}
					});
			}
		}
	}
});
export default StuartRouter;
