import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { RandomService } from 'src/app/services/random.service';

@Component({
  selector: 'app-game-panel',
  templateUrl: './game-panel.component.html',
  styleUrls: ['./game-panel.component.scss']
})
export class GamePanelComponent implements OnInit {
  @Input() minValue: number = 1;
  @Input() maxValue: number = 49;
  @Input() index: number = 1;
  @Input() length: number = 6;
  @Output() numbersChanged = new EventEmitter();
  public numbers: number[] = [];

  constructor(
    private randomService: RandomService
  ) { }

  ngOnInit(): void {
  }

  onRandom() {
    const numbers = this.randomService.createRandomNumbers(this.minValue, this.maxValue, this.length);
    
    this.onNumbersChange(numbers);
  }

  onDelete() {
    this.onNumbersChange([]);
  }

  onNumbersChange(numbers: number[]) {
    this.numbers = numbers;
    this.numbersChanged.emit({
      index: this.index,
      numbers
    });
  }
}
