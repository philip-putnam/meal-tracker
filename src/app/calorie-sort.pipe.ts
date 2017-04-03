import { Pipe, PipeTransform } from '@angular/core';
import { Food } from './food.model';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Pipe({
  name: 'calorieSort',
  pure: false
})
export class CalorieSortPipe implements PipeTransform {

  transform(input: any, calories, operand) {

    if (calories === undefined || operand === undefined) {
      return input;
    } 


    // if (calories === undefined || operand === undefined) {
    //   return input;
    // } else {
    //   if (operand === 'greaterThan') {
    //     return input.filter(function(food) {
    //       return food.calories >= calories;
    //     });
    //   } else if (operand === 'lessThan') {
    //     return input.filter(function(food){
    //       return food.calories <= calories;
    //     });
    //   } else {
    //     return input;
    //   }
    // }
  }

}
