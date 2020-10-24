import { UserModel } from './user.model';
import { AdminModel } from './admin.model';
import { ClientModel } from './client.model';
import {NewsModel} from "./news.model";
import {FormationModel} from "./formation.model"
const seedsData = () => {
	AdminModel.countDocuments((err, count) => {
		if (!err && count === 0) {
			new UserModel({ email: 'admin@gmail.com', password: '123456', ref: 'admins' })
				.save()
				.then(user => new AdminModel({ profile: user.id }).save().then(admin => admin));
		}
	});

	ClientModel.countDocuments((err, count) => {
		if (!err && count === 0) {
			new UserModel({ email: 'client@gmail.com', password: '123456', ref: 'clients' }).save().then(user => {
				new ClientModel({ firstName: 'sahbani', lastName: 'wael', profile: user.id }).save();
			});
		}
	});
};
seedsData();
export { UserModel, AdminModel, ClientModel,NewsModel,FormationModel};
