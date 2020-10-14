import postSeed from '../seeds/post_seed';
import userSeed from '../seeds/user_seed';
import commentSeed from '../seeds/comments_seed';

module.exports = {
    async up(db) {
        await db.collection('postsmodel').insertMany(postSeed);
        await db.collection('authUserModel').insertMany(userSeed);
        await db.collection('commentmodel').insertMany(commentSeed);
    },
    async down(db) {
        console.log('down');
    },
};
