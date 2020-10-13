import { ServiceConfigInterface } from '../interfaces/config_interfaces';

export const serviceConfig: ServiceConfigInterface = {
    jwt: {
        refreshSecret: process.env.JWT_Refresh_Secret_KEY || 'vscode',
        accessSecret: process.env.JWT_Access_Secret_KEY || 'keyboard',
    },
};

export const MONGODB_URI = 'mongodb://localhost:27017/';
export const MONGODB_DB_MAIN = 'blog_db';
export const MONGO_URI = `${MONGODB_URI}${MONGODB_DB_MAIN}`;

export const connectOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
};

export const sessionSecret: string = process.env.SESSION_SECRET || 'keyboard cat';
