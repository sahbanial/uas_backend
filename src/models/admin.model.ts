import { model, Schema } from "mongoose";
import { createdAt } from "./preSave";
const adminSchema = new Schema({
    id:String,
    profile: {
        type: Schema.Types.ObjectId,
        required: true,
        ref:"users"
    },
    createdAt:Number,
    updatedAt:Number,

}, {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
    versionKey: false});


createdAt(adminSchema);


export const AdminModel = model("admins", adminSchema);