import { Component, Input, input } from '@angular/core';
import { RouterOutlet } from '@angular/router';
interface IMeals {
  strMeal: string;
  strMealThumb: string;
  Desc: string;
  idMeal: string;
}
@Component({
  selector: 'app-sea-food',
  imports: [RouterOutlet],
  templateUrl: './sea-food.component.html',
  styleUrl: './sea-food.component.css',
})
export class SeaFoodComponent {
  @Input() seafoodData!: IMeals[];
}
