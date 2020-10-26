import { FormationModel } from "../../../../models";
import onesignal from "../../../../tools/onesignal";
export default {
  addFormation: (root, { input }) =>
    new Promise((resolve, reject) => {
      const { name, description, file } = input;
      let inputs: any = { name, description };
      console.log({ inputs });
      onesignal.sendMessage(
        {
          contents: { en: name },
          included_segments: ["All"],
        },
        function (err, resp) {
          console.log({ resp });
          if (err) {
            // Handle error
          } else {
            // Handle success!
          }
        }
      );
      console.log({ input });
      new FormationModel({ ...inputs }).save((err, res) => {
        resolve(res);
      });
    }),
  deleteFormation: (root, { id }) => {
    return FormationModel.findById(id).then((formations: any) => {
      return Promise.resolve(formations.remove());
    });
  },
};
