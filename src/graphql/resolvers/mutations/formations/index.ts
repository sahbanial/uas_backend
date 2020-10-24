import { FormationModel } from "../../../../models";

export default {
  addFormation: (root, { input }) =>
    new Promise((resolve, reject) => {
      const { name, description, file } = input;
      let inputs: any = { name, description };
      new FormationModel({ ...inputs }).save((err, res) => {
          resolve(res);
      });
    }),
};
