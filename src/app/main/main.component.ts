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

  constructor(private foodService: FoodService) { }

  ngOnInit() {
    this.foods = this.foodService.getFoods();
  }

}
