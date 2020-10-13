import { UserMain } from '../interfaces/user_model_interface';

export default function getUserMainFields(user: UserMain): UserMain {
    const { name, id } = user;
    return {
        id,
        name,
    };
}
