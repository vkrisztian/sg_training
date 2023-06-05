import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-page',
  templateUrl: './game-page.component.html',
  styleUrls: ['./game-page.component.scss']
})
export class GamePageComponent implements OnInit {
  public resultMap: Map<number, number[]> = new Map();
  public isPlayed = false;

  public get resultKeys() {
    return Array.from(this.resultMap.keys());
  }

  public getResultKeys() {
    return Array.from(this.resultMap.keys());

  }

  constructor() {
    this.resultKeys === this.getResultKeys()
   }

  ngOnInit(): void {
  }

  play() {

  }

  onNumbersChanged(changedObj: {index: number, numbers: number[]} ) {
    this.resultMap.set(changedObj.index, changedObj.numbers);
    console.log(this.resultMap);
  }

  getValue(key: number) {
    return this.resultMap.get(key)?.join(',');
  }
}
