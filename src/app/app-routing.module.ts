import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserlistPageComponent } from './components/userlist-page.ts/userlist-page.component';
import { GamePageComponent } from './components/game-page/game-page.component';
import { LoginGuard } from './login.guard';

const routes: Routes = [
  {
    path: '', component: UserlistPageComponent
  },
  {
    path: 'game', component: GamePageComponent, canActivate: [LoginGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
