import { Injectable } from '@angular/core';
import { IUser } from '../interfaces/IUser';
import { IUserListService } from '../interfaces/IUserListService';

@Injectable({
  providedIn: 'root',
})
export class UserlistService implements IUserListService {
  private users: IUser[];

  constructor() {
    this.users = [
      {
        userName: 'Józsi',
        password: '1234',
        userId: 0,
      },
      {
        userName: 'Simon',
        password: '6666',
        userId: 666,
      },
    ];
  }
  getUsers(): IUser[] {
    return this.users;
  }
  getUserById(id: number): IUser | undefined {
    return this.users.find((user) => user.userId === id);
  }
}
