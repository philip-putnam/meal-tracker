import { Pipe, PipeTransform } from '@angular/core';
import { Food } from './food.model';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Pipe({
  name: 'calorieSort',
  pure: false
})
export class CalorieSortPipe implements PipeTransform {

  transform(input: Food[], calories) {
    if (calories === undefined) {
      return input;
    }

    return input.filter(function(food) {
      return food.calories >= calories;
    })
  }

}
