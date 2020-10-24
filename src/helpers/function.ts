import Token from '../tools/token';
import { ClientModel, AdminModel } from '../models';
import { UserRole } from '../tools/constant';
import fs, { createWriteStream } from "fs";
const getUserModelByRole = () => {
	return null;
};
export const getUserByToken = token => {
	return new Promise((resolve, reject) => {
		Token.ensure(token)
			.then(payload => {
				switch ((payload as any).role) {
					case UserRole.CLIENT:
						ClientModel.findOne({ profile: (payload as any).id }).populate('profile').then(client => resolve(client));
						break;
					case UserRole.FLORIST:
						// FloristModel.findOne({ profile: (payload as any).id })
						// 	.populate('profile')
						// 	.then(florist => resolve(florist));
						// break;
					case UserRole.ADMIN:
						{
							AdminModel.findOne({ profile: (payload as any).id }).populate('profile').then(admin => {
								resolve(admin);
							});
						}
						break;
					default:
						resolve(payload);
				}
			})
			.catch(err => reject(err));
	});
};
const upload = (stream, filePath) => {
	return new Promise(async (resolve, reject) => {
	  stream
		.pipe(createWriteStream(filePath))
		.on("error", (e) => reject(e.message))
		.on("finish", () => resolve(`${process.env.MEDIA_ENDPOINT}`));
	});
  };
  
  export const uploadFile = (file, path, id = null, oldPath = null) => {
	console.log(file);
	return new Promise((resolve, reject) => {
	  Promise.resolve(file)
		.then(({ createReadStream, mimetype }) => {
		  const stream = createReadStream();
  
		  //const filePath = `${PUBLIC_PATH}/images/${subPath}/${id}.${extension}`;
		  //if (!mimetype.startsWith('image')) return reject('isNotAnImage');
		  if (oldPath)
			removeFile(oldPath, () => {
			  upload(stream, path)
				.then((link) => console.log(link))
				.catch((e) => reject(e));
			});
		  else
			upload(stream, path)
			  .then((link) => resolve(link))
			  .catch((e) => reject(e));
		})
		.catch((e) => reject(e.message));
	});
  };
  
  export const removeFile = (path, cb = null) => {
	fs.unlink(`.${path}`, () => {
	  if (cb) cb();
	});
  };
export const getRandom = (min, max) => {
	return Math.floor(Math.random() * (max - min + 1)) + min;
};
