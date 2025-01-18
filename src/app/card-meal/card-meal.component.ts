import { Component, Input } from '@angular/core';
interface IMeals {
  strMeal: string;
  strMealThumb: string;
  Desc: string;
  idMeal: string;
}
@Component({
  selector: 'app-card-meal',
  imports: [],
  templateUrl: './card-meal.component.html',
  styleUrl: './card-meal.component.css',
})
export class CardMealComponent {
  @Input() seafoodData!: IMeals[];
}
