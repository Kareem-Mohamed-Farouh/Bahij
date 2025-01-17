import { Component, Input, input } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { NavbarMealComponent } from '../navbar-meal/navbar-meal.component';
import { BreakFastComponent } from '../break-fast/break-fast.component';
import { PastaComponent } from '../pasta/pasta.component';
import { SeaFoodComponent } from '../sea-food/sea-food.component';
interface IMeals {
  strMeal: string;
  strMealThumb: string;
  Desc: string;
  idMeal: string;
}
@Component({
  selector: 'app-meal',
  imports: [
    RouterOutlet,
    NavbarMealComponent,
    BreakFastComponent,
    PastaComponent,
    SeaFoodComponent,
    RouterLinkActive,
    RouterLink,
  ],
  templateUrl: './meal.component.html',
  styleUrl: './meal.component.css',
})
export class MealComponent {}
