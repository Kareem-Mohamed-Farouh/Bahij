import { Component, Input } from '@angular/core';
interface IMeals {
  strMeal: string;
  strMealThumb: string;
  Desc: string;
  idMeal: string;
}
@Component({
  selector: 'app-break-fast',
  imports: [],
  templateUrl: './break-fast.component.html',
  styleUrl: './break-fast.component.css',
})
export class BreakFastComponent {
  @Input() breakFastData!: IMeals[];
}
