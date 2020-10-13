import { Schema } from 'mongoose';

import connections from '../config/connection';

const UserSchema = new Schema(
    {
        name: {
            type: String,
            trim: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            required: true,
        },
        refreshToken: {
            type: String,
            require: false,
            default: null,
        },
        is_admin: {
            type: Boolean,
            default: false,
        },
    },
    {
        collection: 'authUserModel',
        versionKey: false,
    },
);

export default connections.model('AuthUserModel', UserSchema);
