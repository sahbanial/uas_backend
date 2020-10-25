import { formations } from "../../../../data/formations"
import { FormationModel } from "../../../../models";

export default{
    getFormations:(root,{})=>new Promise((resolve,reject)=>{
        FormationModel.find({}).sort({createdAt:-1}).then(forms=>{
            resolve(forms);
        })
        
    })
}