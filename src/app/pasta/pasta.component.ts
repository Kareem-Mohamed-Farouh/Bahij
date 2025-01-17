import { Component, Input } from '@angular/core';
interface IMeals {
  strMeal: string;
  strMealThumb: string;
  Desc: string;
  idMeal: string;
}
@Component({
  selector: 'app-pasta',
  imports: [],
  templateUrl: './pasta.component.html',
  styleUrl: './pasta.component.css',
})
export class PastaComponent {
  @Input() pastaData!: IMeals[];
}
