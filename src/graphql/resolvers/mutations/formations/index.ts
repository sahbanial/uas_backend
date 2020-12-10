import { sendPushNotification } from './../../../util/notification';
import { FormationModel } from "../../../../models";
import onesignal from "../../../../tools/onesignal";
export default {
  addFormation: (root, { input }) =>
    new Promise((resolve, reject) => {
      const { name, description, file } = input;
      let inputs: any = { name, description };
      sendPushNotification({
        message:"Nouvelle formation",
        title:"Nouvelle formation"
      })
      new FormationModel({ ...inputs }).save((err, res) => {
        resolve(res);
      });
    }),
  deleteFormation: (root, { id }) => {
    return FormationModel.findById(id).then((formations: any) => {
      return Promise.resolve(formations.remove());
    });
  },
  updateFormation:(root, { id,input }) => {
    return FormationModel.updateOne({id},{$set:{...input}}).exec((err: any,res) => {
      return res;
    });
  },

};
