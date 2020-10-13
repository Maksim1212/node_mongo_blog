import { UserMainInterface } from '../interfaces/user_model_interface';

export default function getUserMainFields(user: any): UserMainInterface {
    const { name, id } = user;
    return {
        id,
        name,
    };
}
