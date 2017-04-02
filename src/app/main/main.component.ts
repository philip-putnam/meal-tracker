import { Component, OnInit } from '@angular/core';
import { Food } from '../food.model';
import { FoodService } from '../food.service';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { CalorieSortPipe } from '../calorie-sort.pipe';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  providers: [FoodService]
})

export class MainComponent implements OnInit {
  foods: Food[] = [];
  food: Food;
  subscription;
  addFoodButton: boolean = true;
  hideAddFoodFormButton: boolean = false;
  editFoodButton: boolean = true;
  hideEditFoodButton: boolean = false;

  constructor(private foodService: FoodService) { }

  ngOnInit() {
    this.foodService.getFoods().subscribe(result => {
       this.subscription = result;
       this.subscription.forEach(food => {
         this.food = new Food(food['name'], food['calories'], food['details']);
         this.foods.push(this.food);
       });
     });
    // this.foods = this.foodService.getFoods();
  }

  showAddFoodForm() {
    this.addFoodButton = false;
    this.hideAddFoodFormButton = true;
  }

  hideForm() {
    this.addFoodButton = true;
    this.hideAddFoodFormButton = false;
  }

  submitNewFoodForm(name: string, calories: number, details: string) {
    var newFood: Food = new Food(name, calories, details);
    this.foodService.addFood(newFood);
  }

  logValue(calories: number) {
    console.log(calories);
  }

}
