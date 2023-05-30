import { InjectionToken, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IUserListService } from './interfaces/IUserListService';
import { UserlistService } from './services/userlist.service';
import { UserlistPageComponent } from './components/userlist-page.ts/userlist-page.component';
import { GamePageComponent } from './components/game-page/game-page.component';
import { GameBoardComponent } from './components/game-board/game-board.component';
import { GameBoardHeaderComponent } from './components/game-board-header/game-board-header.component';
import { GamePanelComponent } from './components/game-panel/game-panel.component';

export const userListToken = new InjectionToken<IUserListService>('IUserListService');

@NgModule({
  declarations: [
    AppComponent,
    UserlistPageComponent,
    GamePageComponent,
    GameBoardComponent,
    GameBoardHeaderComponent,
    GamePanelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    {
      provide: userListToken,
      useClass: UserlistService
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }