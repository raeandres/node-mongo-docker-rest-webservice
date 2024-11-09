import mongoose from "mongoose";

const Schema = mongoose.Schema;


export const LoginSchema = new Schema({

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
        required: 'Session is required!'
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
