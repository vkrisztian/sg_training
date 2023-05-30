import { IUser } from "./IUser";

export interface IUserListService {
    getUsers: () => IUser[];
    getUserById: (id: number) => IUser | undefined;
}