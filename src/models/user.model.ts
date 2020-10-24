import * as bcrypt from "bcrypt";
import {model, Schema} from "mongoose";
import { createdAt } from "./preSave";
const userSchema = new Schema({
    id:String,
    ref: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true,
        trim: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true
    },
    isBlocked: {
        type: Boolean,
        default: false
    },
    isVerified: {
        type: Boolean,
        default: false
    },
    createdAt:Number,
    updatedAt:Number
    
}, {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },

    
});
createdAt(userSchema);
userSchema.pre("save", function(next) {
    if (this.isModified("password") && this.isNew) {
        try {
            const salt = bcrypt.genSaltSync(10);
            const hash = bcrypt.hashSync((this as  any).password, salt);
            (this as  any).password = hash;
            next();
        } catch (e) {
            next(e);
        }
    } else {
        next();
    }
});
userSchema.methods.isValidPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
};
userSchema.statics.hashPassword = function(password) {
    return new Promise((resolve, reject) => {
        try {
            const salt = bcrypt.genSaltSync(10);
            const hash = bcrypt.hashSync(password, salt);
            resolve(hash);
        } catch (e) {
            reject(e);
        }
    });
};
export const UserModel = model("users", userSchema);