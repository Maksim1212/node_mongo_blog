import * as faker from 'faker';

const postSeed = [
    {
        id: faker.random.uuid(),
        title: faker.name.title(),
        author_id: faker.random.uuid(),
        author_name: faker.name.firstName(),
        body: faker.lorem.text(),
        likes: [faker.random.uuid(), faker.random.uuid(), faker.random.uuid()],
    },
    {
        id: faker.random.uuid(),
        title: faker.name.title(),
        author_id: faker.random.uuid(),
        author_name: faker.name.firstName(),
        body: faker.lorem.text(),
        likes: [faker.random.uuid()],
    },
    {
        id: faker.random.uuid(),
        title: faker.name.title(),
        author_id: faker.random.uuid(),
        author_name: faker.name.firstName(),
        body: faker.lorem.text(),
        likes: [faker.random.uuid(), faker.random.uuid()],
    },
    {
        id: faker.random.uuid(),
        title: faker.name.title(),
        author_id: faker.random.uuid(),
        author_name: faker.name.firstName(),
        body: faker.lorem.text(),
        likes: [
            faker.random.uuid(),
            faker.random.uuid(),
            faker.random.uuid(),
            faker.random.uuid(),
            faker.random.uuid(),
            faker.random.uuid(),
            faker.random.uuid(),
        ],
    },
    {
        id: faker.random.uuid(),
        title: faker.name.title(),
        author_id: faker.random.uuid(),
        author_name: faker.name.firstName(),
        body: faker.lorem.text(),
        likes: [],
    },
];

export default postSeed;
