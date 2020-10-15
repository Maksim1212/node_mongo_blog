import * as mongoose from 'mongoose';
import { connectOptions } from './config';

const MONGODB_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/';
const MONGODB_DB_MAIN = process.env.MONGO_INITDB_DATABASE || 'blog_db';
const MONGO_URI = `${MONGODB_URI}${MONGODB_DB_MAIN}`;

export default mongoose.createConnection(MONGO_URI, connectOptions);
