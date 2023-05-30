import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-board-header',
  templateUrl: './game-board-header.component.html',
  styleUrls: ['./game-board-header.component.scss']
})
export class GameBoardHeaderComponent {

  @Output() onRandom = new EventEmitter();
  @Output() onDelete = new EventEmitter();
  constructor() { }

  clickRandom() {
    this.onRandom.emit();
  }

  clickDelete() {
    this.onDelete.emit();
  }
}
