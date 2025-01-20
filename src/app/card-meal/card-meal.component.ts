import { Component, Input } from '@angular/core';
import { RecommendedComponent } from '../recommended/recommended.component';
interface IMeals {
  strMeal: string;
  strMealThumb: string;
  Desc: string;
  idMeal: string;
}
@Component({
  selector: 'app-card-meal',
  imports: [RecommendedComponent],
  templateUrl: './card-meal.component.html',
  styleUrl: './card-meal.component.css',
})
export class CardMealComponent {
  @Input() Data!: IMeals[];
}
