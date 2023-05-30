import { Injectable } from '@angular/core';
import { UserlistService } from './userlist.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public loggedIn  = false;
  constructor(
    private userListService: UserlistService
  ) { }

  validateLogin(userName: string, password: string): boolean {
    const user = this.userListService.getUsers().find(user => user.userName === userName);
    if (!user) {
      return false;
    }

    this.loggedIn = user.password === password;
    return this.loggedIn;
  }
}
