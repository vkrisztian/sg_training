import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RandomService {

  constructor() { }

  createRandomNumbers(minValue: number, maxValue: number, length: number): number[] {
    const result: number[] = [];

    while(result.length < length){
      const number = Math.floor(Math.random() * (maxValue + 1 - minValue)) + minValue;
      if (!result.some(x => x === number)) {
        result.push(number);
      }
    }


    return result;
  }
}
