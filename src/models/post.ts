import { Schema } from 'mongoose';

import connections from '../config/connection';

const PostSchema = new Schema(
    {
        author_id: {
            type: String,
            required: true,
        },
        author_name: {
            type: String,
            required: true,
            trim: true,
        },
        title: {
            type: String,
            required: true,
        },
        body: {
            type: String,
            required: true,
            trim: true,
        },
        likes: {
            type: Array,
        },
        creation_time: {
            type: Date,
            required: true,
            default: Date.now,
        },
    },
    {
        collection: 'postsmodel',
        versionKey: false,
    },
);

export default connections.model('PostModel', PostSchema);
