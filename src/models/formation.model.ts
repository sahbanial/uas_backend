import { model, Schema } from "mongoose";
import { createdAt } from "./preSave";

const formationSchema =new Schema({
    id:String,
    name:String,
    subTitle:String,
    description:String,
    photoUrl:String,
    createdAt:Number,
    updatedAt:Number
},{
    toJSON:{virtuals:true},
    toObject:{virtuals:true}
});
createdAt(formationSchema);
export const FormationModel = model("formations",formationSchema);
