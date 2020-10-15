import { MONGODB_DB_MAIN, MONGODB_URI } from './src/config/config';

module.exports = {
    mongodb: {
        // TODO Change (or review) the url to your MongoDB:
        url: MONGODB_URI,

        // TODO Change this to your database name:
        databaseName: MONGODB_DB_MAIN,

        options: {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        },
    },

    // The migrations dir, can be an relative or absolute path. Only edit this when really necessary.
    migrationsDir: './src/migrations',

    // The mongodb collection where the applied changes are stored. Only edit this when really necessary.
    changelogCollectionName: 'changelog',

    // The file extension to create migrations and search for in migration dir
    migrationFileExtension: '.ts',
};
