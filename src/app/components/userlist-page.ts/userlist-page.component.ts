import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { userListToken } from 'src/app/app.module';
import { IUser } from 'src/app/interfaces/IUser';
import { IUserListService } from 'src/app/interfaces/IUserListService';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-userlist-page',
  templateUrl: './userlist-page.component.html',
  styleUrls: ['./userlist-page.component.scss']
})
export class UserlistPageComponent {
  public users: IUser[];
  public userName: string = '';
  public password: string = '';
  constructor(
    // private userlistService: UserlistService
     @Inject(userListToken) public userListService: IUserListService,
     public loginService: LoginService,
     public router: Router
  ) { 
    this.users = this.userListService.getUsers();
  }

  public login() {
    const result = this.loginService.validateLogin(this.userName, this.password);
    if (result) {
      this.router.navigateByUrl('/game');
    } else {
      console.error('Wrong userName or password');
    }
  }

  public selectUser(user: IUser) {
    this.userName = user.userName;
  }

  public setUserName(userName: KeyboardEvent) {
    this.userName = (userName.target as any).value;
    userName.stopPropagation();
    console.log(this.userName);
  }

  public setPassword(password: KeyboardEvent) {
    this.password = (password.target as any).value;
    password.stopPropagation();

    console.log(this.password);

  }

}
