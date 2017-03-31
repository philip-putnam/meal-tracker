import { Component, OnInit } from '@angular/core';
import { Food } from '../food.model';
import { FoodService } from '../food.service';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  providers: [FoodService]
})

export class MainComponent implements OnInit {
  foods: FirebaseListObservable<any[]>;
  addFoodButton: boolean = true;
  hideFormButton: boolean = false;

  constructor(private foodService: FoodService) { }

  ngOnInit() {
    this.foods = this.foodService.getFoods();
  }

  showAddFoodForm() {
    this.addFoodButton = false;
    this.hideFormButton = true;
  }

  hideForm() {
    this.addFoodButton = true;
    this.hideFormButton = false;
  }

  submitNewFoodForm(name: string, calories: number, details: string) {
    var newFood: Food = new Food(name, calories, details);
    this.foodService.addFood(newFood);
  }

}
