import { MAIL_HOST, MAIL_USER, MAIL_PASSWORD } from '../tools/constant';

const nodemailer = require('nodemailer'),
	fs = require('fs'),
	_jsy = require('jsy');

const sendMail = (option, cb?) => {
	//console.log('mailing...', option);
	let htmlcontent = getHtml(option.template);
	if (htmlcontent && _jsy(option.to) && !_jsy(option.subject).isEmpty()) {
		htmlcontent = fillTemplate(htmlcontent, option.vars);
		if (option.footer) htmlcontent = htmlcontent + loadfooter();
		let from;
		try {
			from = option.from;
			getTransport().sendMail(
				{
					to: option.to,
					subject: option.subject,
					html: htmlcontent,
					from: from,
					attachments: option.attachments ? option.attachments : []
				},
				function(err, info) {
					if (cb) {
						cb(err, info);
					}
				}
			);
		} catch (e) {
			console.log(e);
		}
	}
};

const getHtml = templateName => {
	try {
		const templatePath = 'emailTemplate/' + templateName + '.html';
		const templateContent = fs.readFileSync(templatePath, 'utf8');

		return templateContent;
	} catch (e) {
		console.log('exception', e);
		return false;
	}
};

const getTransport = () => {
	const smtpConfig = {
		host: MAIL_HOST,
		port: 25,
		secure: false, // use SSL
		auth: {
			user: MAIL_USER,
			pass: MAIL_PASSWORD
		},
		tls: {
			rejectUnauthorized: false
		}
	};

	const transport = nodemailer.createTransport(smtpConfig);

	return transport;
};

const fillTemplate = (htmlcontent, vars) => {
	let find, re;
	for (let k in vars) {
		if (vars.hasOwnProperty(k)) {
			find = '{{' + k + '}}';
			re = new RegExp(find, 'g');

			htmlcontent = htmlcontent.replace(re, vars[k]);
		}
	}
	return htmlcontent;
};

const loadfooter = () => {
	try {
		const templatePath = 'emailTemplate/footer.html';
		const templateContent = fs.readFileSync(templatePath, 'utf8');
		return templateContent;
	} catch (e) {
		return false;
	}
};

export default sendMail;
