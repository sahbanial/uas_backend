import { formations } from "../../../../data/formations"
import { FormationModel } from "../../../../models";

export default{
    getFormations:(root,{})=>new Promise((resolve,reject)=>{
        FormationModel.find({}).then(forms=>{
            resolve(forms);
        })
        
    })
}