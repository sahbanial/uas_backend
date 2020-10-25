import { FormationModel } from "../../../../models";
import onesignal from "../../../../tools/onesignal";
export default {
  addFormation: (root, { input }) =>
    new Promise((resolve, reject) => {
      const { name, description, file } = input;
      let inputs: any = { name, description };
      console.log({inputs});
      onesignal.sendMessage({
        contents: {en:'Hello world!'}, 
        included_segments:['All']
    }, function(err, resp) {
        console.log({resp})
        if(err) {
            // Handle error
        } else {
            // Handle success!
        }
    });
      new FormationModel({ ...inputs }).save((err, res) => {
          resolve(res);
      });
    }),
};
