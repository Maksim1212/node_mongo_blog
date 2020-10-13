import { Schema } from 'mongoose';

import connections from '../config/connection';

const CommentSchema = new Schema(
    {
        author_id: {
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
        post_id: {
            type: String,
            required: true,
        },
        creation_time: {
            type: Date,
            required: true,
            default: Date.now,
        },
    },
    {
        collection: 'commentmodel',
        versionKey: false,
    },
);

export default connections.model('CommentModel', CommentSchema);
