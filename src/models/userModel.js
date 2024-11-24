import mongoose from "mongoose";
import bcrypt from "bcryptjs"

const Schema = mongoose.Schema;

export const UserSchema = new Schema({

    username: {
        type: String,
        required: 'Username is required'
    },
    password: {
        type: String,
        required: 'User password is required'
    },
    email: {
        type: String
    },
    session: {
        type: String,
    },
    created_date: {
        type: Date,
        default: Date.now()
    },
    modified_date: {
        type: Date,
        default: Date.now()
    }
});


UserSchema.pre('save', async function (next) {
    if(!this.isModified('password')) return next();

    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
});

