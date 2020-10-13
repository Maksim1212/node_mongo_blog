interface OneUserInterface {
    _id: string;
    name: string;
    email: string;
    password: string;
    refreshToken: string;
    is_admin: boolean;
}

interface CreateUserDataInterface {
    name: string;
    email: string;
    password: string;
}

export { OneUserInterface, CreateUserDataInterface };
