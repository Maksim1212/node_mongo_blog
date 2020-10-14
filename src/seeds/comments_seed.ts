import * as faker from 'faker';

const commentSeed = [
    {
        id: faker.random.uuid(),
        author_id: faker.random.uuid(),
        body: faker.lorem.text(),
        likes: [faker.random.uuid()],
        post_id: faker.random.uuid(),
    },
    {
        id: faker.random.uuid(),
        author_id: faker.random.uuid(),
        body: faker.lorem.text(),
        likes: [faker.random.uuid(), faker.random.uuid(), faker.random.uuid()],
        post_id: faker.random.uuid(),
    },
    {
        id: faker.random.uuid(),
        author_id: faker.random.uuid(),
        body: faker.lorem.text(),
        likes: [
            faker.random.uuid(),
            faker.random.uuid(),
            faker.random.uuid(),
            faker.random.uuid(),
            faker.random.uuid(),
            faker.random.uuid(),
            faker.random.uuid(),
            faker.random.uuid(),
            faker.random.uuid(),
        ],
        post_id: faker.random.uuid(),
    },
    {
        id: faker.random.uuid(),
        author_id: faker.random.uuid(),
        body: faker.lorem.text(),
        likes: [],
        post_id: faker.random.uuid(),
    },
    {
        id: faker.random.uuid(),
        author_id: faker.random.uuid(),
        body: faker.lorem.text(),
        likes: [faker.random.uuid()],
        post_id: faker.random.uuid(),
    },
];

export default commentSeed;
