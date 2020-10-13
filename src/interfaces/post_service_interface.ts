interface GetAllPosts {
    [index: number]: {
        id: number;
        author_id: number;
        author_name: string;
        title: string;
        body: string;
        likes: string[];
        creation_time: Date;
    };
}

interface OnePost {
    likes: string[];
    _id: string;
    title: string;
    body: string;
    author_id: string;
    author_name: string;
    creation_time: Date;
}

interface PostData {
    title: string;
    body: string;
    author_id: number;
    author_name: string;
    accessToken: string;
}

export { GetAllPosts, OnePost, PostData };
