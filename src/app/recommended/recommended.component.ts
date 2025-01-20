import { Component, Input } from '@angular/core';
interface IMeals {
  strMeal: string;
  strMealThumb: string;
  Desc: string;
  idMeal: string;
}
@Component({
  selector: 'app-recommended',
  imports: [],
  templateUrl: './recommended.component.html',
  styleUrl: './recommended.component.css',
})
export class RecommendedComponent {
  @Input() Datarecomnded!: IMeals[];
}
