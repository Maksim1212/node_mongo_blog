import * as mongoose from 'mongoose';
import { MONGO_URI, connectOptions } from '../config/config';
import Post from '../models/post';

module.exports = mongoose.createConnection(MONGO_URI, connectOptions);

const posts = [
    new Post({
        likes: [1, 2, 3, 4, 5, 6, 7],
        title: 'Lorem Ipsum 1',
        body:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        author_id: '5f48026b514f0971d13bdbbe',
        author_name: 'Captein Price',
    }),
];

// let done = 0;
// for (let i = 0; i < posts.length; i++) {
//     posts[i].save(function (err, result) {
//         done++;
//         if (done === posts.length) {
//             exit();
//         }
//     });
// }

function exit() {
    mongoose.disconnect();
}
