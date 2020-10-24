import moment from '../../../helpers/moment.js';

export default {
	createdAt: _ => moment(_.createdAt).format('DD/MM/YYYY HH:mm'),
	status: _ => _.status.map(st => ({ state: st.state, date: moment(st.date).format('HH:mm') }))
};
