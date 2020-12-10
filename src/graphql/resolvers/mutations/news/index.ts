import { sendPushNotification } from './../../../util/notification';
import { NewsModel } from './../../../../models/news.model';

export default {
    addNews: (root, { input }) =>
    new Promise((resolve, reject) => {
      const { title, description, file } = input;
      let inputs: any = { title, description };
      new NewsModel({ ...inputs }).save((err, res) => {
        resolve(res);
        sendPushNotification({
          message:description,
          title
        })
      });
    }),
  deleteNews: (root, { id }) => {
    return NewsModel.findById(id).then((formations: any) => {
      return Promise.resolve(formations.remove());
    });
  },
  updateNews:(root, { id,input }) => {
    return NewsModel.updateOne({id},{$set:{...input}}).exec((err: any,res) => {
      return res;
    });
  },
};
