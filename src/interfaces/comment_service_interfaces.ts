interface AllComments {
    [index: number]: {
        id: number;
        author_id: number;
        body: string;
        likes: string[];
        post_id: number;
        creation_time: Date;
    };
}

interface OneComment {
    id: number;
    author_id: number;
    body: string;
    likes: string[];
    post_id: number;
    creation_time: Date;
}

interface CommentData {
    post_id: number;
    body: string;
    author_id: number;
    accessToken: string;
}

export { AllComments, OneComment, CommentData };
