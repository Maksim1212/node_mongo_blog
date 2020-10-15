import * as mongoose from 'mongoose';
import { connectOptions, MONGO_URI } from './config';

export default mongoose.createConnection(MONGO_URI, connectOptions);
