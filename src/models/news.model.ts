import { model, Schema } from "mongoose";
import { createdAt } from "./preSave";

const newsSchema =new Schema({
    id:String,
    title:String,
    subTitle:String,
    description:String,
    photoUrl:String,
    createAt:Number,
    updatedAt:Number
},{
    toJSON:{virtuals:true},
    toObject:{virtuals:true}
});
createdAt(newsSchema);
export const NewsModel = model("news",newsSchema);

