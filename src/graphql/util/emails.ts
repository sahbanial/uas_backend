import { EMAIL_SENDER } from '../../tools/constant';
import sendMail from '../../mailer/mailer';

const emailTemplate = {
	refuseCommand: 'refuseCommand'
};

class Mailers {
	public sendMailRefuseCommand({ to, clientName, numCommand, florist }) {
		sendMail({
			template: emailTemplate.refuseCommand,
			footer: true,
			from: EMAIL_SENDER,
			to: to,
			subject: 'Command refusé',
			vars: {
				title: 'Refuse de commande',
				clientName,
				numCommand,
				florist
			}
		});
	}
}

export default new Mailers();
