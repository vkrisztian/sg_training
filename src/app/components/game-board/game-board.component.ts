import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-game-board',
  templateUrl: './game-board.component.html',
  styleUrls: ['./game-board.component.scss']
})
export class GameBoardComponent implements OnInit {
  @Input() minValue: number = 1;
  @Input() maxValue: number = 49;
  @Input() index: number = 1;
  @Input() numbers: number[] = [];
  @Output() numbersChanged = new EventEmitter<Array<number>>();
  public height = 7;
  public heightArray: number[] = [];
  public widthArray: number[] = [];

  constructor() {

    const width = Math.ceil((this.maxValue- this.minValue)/this.height);

    this.heightArray = Array(this.height);

    this.widthArray = Array(width);

    console.log(this.numbers);
  }

  ngOnInit(): void {
  }

  onCellClick(selected: number) {
    if (this.isSelected(selected)) {
      this.numbers = this.numbers.filter(a => a !== selected);
    } else {
      this.numbers.push(selected);
    }
    this.numbersChanged.emit(this.numbers);
  }

  isSelected(num: number) {
    return this.numbers.some(a => a === num);
  }
}
